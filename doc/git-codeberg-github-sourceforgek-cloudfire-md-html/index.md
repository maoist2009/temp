### :smile: git/codeberg/github/sourceforgek基础教程，md/html语法，静态/动态网页制作托管发布教程   
`目的:可以用于免审核免代理的代码托管，网络文章发布，资料文件上传分享，制作发布个人网页和博客，做图文笔和图文教程等，请勿用于非法用途`      
          
***
     目录
     一.git和开源代码托管平台发布管理 （小文件传输分享）      
     二.sourceforgek代码托管平台使用指南（无限容量支持大文件传输分享）     
     三.md/html文件语法和书写       
     四.静态网页制作和发布  
     五.动态网页制作和发布 
     六.clouldfire托管网页和域名                    


***
推荐参考资料：
- [在 VSCode 中用 Markdown 做「数字化」学习笔记](https://www.cnblogs.com/lsgxeva/p/15731069.html) 
- [markdown在线教程](https://markdown.com.cn/) 
     
---

## 一.git/gitcode/github基础教程     
     
- [访问codeberg网站](https://codeberg.org/)，注册codeberg账户，       
登陆 创建新项目 ,仓库名和仓库说明随意，开源协议可以设置 gpl3 or later 

- 安装git工具                    
对于debian及其下游分支,打开终端模拟器，输入         
 ```
  sudo apt install git
```         
对于archlinux及其下游分支，输入             
``` 
sudo pacman -S git
 ```  
对于fedora及其下游分支，输入           
```
sudo dnf install git   
```   
对于win和mac,请自行互联网检索安装教程                              
***                   
- 打开终端模拟器，从命令行创建一个新的仓库  （命令行上传同步多个文件比图形化网页内上传方便快速）                      
`cd  目录 ` 进入某文件目录                         
`mkdir xxx `在该文件目录下创建名为xxx的新目录                   
`cd 新目录 ` 进入新目录                                  
  
`touch README.md `    
目录下创建一个md说明文件，也可以用图形化文件管理器右键新建文件,可以用图形化文件管理或者命令行把要上传的文移入目录内                        
`vim（或nano） README.md ` 编辑md文件，可以用记事本或vscode等编辑，也可以图形化文件管理器进入编辑                       
- `git init ` 初始化仓库            
- `git config "用户名"` 修改本地用户名 （可随意）           
- `git config  “邮箱地址” ` 修改本地邮箱（可随意）                       
- `git checkout -b main`         
- `git add README.md  `         
将README.md加入缓存区 (这里如果是添加或修改了多个文件可以 输入 git add .将所有修改过的文件加入缓存区 )              
- `git commit -m "first commit" ` 提交修改，添加提交信息       （这里输入`git commit -m .`可以提交多文件）                      

- `git remote rm origin` 删除已链接仓库  
- `git remote add origin https://codeberg.org/用户名/项目名.git`            
 git链接到自己的项目仓库                    
-
```
git push -u origin main
```                      
推送同步文件到gitcode,需要输入用户名和密码 ,从命令行推送已经创建的仓库                               
- 或者克隆别人的项目到本地修改后上传成自己的
-  `cd   目录`
进入你要下载到本地的目录    
- `git clone 项目地址  `              
然后本地编译修改，修改好以后       
- 修改本地文件的用户名和密码    
`git config “用户名”` 修改用户名         
`git config “邮箱地址” ` 修改邮箱                   

- 提交换成并保存和提交               
`git add . `         
`git commit -m . `        
`git remote add origin https://codeberg.org/用户名/项目名.git `   git链接到自己的项目仓库                    
`git push -u origin main ` 推送同步文件到gitcode,需要输入用户名和密码 ,从命令行推送已经创建的仓库

*** 
## 二. sourceforgek代码托管平台使用指南（无限容量支持大文件传输分享）  
[教程请打开观看](https://sourceforge.net/projects/pureos-virtualbox/files/sourceforge.net/)        
***

## 三.md/html文件语法规则    

- [点击此查看文字视频教程](/doc/git-codeberg-github-sourceforgek-cloudfire-md-html/md%E4%B9%A6%E5%86%99%E5%85%B7%E4%BD%93%E4%BE%8B%E5%AD%90/)  

- [点击此查看其他人的Markdown语法和HTML语法教程](https://markdown.com.cn/basic-syntax/)   
      

*** 

## 四.静态网页制作托管发布
#### 1.书写html网页文件，最简单的方法莫过于md转html,借助vscode的转换插件       
[vscodium-vscode的第三方开源无跟踪版本](https://github.com/VSCodium/vscodium)              

- vscode汉化：   打开左侧插件栏（Extensions），在搜索框中输入chinese,安装中文插件重启启用  
- 安装扩展`Markdown Preview Enhanced`, 用于预览md（边写md边预览），新建md文件用vscode打开，代码窗口右键打开侧边栏预览，在预览框里右键选择export-html-保存为html文件即可生成静态网页。如何书写md文件看标题三 。。           
####  2.上传html网页并托管发布网页
 &ensp;&ensp;注册好codeberg账户后，选择新建codeberg项目,项目名起名为`pages`，上传制作好的html文件，自动生成网址，网址地址为 `https://用户名.codeberg.page/项目名/网页文件名/`         
 建议将网站主页文件名如果设置为 index.html ,上传后主页网址可以精简为：`https://用户名.codeberg.page/`  ，这样更加简洁也方便后面的自定义域添加        
&ensp;&ensp;可以导入别人的在线网页，方式为火狐浏览器打开网页-右键保存网页（完整保存）-修改保存文件名后，上传html文件和同名配置文件夹到gitcode生成新网址，网址为： `https://用户名.codeberg.page/项目名/网页文件名/ `    

**示例**     
[点击此处查看网站示例](https://p23tyjujukk.codeberg.page/git-codeberg-github-sourceforgek-cloudfire-md-html/网页例子/README.html)            
          
&ensp;&ensp;[官方更换自定义域教程](https://codeberg.page/)                   
简要说明：   添加自定义域名可以隐藏codeberg的用户名和仓库名,避免被找到用户下所有公开仓库的所有源码和历史修改记录,以及已删除或修改的历史文件 ,保护用户隐私 ，或者给项目作反代加速绕过防火墙拦截并保护源站ip                       
- 将网页主页命名为`index.thml`        
- 用免费域名网站新建域名，添加下面两记录   
免费域名网站比如[dynv6](https://dynv6.com/)   ，或[cloudns](https://www.cloudns.net/)-可托管到clouldflare双向解析，以及其他       
在域名网站的nds记录添加下面的记录                
     
类型 选择 `CNAME` 名称填子域比如`www`               
内容输入：  
```   
项目名(如果项目名为pages，这里就是pages).codepage用户名.codeberg.page.       
```          


- cogeberge网页项目下新建文件   `.domains`   ，输入下面内容并保存：  
```   
自定义子域（格式为  www.自己的域名）                     
    

``` 
用户名指codebege的用户id                 

- 等待一段时间生效 即可通过网址：`https://www（子域）.域名/网页文件名 `   来访问 ,主页文件名命名为index.html后,访问主页不加网站文件名  ,即 ` https://www.域名/`  ,在目录下可以放多个网页文件,透过文件名来切换（不一定是网页文件，项目内所有文件都可以）          
- 可以用自定义域名访问codebegr该仓库所有内容,地址格式为`https://www.域名/名目/文件名 `      
- 建议所有网页引用自己仓库的链接或图片时都用相对路径而不是绝对路径          
                                                              



***       

## 五.制作动态网页并托管发布                
&ensp;&ensp;[u][使用免费vps网址点击访问](https://dash.infinityfree.com/ )[/u]    
- 注册登陆后选择创建账户，申请域名，申请ssl加密证书（用于发布https加密），此过程需要数个小时，申请后等待后台完成，根据提升完成1-4的操作，然后即可在发布网页时选择安装             
- 打开控制面板，网页管理即可在线制作发布动态网页，这里可以选择在线模板，也可以导入 别人的在线网页，制作完并发布后，网页为http而非https,要开启https,需要ssl证书申请成功后，在网页制作发布页的设置里开启https然后再次发布 
示例：          

## 六.cloudflarre托管网页和域名                     
- [点击此访问网站注册](https://dash.cloudflare.com/login)    
- 上传pages网页，点击pags 新建命名并上传网页压缩包或者所在文件夹(主网页html文件需命名为index.html)             
- 添加自定义域名    
1. 申请免费域名，[打开dynv6](https://dynv6.com/) 注册并申请一个域名，比如 123.com           
其他免费域名网站参考-[列举几个免费域名和权威dns服务器](https://xingpingcn.top/%E5%85%8D%E8%B4%B9%E5%9F%9F%E5%90%8D%E5%92%8C%E6%9D%83%E5%A8%81dns%E6%9C%8D%E5%8A%A1%E5%99%A8.html)      
2. clouldfire的pages 点击自定义域 添加域名，添加域名时回到dynv6 域名网站我的域名，点击新建记录，类型geame,名称起一个简短的比如my，这个会生成一个子域名 my.123.com ， data先随意填写，创建完成后复制生生成的网址name比如 my.123.com 到cloudfire添加域名里，然后选择自己的dns（不选cloudfire的dns）,地址填写子域名网址my.123.com，复制生成的data,回到dynv6的记录，修改之前随意生成的data为cloudfire的，在末尾加一个点号"." 并保存。等clouldfire的dns记录通过用就能使用dynv4的域名网址（比如my.123.com）访问cloufire上传的网页        
3.  等通过tls验证后，可以选择优选ip加速大陆地区访问，修改dynv6域名的的data为 'cf-cname.xingpingcn.top.          '                
#### 补充：     
- 通过链接github/gitlab仓库来同步网页   
cf新建pages,选择链接git,选择github或者gitlab,登陆并授权，可以给所有仓库权限也可指定仓库权限，选择仓库进行部署，这样仓库修改后cf会自动同步部署     
- 建议选择链接github私人库而非公开库，避免源代码被其他人检索到，建议网页和图片之间跳转或者加载自己图片 用相对路径而不是绝对路径              
- 直接使用github/gitlab的pages网页托管服务也可以,但是github pages是被墙的，gitlab自行测试                     

                            




