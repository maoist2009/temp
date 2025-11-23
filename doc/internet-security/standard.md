# 互联网安全标准纲要           

 #### [请点击此网安网站结合一起使用,下面很多具体资源和教程都在里面](/internet-security/)             
  ***********
#### 马列毛主义的自由及开源软件运动可以定义为:                  
&ensp;&ensp;以马列毛主义为指导,为了社会主义革命-推翻资产阶级统治,为了实现共产主义,开发/推广/使用自由及开源软件来摆脱统治者监视实现信息安全,使之服务于服务于线下/线上革命运动,团结工人阶级群众.他是无国际共产主义运动的重要组成部分.                     
1. 什么是自由软件?                                                         
&ensp;&ensp;自由软件（英语：free software），根据自由软件基金会对其的定义，是一类可以不受限制地自由使用、复制、研究、修改和分发的，尊重用户自由的软件。这方面的不受限制正是自由软件最重要的本质，与自由软件相对的是专有软件（英语：proprietary software，一些人也会将其翻译为私有软件、封闭软件），后者的定义与是否收取费用无关，事实上，自由软件不一定是免费软件，同时自由软件本身也并不抵制商业化。自由软件受到选定的“自由软件许可协议协议”保护而发布（或是放置在公有领域），其发布以源代码为主，二进制文件可有可无。[详细请阅读全文](https://zh.wikipedia.org/zh-cn/%E8%87%AA%E7%94%B1%E8%BD%AF%E4%BB%B6)  
2. 什么是自由及开源软件?                  
&ensp;&ensp;自由及开放源代码软件（Free and open source software或Free/Libre and open source software，缩写为FOSS或FLOSS），又称自由和开源软件，是一种既可归类为自由软件又可归类为开源软件的计算机软件。自由及开放源代码软件允许任何人自由地使用、复制、研究及以任何方式来改动软件，并且其源代码是公开的。[1]自由及开放源代码软件相对于专有软件（proprietary software），后者受到著作权的严格限制，且通常其源代码对用户不开放。          
3. [自由开源与非自由开源软件的分类请参看（可选择性阅读）](https://www.gnu.org/philosophy/categories.zh-cn.html#:~:text=%E8%87%AA%E7%94%B1%E8%BD%AF%E4%BB%B6%E6%98%AF%E6%8C%87%E9%99%84%E5%B8%A6,%E8%AE%BA%E5%85%8D%E8%B4%B9%E8%BF%98%E6%98%AF%E6%9C%89%E5%81%BF%E3%80%82)    
3. 自由及开源软件协议有哪些，具体有什么区别？          
&ensp;&ensp;在使用软件和系统前，一定要仔细阅读其开源协议和隐私协议等（github上的软件不一定都是自由开源）.        根据维基百科，大多数自由软件都使用类似的自由软件许可证，使用最多的自由软件许可如下         
    • The MIT License      
    • The GNU General Public License v2     
    • The Apache License    
    • The GNU General Public License v3     
    • The BSD License       
    • The GNU Lesser General Public License(LGPL)     
    • The Mozilla Public License (MPL)      
    • The Eclipse Public License         
[自由及开源协议的区别具体请看](https://www.runoob.com/w3cnote/open-source-license.html#:~:text=%E5%88%86%E7%B1%BB%20%E7%BC%96%E7%A8%8B%E6%8A%80%E6%9C%AF%201%20Apache%20License%20Apache%20License%EF%BC%88Apache%E8%AE%B8%E5%8F%AF%E8%AF%81%EF%BC%89%EF%BC%8C%E6%98%AFApache%E8%BD%AF%E4%BB%B6%E5%9F%BA%E9%87%91%E4%BC%9A%E5%8F%91%E5%B8%83%E7%9A%84%E4%B8%80%E4%B8%AA%E8%87%AA%E7%94%B1%E8%BD%AF%E4%BB%B6%E8%AE%B8%E5%8F%AF%E8%AF%81%E3%80%82%20Apache,License%EF%BC%89%20%EF%BC%9AGNU%E9%80%9A%E7%94%A8%E5%85%AC%E5%85%B1%E8%AE%B8%E5%8F%AF%E5%8D%8F%E8%AE%AE%E3%80%82%20...%204%20LGPL%20LGPL%E6%98%AFGPL%E7%9A%84%E4%B8%80%E4%B8%AA%E4%B8%BA%E4%B8%BB%E8%A6%81%E4%B8%BA%E7%B1%BB%E5%BA%93%E4%BD%BF%E7%94%A8%E8%AE%BE%E8%AE%A1%E7%9A%84%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE%E3%80%82%20...%20%E6%9B%B4%E5%A4%9A%E9%A1%B9%E7%9B%AE)                 
&ensp;&ensp;注意：自由软件一定开源，开源软件不一定是自由软件，因为说法定义和内涵不统一，为了后文书写方便并结合实际情况,我们统称为自由及开源软件-下面会给原因.                              
&ensp;&ensp;如果严格按照自由软件运动的GNU官网对自由软件的定义，我们将有很少的系统和软件能使用安装，同时避免理解混乱，所以将其分为完全自由软件和相对自由软件（或者叫半自由软件，后者在GNU官网以前被称为半自由，但是目前已经将半自由完全排除在外）           
&ensp;&ensp;其中完全自由软件为：软件本体及其云服务都是自由的，不带有和提供任何专有代码和服务，比如后面提到的Pureos/Parabola /Guix电脑操作系统(都基于gnulinux)，Replicant手机操作系统（基于安卓），浏览器中的GNU/Icecat（火狐浏览器分支之一）              
&ensp;&ensp;相对/半自由软件：虽然软件本体自由，但是其云服务非自由，或者提供自由软件和服务同时也提供非自由软件和服务 ，比如debian/arhlinux/fedora操作系统，lineage/石墨烯等类原生安卓操作系统，fennec/iceraven/firefox（包含火狐官方账户-非自由云服务的火狐浏览器分支），auraro store（遵守自由协议的第三方谷歌商店-但是提供谷歌商店的非自由软件下载） ，proton/vpn/迷雾通等代理工具（服务器非自由）                                 
参考资料：gnu官网-详解我们为什么不认可其他系统 https://www.gnu.org/distros/common-distros.html           
&ensp;&ensp;完全的自由开源软件生态只有在社会主义公有制/共产主义条件下才能真正实现和普及，因为：       
&ensp;&ensp;其一.生产资料公有化以后，人民不被资产阶级的商业利益驱使，开发无资本垄断商业行为的自由软件的作者也能拥有较好的生存环境-不被剥削,生活也有保证，才不会出现很多自由开源作者穷困潦倒无经济来源不得不停止开发维护，老板故意开除员工但是继续使用其开源程序，资本家不遵守开源君子协议窃取大家的开源成果用于商业行为和用于对人民的监管和剥削，资本家打着开源共赢的旗号白嫖参与者劳动力用于快速稳定开发以垄断赢利等等…       
&ensp;&ensp;其二，完全自由的环境需要有自由的硬件作为支撑，而在私有制下，资本家出于个人利益考虑是不太愿意使用和售卖自由硬件的，也不愿意公布其最新核心技术，如果强行将完全自由的操作安装在市面上能购买到的整机设备，很可能因部分硬件兼容性问题无法正常使用，在资本社会下的唯一解法是自学技术，自己采购自由硬件自行组装整机设备，但是这种对专业技术要求较高，而且组装成本也较高（自由硬件因为量产和流通数量等原因价格普遍较高）。     
&ensp;&ensp;结合现阶段实际来说,完全自由和半自由软件都是我们的使用工具,我们可以将完全自由软件和半自由软件统称为自由及开源软件.                            
&ensp;&ensp;从严格意义上说任何国产非自由开源操作系统和软件都是不安全的，都可能带有后门，对用户进行监听，偷偷截图，ocr图片文字识别，抓取日志，读取软件安装列表，上传用户数据包括设备信息地理信息，ip信息等等，即使运行虚拟机或者容器做环境隔离，虚拟机外的程序也是可以通过窗口识别虚拟机内的内容的。操作系统是一切的基础,我们原则上在能保证自己设备能正常运行的同时，尽可能的使用更加相对自由开源的操作系统和软件，即使无法安装完全自由的操作系统，也可以在相对自由的操作系统运行完全自由操作系统虚拟机。                    
&ensp;&ensp;软件和系统选用原则和优先级为:              
1. 完全自由的软件>相对自由/开源的软件(前两者统称为自由开源软件)>国外商业软件>国内商业软件国际版>国内商业软件，    
2. 不用云服务>自由/开源云服务>可以匿名使用的私有/专有云服务>国产实名云服务（包含身份证验证和只绑定手机号等一切包含个人真实隐私）                  
3. 有相对独立的专用设备>无专用设备  
---
#### 要求:下面标准按由易到难,由浅到深分为五级标准,非私有平台普通成员要求达到三级标准,管理应达到二级以上  ,后一级是在前一级基础上,为了不重复不会再次说明,因此需要按照顺序阅读,不要跳过          
                 
---
# ==四级标准==    
 &ensp;&ensp;软件标准：刚入门过度标准-尝试使用自由软件 f-droid 和 github 开源网站,尝试使用国内应用的谷歌国际版减少无必要的权限占用。    
### A. 对于手机/平板              
 1. 做好身份隔离，自由平台和非自由平台，国内和国外软件做好身份隔离，禁止泄漏 xmpp 平台聊天内容包括截图到其非自由平台，比如 qq 微信;    
 2. 国内软件建议换成谷歌应用，减少权限占用，减少国内商业云服务使用    
 3. 翻墙不要开全局，让有需要的软件走代理（教程参照全平台翻墙大全和自由软件手册）          
 4. qq 用户要求              
 能匿名的匿名，禁止冲塔，发敏感词汇，包括铭感政治和铭感互联网技术以及截图转发 xmpp 聊天内信息，减少国内云服务。如果发现所在群聊非常直球和冲塔应立即退出，包括直球宣传 xmpp 群的 qq 群，比如什么宣传什么金星革命器 和不加密的社会主义 xmpp 教程 ， 防止群喝茶被牵连 /暴露使 xmpp。        
*xmpp聊天软件使用特别提醒*        
1.如果是国产系统（安卓系统国产修改版），请先安装元萝卜meta沙盒，然后在沙盒内安装xmpp软件,避免xmpp软件安装被检测上报        
https://github.com/Katana-Official/Meta         
同时设置元罗卜meta的启动密码和自毁密码，如果手机被晶格收缴胁迫，就告诉自毁密码            
2.建议使用代理而非直连，防止访问服务器被网警检测到判定使用xmpp         
3.xmpp账户，id,头像等不要和任何平台有相似，避免被关联        
4.加公开群注意修改不一样的群内id      
5.不要泄露的任何实名信息      
6.加入公开群使用小号，每隔一段时间换一个完全不同的小号      
7.建公开群需使用gajim等设置不公开jid、禁止成员获取用户列表等      
8.在私有平台加人分享xmpp地址使用阅后即焚加密发送新的临时小号地址，加人后在临时小号内发大号账户   
9.关闭xmpp截图功能,避免被私有软件识屏录屏截图   




 5. [使用 fdroid 应用商店安装自由软件，教程](/doc/fdroid-use/)    


fdroid 搜索下列软件安装使用：                     
- 使用自由输入法 fcitx5 放置打字输入跟踪,     
- 使用自由阅读 librera 或者国外的静读天下防止阅读数据泄露，    
- 使用 onlyoffice 办公软件，使用质感文件/esuper 解压缩，使用火狐类浏览器替换国产浏览器    
- 使用移除跟踪 app 分享链接，手机截图分享图片，       
- 第三方自由谷歌商店： f-droid 搜索下载安装并启动 aurora store ，选择匿名登陆进入商店。aurora store  内搜索下载屏幕翻译软件“瞬译”（用于翻译英文软件和英文说明方便后面学习）        


 6. github 网站使用教程:b 站搜索`全世界最强的网站，但是你根本不会用？`或者 `github 使用指南  `       
如何免代理使用 github: b 站搜索 `免代理 github`      

 7. 借助手机安全管家和设置里的权限管理做好手机软件没必要的权限管理，没必要访问储存的关闭储存权限，没必要开定位权限的关定位权限，没必要扫本地设备的关扫描，没必要联网的关闭联网权限。      
 8. [隐藏 ip（代理）](https://gitea.com/gjcxn358/go-to-word)      
 9. [必用自由开源 自由无广告搜索引擎](https://search.pub.solar/search)     
 10. [自由及开源匿名浏览器firefox/fennec/tor/brave/kiwi下载及使用指南]( /doc/firefox-use) ,包括隐私匿名上网,隐藏浏览器指纹信息(屏幕参数硬件参数等),伪装浏览器和操作者系统信息,拦截网络跟踪器,防止账户和浏览记录被泄漏等等          
 11. 软件分类清单：要求尝试学会使用     
- 自由输入法-fcitx5 小企鹅输入法,   
- [小企鹅输入法百万日常词库]( https://github.com/wuhgit/CustomPinyinDictionary)         
   
- 阅读器-librera,     
- 笔记代办-NoNonsense Notes /Standard Notes，   
- 办公 libreoffice/onlyoffice（前者在 dfroid 下载，后者在 fdroid 下载 `aurora  store` 然后搜索 onlyoffice）      
- 文件管理解压缩-质感文件    
- 解压缩-ZipXtract FD    
- 图片查看器-Fossify   
- 相机 -Open Camera     
- 分享链接时去除链接跟踪-移除跟踪（其他应用分享链接时小选择更多，然后选择移除跟踪 app,就能生成不带跟踪的新链接）    
- 元数据清除器-清除图片中跟踪数据    
- 元数据移除/去水印：用 opencamera 拍照可以避免水印，用自由办公软件可以避免文件水印，xmpp 可以开启图片压缩功能去水印，可以用手机局部截图转发图片（不带状态栏时间）      
- [在线去除图片水印网站](https://coding.tools/cn/exif-remover)    
- 播放器-vlc/mpv    
- 自由第三方 b 站-pilipalax 可以免登陆 1080p，可以匿名 ，分享链接不带跟踪
- [影梭 - 用于 Android 8.0+ 的无需 ROOT 权限的虚拟定位 APP](https://github.com/ZCShou/GoGoGo)     

---
11. 了解：     
- 冻结应用-雹 （需要 root 或者 sizuku 激活）
- 无 root 提高用户权限：    
[siziku](https://shizuku.rikka.app/zh-hans/)      
[dhiziku](https://github.com/iamr0s/Dhizuku/)      
- [免 root 权限管理工具 app ops（部分功能付费,免费版足够使用）](https://appops.rikka.app/zhhans/) （需要 root 或 sizuku 激活）   
- EDS Lite/ SSE/Openkeychain 文件加密   
- Extirpater 剩余空间擦除防恢复   
- Duress 错误密码登陆重置手机 （程序自毁）    
- Amaork 文件伪装应用隐藏   
- meta 元萝卜/shelter 沙盒多用户软件
- 安卓上面运行[两仪安卓虚拟机](https://twoyi.app/zh/)  
---    
###  B.对于 pc 电脑/笔记本：      
&ensp;&ensp;要求 windows 加沙盒或者 windows 加 gnulinux 自由操作系统虚拟机，在沙盒国产软件，或者在虚拟机内进行敏感操作    
1. 尝试安装原版 windows（手动破解）而不是出厂自带的有厂商后门的windows 或者修改后的盗版    原版 windows 安装教程： b 站搜索   `正版 windows 系统安装教程`    
 此过程为了稳妥起见需要盘 u 盘（安装故障后可以自己修复），ventoy/refus u盘写入工具 原版 windows 镜像文件        
[windows10 系统官方下载地址](https://www.microsoft.com/zh-cn/software-download/windows10ISO )         
[windows11 系统官方下载地址]( https://www.microsoft.com/zh-cn/software-download/windows11)       
 老设备建议安装 windows10     
[kms系统免费激活工具](https://github.com/zbezj/HEU_KMS_Activator/releases)：        
2. 不要安装国内杀毒和安全软件/应用商店，可以选择 avg/avast/小红伞国际
版/卡巴斯基国际版,，他们都有免费版     
 https://www.avg.com/en-us/free-antivirus-download    
 https://www.avira.com/zh-cn      
最好选择选择安装自由开源杀毒软件 [clamav](https://www.clamav.net/downloads )   
其使用教程：https://cn.windows-office.net/?p=12240         
https://www.cnblogs.com/panpanwelcome/p/16308716.html        
 &ensp;&ensp;如果养成良好的上网习惯，能辨别什么软件无流氓行为，知道去那里下载软件，在更换自由搜索引擎，使用自由浏览器以及广告拦截插件后，能判断安装包是否是正品，观察其网址是否明显异常，下载的软件名称和大小是否正常，安装过程仔细查看和取消捆绑，对未知软件优先放沙盒和虚拟机测试，可以尝试不装杀毒软件，留清理软件就行，杀毒软件不管国籍本身就是一个监控。
3. [自由无广告搜索引擎](https://search.pub.solar/search)  
4. [windwos 开源沙盒下载地址](https://sandboxie-plus.com/downloads/)
 使用教程浏览器搜索 “ sandboxie 安装使用教程”
5. [windows 免费开源虚拟机 virtualbox 下载](https://www.virtualbox.org/wiki/Downloads)
 [使用虚拟机简单安装 gnulinux 完全自由开源操作系统虚拟机](https://sourceforge.net/projects/pureos-virtualbox/files/pureos-virtualbox/)    
6. 关闭和卸载 win 没必要的服务和遥测功能：可以使用软件 [Optimizer](https://github.com/hellzerg/optimizerwindows)   

7. 开源输入法：RIME 小狼毫输入法/同文输入法 
8. 开源浏览器下载地址和使用教程：firefox 国际版/自由之狼浏览器 /brave 浏
览器 参考火狐类浏览器教程
9. 开源解压缩软件：7zip/peazip，官网：https://www.7-zip.org/download.html    
10. 清理 文件粉碎/空间擦除： [ccleaner 下载其免费版足够使]( https://www.ccleaner.com/zh-cn/ccleaner/download)      
11. [卸载软件 geek](https://geekuninstaller.com/)       
12. 自由播放器 ：vlc        
13. [自由开源办公软件 libreoffice/onlyeoffice](https://zh-cn.libreoffice.org/)       
14. 开源多线程下载器/磁力下载器 motrix
15. 了解 veracrypt 加密工具   

---
==补充==,[参考教程](/internet-security/),文件/应用加密/伪装/隐藏教程在章节4.1,第7和第8  
mac地址隐藏在章节4.1,第5        
 
 ---    
## ==三级标准==
### A.对于手机/平板设备：
 &ensp;&ensp;在四级的基础之上， 设备无法解锁安装自由操作系统 ，要求现有安卓加fdroid 自由软件商店，沙盒/多用户或者 gun/linux 子系统方案。权限管理是安全的基础，但是目前很多设备 root 和解锁相困难，这里提供非root 获取高权限的方案。      
- 无 root 提高用户权限：           
[siziku](https://shizuku.rikka.app/zh-hans/ )            
[dhiziku](https://github.com/iamr0s/Dhizuku/ )           
 &ensp;&ensp;使用方法概括为安装改软件后，开启手机开发者功能，开启 usb 调试或者无限调试， 连接电脑使用 adb 指令激活手机权限，或者 wifi 无线调试激活，     
参考 https://shizuku.rikka.app/zh-hans/guide/setup/          
 [安卓调式命令行工具— adb 下载与安装博客园教程](https://www.cnblogs.com/jxuan/p/15065819.html               ) 
 &ensp;&ensp;adb 工具如果不会安装，也可以下载搞机助手，用里面的 adb shell 命令行工具，已配置好 adb 环境 https://lsdy.top/gjzs       
- 获取权限后，安装[第三方软件开源安装器 InstallerX](https://github.com/iamr0s/InstallerX ) 替代官方系统的安装器，绕开系统安装软件时的实名安全检测（需要上面的 shizuku 激活）           
 
也可以连接电脑后用 adb 指令绕开系统安装检测直接推送 app 到手机安装         

- 安装[权限管理软件 app ops (需要上面的 shizuku 激活)](https://appops.rikka.app/zh-hans/ )      
    
&ensp;&ensp;app ops 虽然非开源，少部分功能付费，但是隐私协议较好，而且是国外软件，用它可以修改安卓 ops 来修改隐藏的权限,开源替代品为 `权限管理x`-fdroid应用商店内下载    
#### 以下标准已经默认完成上面操作并安装好 fdroid 自由应用商店了： 
1. 国产系统不要使用厂商提供的云服务，退出现有云服务，将对应软件清除缓存和用户数据后不要再打开，用自由软件 雹 将其冻结（froid 内下载）（只要是非系统必要应用，一般云查找，自带的 视频 音乐 笔记 应用商店 智能家居，健康 等软件都是可以冻结的。   
2. 将日常不可避免的国产软件-从 aurora （这个在 fdroid 内下载）下载对应的谷歌国际版替换，来减少权限和广告，    
3.  将敏感应用安装在安装在沙盒内-meta 元萝卜/shelter 多用户/炼妖壶元萝卜下载地址：（元萝卜可以设置自毁密码自毁沙河内部所有软件，防止被逼问密码 ）https://github.com/Katana-Official/Meta
shelter 在 fdroid 上下载(shelter 开启工作应用后可对其中的软件进行冻结等操作)      
炼妖壶下载地址：https://github.com/oasisfeng/island         
（炼妖壶和 shelter 是一样的软件，如果 shelter 运行不了可以用炼妖壶替代）
 注意：shelter/炼妖壶不会改变工作应用运行的设备信息，容易和主用户产生设备信息关联，元罗布沙盒内的软件是可以探测到沙盒外的文件和程序的-真机探测不到沙盒内，因此不要在元罗布内安装非自由开源软件，shelter 内和元罗布内的软件是可以相互探测的,因此不要在里面又装非自由开源软件又装自由软件。，如果要这样，可以在 shleter/炼妖壶内安装元罗布，这样就能运行两个独立的元萝卜沙盒。    
或者将相关应用安装在开源的两仪虚拟机内    
https://twoyi.app/zh/                
4. 也可以通过安卓的 proot/chroot 容器安装 gun/linux 桌面系统，以子系统的方式子运行敏感软件, 不影响原安卓系统正常运行使用，   
[教程点击此](/doc/android-to-gnulinux//)   
 5.通过 app ops 对每一个应该做权限管理，可以多用 忽略功能伪装给权限欺骗软件避免一些软件不给权限不让用。英文可以的可以用“权限管理x”，在fdroid内下载，相比闭源的app ops,他是开源的        
 6. 通过 github/fdroid 安装自由开源软件：   
- 对关键软件/文件做隐藏和加密，比如 amarok 隐藏软件-开启其自熄屏自动隐藏软件和日历伪装，密码登陆功能（需要 shiziku 或者 root）：
- xmpp 聊天软件更换为 monocles chat ，登陆勾选内部储存化，设置开启启动密码，设置附近和消息定时自动删除，用 amaork 对其隐藏
- 用 sse 软件加密关键文件和擦除关键文件（防止恢复），或者用 opengpg 软件对关键文件加密。
- 用 eds lite 创建虚拟磁盘用于加密储存铭感文件 （选择 veracrypt 格式可以和电脑 veracrypt 共用）        
文件加密可以配合 amaork 的文件隐藏功能一起使用提高安全性      
- 定时用 expirtater 对设备剩余空间进行随即数据覆盖擦除（防止删除的文件被恢复）      
- 使用 Duress 等软件 对手机设置 错误密码登陆多少次自毁手机程序（恢复出厂设置 ）     
- 用相对自由的浏览器上网（比如 fennec/mull/tor/iceraven 浏览器，做好安全设置和反跟踪设置,定时清理历史记录，并开启 ublock/adguard/webrtc 插件的webrtc 拦截，防止上网真实 ip 泄露）（具体见文件 firefox/tor/fennec 教程）      
- 用 tor/orbot/invizible 隐藏 ip,保持匿名账户并不要关联内网信息，有条件通过面具模块和 xp 框架软件伪装设备信息和 gps。（tor 具体教程包括如何获取网桥见全平台翻墙教程）        
 7. 隐藏地理信息，使用 闭源软件fake gps 伪装地理定位信息 （aurora 内下载，非自由软件），也可以使用 dia 取消对话框-需要 root（root和 xp 框架教程在标准二级） ，最好使用开源软件[影梭 - 用于 Android 8.0+ 的无需 ROOT 权限的虚拟定位 APP](https://github.com/ZCShou/GoGoGo)     

8. 注意图片/文件中隐藏的设备信息/地理/平台/id 水印，拍照的时候也不要带标志性建筑。去水印地理等信息在线网站 https://coding.tools/cn/exif-remover 。另一种简单可行的方式是用手机局部截图（不带状态栏-时间信息）分享，不分享原图片（但是不确定国产安卓的截图会不会带隐藏水印），xmpp 内可以开启图片压缩来去水印软件        
 app 元数据清除 也可以做到清除图片内敏感信息（frroid 内下载）       
 9. xmpp 聊天软件和其他平台做好身份隔离,不要泄露真实信息，拥有多个账户，不确定安全性的用小号/新建临时账户加好友和联系,确定身份后在小号/临时账户内发真实账户（禁止在国内非自由平台发个人真实账户）。有条件的用伪装版 xmpp 软件替代普通版。至少要求对此聊天软件做应用隐藏和启动加密
10. 如果不得已要用 qq 和微信和人联系，涉及铭感信息/文件 ，可以发送加密信息   
方法 a.：离线加密 比如安卓 SSE/Openkeychain，缺点：知道密文缺点 会留明显密文痕迹。   
方法 b： 在线支持加密的阅后即焚网站 在线加密解密，设置只能阅览一次 ，优点 只知道链接，不知道密文，而且会过期，无法证实也无法证伪。缺点 ：加密性不如 1。    
方法 c：用方法 2 发送方法 1 的内容 完美结合。       
注意：如果要在安卓上面使用安卓的虚拟机，请注意现有的虚拟机都为国产非开源，存在隐私泄露风险，请在真机上通过（app ops ，dia 取消对话框，隐藏应用列表等）对虚拟机做严格权限限制并做设备信息伪装，虚拟机应使用免登陆的破基本而不是官方实名的官方版。    
11. 新方法:借助临时加密聊天室网页版或者阅后即焚留言板    ,发送临时链接给对面进入安全环境临时加密聊天 ,[教程点击此](/internet-security/)                  
### B. 对于电脑/笔记本：
&ensp;&ensp;熟练在 windows 环境下使用 gnulinux 虚拟机和在虚拟机内运行自由软件 ，安装教程参考标准的四级  

软件：   
1. 使用自由软件     
2. 使用加密软件再次加密重要文件和分区，（kgpg/veracrypt，后者可以设置假密码）
3. 使用 tor 浏览器上网和让其他应用走 tor 代理（教程参考翻墙大全和 firefox/tor 使用教程）
4. 使用[] BleachBit （支持 windows 和 gnulinux）](https://www.bleachbit.org/ )定时清理垃圾缓存，和剩余空间擦除（防止文件恢复），用其文件粉碎功能替代文件删除         
 以及 [eraser（仅支持 win）：](https://eraser.heidi.ie/)   
5. xmpp 聊天软件和其他平台做好身份隔离，拥有多个账户，不确定安全性的用小号加好友和联系，不
要泄露真实信息      
6, 常用 gnu/linux 分类软件目录（待定）      
- 输入法-fcitx5      
- 办公-libreofice/onlyoffice   
- 阅读器-koodoreader   
- 解压缩-file-roller,peazip 等  
- 浏览器-tor browser/LibreWolf/brave  
- pdf 编辑器-libreoffcie 带有 pdf 编译功能   

---   
# ==二级==
  &ensp;&ensp;设备难以解锁刷机，或因无备用机，又无刷机救转经验，难以放心单设备刷机。在三级的基础之上，采用虚拟化安装专用软件和设备信息伪装以以及严格，混合/多重加密/隐藏达到最大限度的安全。
### A. 对于手机/平板
具体：
 &ensp;&ensp;方法 1. shelter/炼妖壶/amaork 应用隐藏 -元萝卜沙盒（设置开启设备信息伪装，假密码自毁）-沙盒化安装真软件（shelter 国产安卓可能装不上，可以用前文提到的炼妖壶替代）
 &ensp;&ensp;方法 2. shlter/amaork-商业安卓虚拟机免登陆破解版-（app ops 对其做权限管理）-虚拟机内开启设备信息伪装-开启虚拟机的 root 权限和 xp 框架 ，安装机型伪装模块，使用面具模块和设备信息伪装 xp 框架伪装设备信息做二次伪装（dia/thanox），完成操作后安装使用铭感软件。    
带面具 root 和 xp 框架的商业安卓虚拟机免登陆破解版下载地址：   
- [机型伪装 magisk 面具模块开源项目（需要刷入面具 root）](https://github.com/HuaZoffice/Magisk_change-your-phone-model )     
 &ensp;&ensp;下载对应压缩包后使用面具 magisk app 内模块刷入 刷入压缩包  
- [dia 对话框取消（需要面具刷入 xp 框架比如 lsposed）](https://github.com/Xposed-Modules-Repo/dialog.box  )        
- thanox 权限管理：aurora 内下载，注意：此软件部分开源而且付费，第一次启动需要谷歌服务验证可以在虚拟内内安装前面标准的安全软件提升安全性 

&ensp;&ensp;方法 3. 安卓 proot/chroot 容器运行 gnlinux 桌面系统，在其中运行敏感程序，教程：b 站搜索 `zerotermux 安装 linux `（可以在安卓容器化运行 gnuliunx 桌面系统的的 arm 框架应用）   
 [一键恢复安装包简单安装拥有 debian11 请看此：](/doc/android-to-gnulinux/ /)    
   
 &ensp;&ensp;对于加密和伪装 ，可靠使用 edslite 虚拟磁盘加密储存文件，将文件名改为正常文件做伪装，然后用 amaork 对其隐藏。        
## B.电脑/笔记本：        
1. [分区加密安装自由的 gnu/linux 发行版，参考教程](/doc/gnulinux-install/)      
 2. 并设置开机密码和不同的 root 密码，可以开多个账户（一真几假），最好双或者多系统-比如 win 加不同发行版的 gnulinux，一真一假/一真两假，windows 做默认并设置 win 密码（有条件也可以对 win 系统分区加密，装像一点）,有条件隐藏或伪装 gnu/linux 启动项，晶格审讯可以告诉假系统假账户假密码，多系统还有一个好处是一个做日用工作用，一个做专用。     
[gunlinux 常用指令参考（包括修改密码添加多账户） ](/doc/gnulinux-shell//)    
      

3. 安装使用 bleachbit 垃圾清理软件，定时清理系统日志和垃圾，避免日志泄露，同时用其文件粉碎功能和剩余空间擦出功能删除文件防止文件可能被别人恢复。       
4. linux 的 luks 加密可以配合软件 veracrypt 虚拟磁盘加密隐藏卷lusk 加密可以用图形化磁盘管理软件比如 gnome-disks                    
[veracrypt 下载和使用](/internet-security/)
（luks 加密分区内放置 veracrypt 做好的虚拟加密磁盘）实现多重混合加密，还可以配合使用 kgpg/opengpg ，如果不可避免要使用非自由软件或者国产软件，请安装 kvm/VirtualBox 虚拟机，在虚拟机内运行对应软件，或者在双系统的另外一个 windows 里运行。           
 ---
#  ==一级==    
&ensp;&ensp;拥有能解锁刷机的备用机，但是因个人生活工作原因不能经常使用两台设备（工作加班等限制），同时担心一台设备丢失或损坏后，要用另一台设备插卡并登陆国产应用和非自由应用，临时混用主次。此种情况下需要主次都可能要登陆支付宝微信等，特别是微信这种需要旧设备验证的。也就是说拥有两台设备但是不能严格划清使用界限。保证两设备有一台能解锁刷机。   
&ensp;&ensp;在二级的基础之上，备用机安装相对自由的操作系统。工作日常机：工作用（支付和上班打卡，监狱机，兼部分日常娱乐，性能要求低，可以买二手）       
&ensp;&ensp;日常专用机：部分日常娱乐和敏感软件专用（性能能满足个人日常使用，也能买二手）二手机几百块，费用不会太高。       
### A.手机/平板：     
&ensp;&ensp;专用及系统为相对自由开源操作系统，并设置开机密码，推荐类原生安卓lineage/crdroid， 或者比 lineage 安全性更高的 GrapheneOS，DivestOS ，rros。(crdroid 官网适配机型更多，注意别装带谷歌服务 gapps 的类原生版本，有些类原生提供带谷歌服务和不带两个版本，如果需要临时使用谷歌服务，可以在恢复模式或者面具 magsik 刷入开源 gapps 模块比 litegapps，或者下载精简谷歌服务 microg 然后安装谷歌商店等应用，使用时打开，不使用时用自由冻结软件雹冻结，此软件在 fdroid 下载，microg 可以在 droid-ify 内下载）      
 &ensp;&ensp;严格管理权限，严格使用冻结软件冻结不需要使用的软件，灵活使用设备信息修改软件 dia/thanox,经常更换设备信息，对不同软件设备不同设备信息，特别是混用的国产应用  

---
==解锁刷机教程==：  

&ensp;&ensp;参考资料 ：自由软件手册内刷机教程，酷安论坛你手机型号的机型专区，xda 论坛机型专区，b 站相关视频    
&ensp;&ensp;机型专用类原生刷机参考资料：教程 酷安 app（浏览器搜索下载，不要下载应用商店的版本-功能不全），搜索你的机型 进入机型专区，分别搜索这些关键词 `类原生 类原生刷机 解 bl`       

[文字教程参考此](/doc/android-install /)  

---              

- magisk 面具 root 和 xp 框架刷入教程         
 &ensp;&ensp;下载好面具 magisk 或者狐狸面具 kitsune gisk（后者能对应用隐藏 root） 的apk 软件包，复制文后新文件文件后缀从.apk 改为.zip，进入第三方 recovry，刷入 magisk.zip,启动后再次安装此 apk，如果无第三方 recovery 恢复模式，可以解压系统安装镜像里面的 boot 文件，直接安装好面具 app，app 内选择安装修补 boot-得到新的 boot 分区文件-导入电脑，手机开机进入 bootloader 模式线刷 boot 分区然后重启即可，xp 框架刷入很简单 下载 lsposed,面具 app 内刷入模块就行。         
原版面具 magisk           
https://github.com/topjohnwu/Magisk      
kitune magisk （有部分隐藏root的能力）            
https://github.com/HuskyDG/magisk-files/      
KernelSU 内核 root  （root隐藏较好，防止部分国产私有软件检测到root不让使用）     
https://github.com/tiann/KernelSU     
Apatch内核root（支持机型较kernelsu多，功能相似，root隐藏较好，防止部分国产私有软件检测到root不让使用，带root密码）        
https://github.com/bmax121/APatch         
lsposed 官方下载：        
https://github.com/LSPosed/LSPosed        
机型伪装 magisk 面具模块开源项目（需要刷入面具 root）：     
https://github.com/HuaZoffice/Magisk_change-your-phone-model    
 &ensp;&ensp;下载对应压缩包后使用面具 magisk app 内模块刷入 刷入压缩包   
dia 对话框取消（需要面具刷入 xp 框架比如 lsposed）：      
https://github.com/Xposed-Modules-Repo/dialog.box/releases/tag/1-23.11    
 &ensp;&ensp;再里面对软件开启 wifi 伪装，机型伪装，gps 伪装，蓝牙伪装，反 vpn 检测，致盲等   ,隐藏应用列表 致盲 app 用：（通过黑名单白名单让应用 a 探测不到应用 b,，或者只能探测到应用 c）     
https://github.com/Xposed-Modules-Repo/com.tsng.hidemyapplist      
隐藏应用列表可以让应用 a 检测不到 root ，实现隐藏 rootshamiko 隐藏 root 模块      
https://github.com/rushizgithub/shamiko       
sui 模块 （sizhiku 的面具 root 版）      
https://github.com/RikkaApps/Sui       
 &ensp;&ensp;救砖模块等其他模块 请酷安 app 内 magisk 模块专区自行检索下载thanox 权限管理软件： 付费，需谷歌商店下载并付费验证（选用）软件要求，在二级基础之上，要求国产应用尽量沙盒化或者虚拟机安装，做严格权限管理和设备伪装，不用就关闭后台或者冻结，如果不可避免使用谷歌服务验证，谷歌服务不用时就冻结          
### B 电脑：     
&ensp;&ensp;在 gnulinux 系统环境下，虚拟化安装 gnulinux 完全自由版配好常用软件后导出虚拟机备份，每次使用时导入，使用完以后删除虚拟机，只有需要长期保存的文件才加密后从虚拟机内移动到真机保存，或者类原生安装虚拟机，避免历史数据和系统运行日志被泄露。        
 &ensp;&ensp;如果要使用非自由/国产软件，安装在 gnu/linux 内核自带的 kvm 虚拟机内，可以安装不同虚拟机区分不同用途，    
# ==特级：==
  &ensp;&ensp;在一级的基础上有三台设备（包括手机电脑平板），保证至少一台能解锁刷机，一台用于日常和工作，一台用于备用，一台买来就不插卡作为完全专用。专用手机不安装任何非自由软件。设备都可以购买便宜二手，只要性能能满足之间需求。或者两台设备但是不担心一台会损坏遗失/出门少，其中一台能刷机，一台工作日常，一台专用，只安装自由软件，严格区分使用同时所有设备至少都要满足四级要求（包括工作机）   
  &ensp;&ensp;专用手机更为严格的方式是删除手机基带，让其丢失设备序列号和入网许可，插卡也不能读卡，只能使用 wifi,源头上解泄露风险   
电脑：
  &ensp;&ensp;自己通过组装自由的硬件组装电脑和笔记本，并安装自由操作系统，杜绝一切非自由软件使用

---    
 ## ==备用安卓手机采购指南==
 &ensp;&ensp;能买谷歌二手机手机就买谷歌手机，可以去闲鱼等平台购买，解锁及其方便，仅需一条指令，类原生刷机包较多，还有一些独占类原生系统           
&ensp;&ensp;国产手机可以选购一加（解锁刷机方便），非出厂自带澎湃系统的小米可以买（澎湃系统解锁要“计算机考研”），魅族手机都能解锁但是刷机包较少，可以刷 gsi 类原生，oppe vivo 中兴部分机型能解锁但是基本无刷机包，也需要刷gsi,三星手机要看具体情况，华为纯国产监狱手机特别是带新鸿蒙系统的，可以告别刷机，他能充当监听器和云控远程删用户文件，千万不要购买。                 
&ensp;&ensp;专用机可以买二手，如果不会刷机，闲鱼上有刷好类原生系统的二手机新机购买不要买时下热点机型，新机型一般折腾刷机分享刷机包的少，最好找一两年前的手机,手机采购前请先逛 xda 论坛或者酷安论坛对应机型专区搜索 bl 刷机等词汇看是否方便解锁刷机     

---
# ==文件分享标准：==
&ensp;&ensp;文件传输标准-临时文件/机密文件用阅后即焚实例，大文件和完整资料库这种需要长期云保存分享的可以用国外匿名网盘 mediafire/mega,网盘可以配合文件加密手段预防网盘泄漏风险，非隐私文件也可以通过 github/codeberg/sourceforge 等公开分享（可以分享加密文件）
[具体请参考此](/internet-security/)                    