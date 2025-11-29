#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// 使用 POSIX 路径处理（跨平台关键）
const posixPath = path.posix;

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// ===== 配置常量 =====
const DEBUG_MODE = false; // 调试开关（生产环境设为 false）

// 精确匹配的忽略规则（大小写敏感）
const IGNORED_FILES = [
  '_sidebar.md', '_navbar.md', '_coverpage.md', '404.md', 'LICENSE',
  '.gitignore', 'package.json', 'package-lock.json', 'yarn.lock',
  '.DS_Store', 'Thumbs.db', 'deploy.sh', 'sidebar.js'
];

const IGNORED_DIRS = [
  '.git', '.github', '.vscode', 'node_modules', 'dist', 'build',
  'coverage', '__tests__', '__mocks__', 'assets', 'scripts'
];

// 路径配置
const ROOT_DIR = path.resolve('./');        // 根目录（绝对路径）
const OUTPUT_FILE = path.resolve('./_sidebar.md'); // 输出文件（绝对路径）

/**
 * 将文件路径转换为规范化的相对链接
 * @param {string} filePath - 文件绝对路径
 * @returns {string} 规范化链接（/开头，无扩展名）
 */
function normalizeLink(filePath) {
  // 1. 转换为 POSIX 路径格式
  const posixFilePath = filePath.replace(/\\/g, '/');
  
  // 2. 计算相对于根目录的路径
  const relativePath = posixPath.relative(ROOT_DIR, posixFilePath);
  
  // 3. 规范化路径并清理
  return '/' + posixPath.normalize(relativePath)
    .replace(/^(\.\/)+/, '')        // 移除开头的 ./
    .replace(/\/{2,}/g, '/')        // 合并重复斜杠
    .replace(/\.(md|html)$/i, '')   // 移除 .md/.html 扩展名（不区分大小写）
    .replace(/\/index$/i, '')       // 移除末尾的 /index
    .replace(/\/$/, '');            // 移除结尾斜杠
}

/**
 * 从文件内容提取标题（优先级：H1 > H2 > 格式化文件名）
 * 特殊规则：当提取的标题为"Index"时返回false，触发目录名回退
 * @param {string} filePath - 文件路径
 * @returns {string|boolean} 提取的标题，若为"Index"则返回false
 */
