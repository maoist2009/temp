### 自由及开源操作系统虚拟机使用教程

--- 
 
&ensp;此教程适用于无能力安装自由及开源操作系统的新手用户，或者安装了但是需要额外虚拟机提供隔离的操作环境(同时为了匿名伪装设备信息) ,以及电脑硬件限制无法正常运行自由操作系统的用户(只能安装普通自由及开源操作系统-为了兼容性在内核中加入部分非核心的私有代码同时内置软件源里有非开源的私有/专有软件) 
         
--                      
- [配置好的虚拟机备份包开源下载地址点击此跳转](https://sourceforge.net/projects/pureos-virtualbox/files/gnulinux-virtualbox/ )     
---    
&ensp;&ensp;说明：上面地址里的ova格式文件为linux内核的自由开源虚拟机备份镜像包，exe格式文件为windows下virtualbox的安装包，windows文件夹为windows虚拟机备份包及说明，VBoxGuestAdditions_6.1.30.iso为virtualbox的扩展包镜像（开启3d加速以及共享真机文件功能，手动安装虚拟机后需需要挂载到虚拟机内执行扩展包安装）                          
                                       
&ensp;&ensp;虚拟机1pureos（基于debianlinux）是一款完全自由开源的linux内核的桌面操作系统，可以在virtualbox虚拟机内运行 (支持苹果 ，windows和linux)                 
在原pureos基础上，更换gnome桌面为xfce4（更精简，占用更低），安装了 xfce4配套软件，ibus自由中文输入法，libreoffice自由办公软件 ， koodereader本地阅读器 ，firefox浏览器（已改好安全设置并开启ublock广告拦截和webrtc拦截）      
tor浏览器（已内置可用web网桥），v2raya代理（未配置），localsend（局域网文件加密传输分享）-其他软件自行安装，安装官方软件仓库外的第三方软件前请先自行查看其开源协议        
&ensp;&ensp;虚拟机2 . mabox                  
mabox基于manjaro（archlinux），是一款自由及开源操作系统，特点是占用极低，专门针对低端老旧设备设计，运行比pureos更流畅，软件安装方便（aur用户仓库涵盖大部分linux内核软件），此虚拟机版本集成图形化桌面xfce4和openbox,其中openbox桌面环境系统占用运行内存才300M,xfce4桌面内存占用才600M ，因此很适合作为虚拟机，此虚拟机内置fcitx5自由中文输入法，libreoffice自由办公软件 ， koodereader本地阅读器 ，firefox浏览器， tor浏览器（已内置可用web网桥），v2raya代理（未配置），localsend（局域网文件加密传输分享），自由视频播放mpv,自由加密软件veracrypt等等，
软件源已添加archlinuxcn中国电子科大镜像源，chaotic-aur源，因此可以免代理免本地编译安装大部分archlinux的aur用户仓库软件源内的软件。  
mabox虚拟机网络连接方式设置为桥接（方便使用虚拟机内的localsend和真机开启localsend软件后共享文件文档），如果无法联网，请自行在vitualbox内更改网络连接方式为网络地址转换                        
   
&ensp;&ensp;如果嫌弃虚拟机ova镜像下载慢或者需要自己构建，可以去pureos官网下载原系统安装镜像ios,然后新建虚拟机安装系统后自行配置软件        
virtualbox官网：https://www.virtualbox.org/    ，在这里可用下载最新版本（项目里的版本较旧）                         
pureos官网：   https://www.pureos.net/               
mabox官网：      https://maboxlinux.org/                      
也可以使用现成的虚拟机系统whonix（集成全局tor），官网 : https://www.whonix.org/                                        
或者u盘系统tails（集成全局tor）-非虚拟机 ，官网:    https://tails.net/  
whonix和tails都基于debianlinux,因此指令通用          
                               
---                     

## 一. whonix虚拟机自建配置方案           
&ensp;&ensp; whonix虚拟机安全性非常高，内置全局tor和预设好各自安全设置，将系统分为网关系统的工作系统两个系统，网关系统用于对外连接网络，工作系统使用局域网连接网关系统来上网，避免被工作虚拟机内程序检测，专门为匿名设计，安全性比tails不差         
图文安装及导入虚拟机教程：           
https://www.cnblogs.com/jockming/p/12052045.html           
- [下载whonix虚拟机系统virtualbox版ova镜像](https://www.whonix.org/wiki/VirtualBox)，安装好virtualbox虚拟机并启动，点击管理-导入虚拟电脑-导入完成后先打开whonix gateway的虚拟机，在桌面开始菜单搜索 anon ，打开anon connection软件，勾选configure,然后点击next,勾选 provide a bridge 。输入可用的obfs4网桥。一行一个，点击next完成连接，保持此虚拟机开启，打开whonix workstaten虚拟机，在开始菜单找到tor浏览器并启动测试网络连接，网络正常即可使用。       
#### 汉化系统及安装中文输入法                 

- whonix workstaten虚拟机安装系统中文 ，桌面打开终端软件 terminal  ，输入                        
`sudo dpkg-reconfigure locales `在弹出的列表中用空格选择 `zh_CN.UTF-8` ，然后回车确认 完成安装      
- 安装中文字体                      
`sudo apt-get install fonts -wqy-zenhei fonts-wqy-microhei`     
-安装fcitx5中文输入法                
`sudo apt install fcitx5 fcitx5-chinese-addons`    
- 重启生效       ，ctrl+空格键 切换输入法，或者点击状态栏图标手动切换              
- 安装libreoffice办公套件中文版         
`sudo apt search libreoffice`         
找到 libreoffice zh cn        
复制包名，输入       
`sudo apt install libreoffice中文版包名 `
安装中文版libreoffice                
-更新系统   
`sudo apt update        
sudo apt updrade`   
- whonix虚拟机默认用户们为`user`,无密码，建议修改whonix workstaten虚拟机的root用户密码和user用户密码            
修改root密码     
` sudo passwd `
修改用户密码     
 `sudo passwd user`
- 关闭虚拟机以后可用根据电脑内存大小修改虚拟机whonix workstaten的内存大小和开启3d加速 ，建议开启virtualbox的虚拟机磁盘加密功能 ，加密整个虚拟机系统                        

      

---   
   
## 二. pureos/mabox虚拟机使用教程     
对于windows系统，安装virtualbox开源虚拟机：       
官网下载（网盘里面的版本不一定新）           
https://www.virtualbox.org/wiki/Downloads       
点击下载windows版本完成安装并导入下载好的puer虚拟机.ova        
图文安装及导入虚拟机教程：        
https://www.cnblogs.com/jockming/p/12052045.html            

虚拟机导入完成后右键虚拟机 -设置 -开启虚拟磁盘加密（自己设置复杂密码）                    

系统- 主板-内存大小（根据之间内存大小调整，不要超过红区）-勾选启用efi        
  &ensp;&ensp;  处理器-根据自己电脑处理器核心数调整（不要超过红区，可勾选启用pae/nx）        
显示-显存大小（调到最高），勾选启用3d加速             
保存后即可启动虚拟机                 
虚拟机最大储存大小为40多g,如果后面不够用，可以在 设置-储存-储存介质-控制器stata旁边添加硬盘创建一块虚拟硬盘，然后在pureos虚拟机内安装gnome-disk图形化分区软件（终端指令sudo apt install gnome-disk安装），将新硬盘创建为ext4分区挂载到系统内或者用气扩容系统盘（具体方法自行浏览器搜索教程）      

#### 登陆账户名为               
`android   `      
密码       
`qw13579`       

进入虚拟机后首先要修改密码      

打开终端模拟器      输入    
`sudo passwd root `       
然后输入            
`qw13579 `       
确认密码                    
输入新密码并回车确认完成修改root密码                     

修改完系统密码后修改用户密码          
`sudo passwd android   `              
输入新密码        

记住root密码和用户密码         
用户密码下次登陆系统用      
tor浏览器使用说明看桌面说明文件         

##  debian家族系统虚拟机选装软件：          
pureos/tails/whonix（debian）的包管理器为apt,软件包格式为deb            
安装软件指令为 `sudo apt install xxx `       
卸载软件指令为 `sudo apt install xxx`        
清理系统垃圾指令为 `sudo apt autoremove`            
              `sudo apt autoclean `                

安装gajim（xmpp）聊天软件（新版）（包加依赖大致大小1g,官方apt仓库里面的gajim版本和界面太旧）       
先安装flatpak包管理器      
`sudo apt install flatpak `        
然后从flatpak 安装gajim    
`sudo flatpak install gajim `      
根据提示一直按y和确认完成安装           

安装电报
`sudo apt install telegram-desktop  `       
安装gpg加密软件       
`sudo apt install kgpg`                    
veracrypt虚拟磁盘加密软件官网：https://www.veracrypt.fr/en/Downloads.html                    
安装自由杀毒软件clamav         
`sudo apt install clamav clamtk`       
安装防火墙firewalled      
`sudo apt install firewalled `       
安装垃圾清理软件bleachbit             
`sudo apt install bleachbit `           
安装官方仓库的xmpp聊天软件         
`sudo apt install gajim` 
---
debian家族安装vscode的开源版本code oss：https://cn.linux-console.net/?p=10601/        
   
---   


       

