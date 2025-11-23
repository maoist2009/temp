# 网站建设指南

## 依赖

Nodejs（最新LTS即可）

```bash
npm install -g pnpm
pnpm install -g docsify-cli
pnpm install -g docsify-tool
```

## 路由

支持url格式的相对路径，注意`/xxx`映射到`xxx.md`，而`/xxx/`则是`xxx/index.md`

## best practice

### Markdown语法

暂略

### 大文件储存

暂略

## 部署

部署前自动生成目录

```bash
bash deploy.sh
```

无需构建，simple http server即可