async function extractFileTitle(filePath) {
  try {
    // 读取文件并处理 BOM/换行符
    let content = await readFile(filePath, 'utf8');
    content = content
      .replace(/^\uFEFF/, '')               // 移除 UTF-8 BOM
      .replace(/\r\n/g, '\n')               // 标准化换行符
      .replace(/\r/g, '\n');

    // 1. 优先匹配一级标题 (# 标题)
    const h1Match = content.match(/^#\s+(.*)$/m);
    if (h1Match) {
      const title = cleanMarkdownText(h1Match[1].trim());
      return title.toLowerCase() === 'index' ? false : title;
    }

    // 2. 回退到二级标题 (## 标题)
    const h2Match = content.match(/^##\s+(.*)$/m);
    if (h2Match) {
      const title = cleanMarkdownText(h2Match[1].trim());
      return title.toLowerCase() === 'index' ? false : title;
    }
    
  } catch (error) {
    if (DEBUG_MODE) {
      console.error(`[TITLE] 读取失败 ${filePath}: ${error.message}`);
    }
  }
  
  // 3. 最终回退：格式化文件名（移除扩展名）
  const baseName = path.basename(filePath, path.extname(filePath));
  const formattedName = formatName(baseName);
  
  // 特殊规则：如果格式化后是"Index"，返回false触发目录名回退
  return formattedName.toLowerCase() === 'index' ? false : formattedName;
}

/**
 * 清理 Markdown 特殊字符
 * @param {string} text - 原始文本
 * @returns {string} 清理后的文本
 */
function cleanMarkdownText(text) {
  return text
    .replace(/[*_~`[\]():]/g, '') // 移除影响渲染的字符
    .replace(/\s{2,}/g, ' ')      // 合并连续空格
    .trim();
}

/**
 * 格式化名称（文件名/目录名）
 * @param {string} name - 原始名称
 * @returns {string} 格式化后的名称
 */
function formatName(name) {
  return name
    .replace(/[-_]/g, ' ')                 // 连字符/下划线转空格
    .replace(/(^|\s)\w/g, c => c.toUpperCase()) // 首字母大写
    .replace(/\bIos\b/g, 'iOS')            // 修正特殊术语
    .replace(/\bApi\b/g, 'API')
    .trim();
}

/**
 * 判断是否应忽略条目
 * @param {string} name - 条目名称
 * @param {boolean} isDirectory - 是否为目录
 * @returns {boolean} true 表示应忽略
 */
function shouldIgnoreEntry(name, isDirectory) {
  // 忽略隐藏文件/目录（以 . 开头）
  if (name.startsWith('.')) return true;
  
  // 目录忽略规则
  if (isDirectory) {
    return IGNORED_DIRS.includes(name);
  }
  
  // 文件忽略规则
  const isIgnoredFile = IGNORED_FILES.includes(name);
  const isNonMarkdown = !name.toLowerCase().endsWith('.md');
  
  return isIgnoredFile || isNonMarkdown;
}

/**
 * 递归处理目录生成侧边栏内容
 * @param {string} dirPath - 当前目录路径
 * @param {number} depth - 当前嵌套深度（根目录为 0）
 * @returns {string} 侧边栏 Markdown 内容
 */
async function processDirectory(dirPath, depth = 0) {
  if (DEBUG_MODE) {
    const relativePath = posixPath.relative(ROOT_DIR, dirPath.replace(/\\/g, '/'));
    console.log(`[DIR] 处理中: ${relativePath} (深度:${depth})`);
  }

  try {
    // 读取目录条目
    const entries = await readdir(dirPath, { withFileTypes: true });
    
    // 过滤忽略项
    const validEntries = entries.filter(entry => 
      !shouldIgnoreEntry(entry.name, entry.isDirectory())
    );
    
    // 分离文件和目录
    const files = [];
    const directories = [];
    
    for (const entry of validEntries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        directories.push({ name: entry.name, path: fullPath });
      } else {
        files.push({ name: entry.name, path: fullPath });
      }
    }

    // 处理 index.md 作为目录入口
    const indexFile = files.find(f => f.name.toLowerCase() === 'index.md');
    let indexTitle = null;
    let indexLink = null;
    
    if (indexFile) {
      indexTitle = await extractFileTitle(indexFile.path);
      indexLink = normalizeLink(indexFile.path)+"/";
      
      // 从文件列表中移除 index.md
      const index = files.indexOf(indexFile);
      files.splice(index, 1);
    }

    // 并行处理子目录
    const subdirContents = await Promise.all(
      directories.map(dir => processDirectory(dir.path, depth + 1))
    );
    
    // 检查是否有有效内容
    const hasValidFiles = files.length > 0;
    const hasValidSubdirs = subdirContents.some(content => content.trim() !== '');
    const hasContent = hasValidFiles || hasValidSubdirs || indexFile;
    
    if (!hasContent) {
      if (DEBUG_MODE) console.log(`[SKIP] 空目录: ${path.basename(dirPath)}`);
      return '';
    }

    // ===== 生成 Markdown 内容 =====
    let content = '';
    const indent = '  '.repeat(depth > 0 ? depth - 1 : 0); // 父级缩进
    const childIndent = '  '.repeat(depth);                // 子项缩进

    // 1. 目录标题（非根目录才生成）
    if (depth > 0) {
      const dirName = path.basename(dirPath);
      const formattedDirName = formatName(dirName);
      
      // 关键修复：当index.md标题为"Index"或无法提取时，使用目录名
      const dirTitle = (indexTitle !== false) ? indexTitle : formattedDirName;
      
      if (indexLink && dirTitle) {
        content += `${indent}- [${dirTitle}](${indexLink})\n`;
      } else {
        content += `${indent}- ${dirTitle || formattedDirName}\n`;
      }
    }

    // 2. 处理文件列表
    for (const file of files) {
      const title = await extractFileTitle(file.path);
      // 跳过标题为false的文件（仅index.md会触发此逻辑）
      if (title === false) continue;
      
      const link = normalizeLink(file.path);
      content += `${childIndent}- [${title || formatName(path.basename(file.path, '.md'))}](${link})\n`;
    }

    // 3. 合并子目录内容
    subdirContents.forEach(subContent => {
      if (subContent.trim()) content += subContent;
    });

    return content;
    
  } catch (error) {
    if (DEBUG_MODE) {
      console.error(`[DIR] 处理失败 ${dirPath}: ${error.message}`);
    }
    return '';
  }
}

/**
 * 生成侧边栏文件
 */
async function generateSidebar() {
  console.log('='.repeat(50));
  console.log('🎯 DOCSIFY SIDEBAR GENERATOR (PRECISION MODE)');
  console.log('='.repeat(50));
  
  const startTime = Date.now();
  
  try {
    // 生成侧边栏内容
    const header = `<!-- 生成时间: ${new Date().toISOString()} -->\n\n`;
    const sidebarContent = header + await processDirectory(ROOT_DIR);
    
    // 写入文件（确保末尾有换行符）
    await writeFile(OUTPUT_FILE, sidebarContent.trim() + '\n', 'utf8');
    
    // 输出统计信息
    const endTime = Date.now();
    const lineCount = sidebarContent.trim().split('\n').length;
    
    console.log(`\n✅ 生成成功: ${OUTPUT_FILE}`);
    console.log(`⏱  耗时: ${endTime - startTime}ms`);
    console.log(`📊  行数: ${lineCount}`);
    
    if (DEBUG_MODE && lineCount > 0) {
      console.log('\n🔍 预览 (前10行):');
      sidebarContent.trim().split('\n').slice(0, 10).forEach((line, i) => {
        console.log(`  ${String(i + 1).padStart(2)}: ${line}`);
      });
    }
    
  } catch (error) {
    console.error('\n' + '='.repeat(50));
    console.error('💥 生成失败:');
    console.error(error.message || error);
    console.error('='.repeat(50));
    process.exit(1);
  }
  
  console.log('='.repeat(50));
}

// ===== 主程序入口 =====
if (require.main === module) {
  generateSidebar();
}