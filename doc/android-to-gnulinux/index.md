```  
==目录==    
一. 一键恢复安装安装内proot容器运行的gnulinux自由开源子系统        
二. 附加软件推荐  metadata-cleaner清除文件元数据,clamav杀毒软件等       
三.手动自己构建安装教程         

```
# 一
### [点击此处下载里面所有文件](https://sourceforge.net/projects/pureos-virtualbox/files/android-gunlinux/)  
说明：其中see-me.mp4为安装教程，amaze为自由开源文件管理器，zt.zip是zerotermux-安卓开源终端模拟器(压缩包解压密码为qp13579)，turmux x11为远程桌面软件，连接显示容器内桌面用，debian恢复包为子系统主体 ，see-me.mp4为视频教程             
*基于安卓proot容器，自建，不影响正常安卓系统运行使用，无需root即可以单独窗口运行自由及开源gnulnux桌面子系统（独立隔离环境），一定程度减少国产安卓系统的监控后门，相比voms,光速虚拟机等安卓虚拟机，后者付费/实名登陆/商业不开源，后者虚拟机有泄漏隐私风险，因此gnulinux容器是更安全可靠的方案           
子系统内置tor浏览器，自由办公软件，自由视频播放器等常用自由及开源软件              
# 注意 ：
因手机cpu一般都为arm架构，所以子系统内自行安装的软件应该为arm64版，而不是电脑常见的 amd64,-86_64                     
 系统默认用户名为`droidmaster`            
  默认密码为`2580369`               

## 恢复安装方法：    视频教程请下载观看看see-me.mp4                       

1. 安装好zeroturmux，turmux x11,amaze,使用amaze将系统恢复包放到手机储存目录目录下的`xinhao/data/`内，打开zeroturmux进行恢复，恢复完成后切换到此容器在zerootuemux终端内输入                
 `/startxfce4_debian.sh`                
    启动termux x11 和系统  等待x11窗口登入       
  
2. 如果要修改密码     
 桌面打开xfce4终端，输入                
  `sudo passwd root`  ，即可修改子系统的root密码               
 输入 `sudo passwd droidmaster` ，即可修改用户密码              

 3. ### 注意： turmux x11启动后在手机状态栏可以点击设置触控方式，横树屏切换，键盘模式等                         
 4. 安卓12及以上会杀容器后台 ，需要用无线调试激活：                           
 - 重启zerotrmux，打开系统设置开发者无线调试，记住ip地址后面的端口， 使用手机分屏模式，zerotemux在上分屏，设置在下分， zerotumux内依次输入，一行一回车确认：          

`cd termux-android12-phantom-fix`                   
`bash runme.sh`       
##### 如果是自建的，需要没有内置修复工具，需要手动从github拉取修复工具，需要网络工具上外网，输入       
`apt update`    
`apt upgrade -y`   
`apt install git -y`    
`git clone https://github.com/SaicharanKandukuri/termux-android12-phantom-fix.git`     
`cd termux-android12-phantom-fix`       
`bash runme.sh`                           

- 然后点击下分屏幕设置无线调试-使用配对码配对        
- 在zerotermux内输入弹出窗口的 端口号 确认       

- 然后输入配对码 确认    

- 再然后输入之前记住的端口号 完成配对  ，最后重启子系统即可   ，激活过程可以参考文末的   “坏了，这回手机真变电脑了！给手机安装Linux系统，变身生产力神器 “     
https://www.bilibili.com/video/BV16u4y1M7yG/        视频中5分40s后的激活教程，只不过激活脚本已经在恢复包内置了，不需要再克隆github激活项目到本地   

---
# 二. 附加软件安装
-debian安装软件指令为    
`sudo apt install xxx`         
xxx代表软件包名      
要模糊查找软件，输入
`sudo apt search xxx`     
安装下载到本地deb软件包比如qq-amr64.deb     (注意下载linux的arm64版deb软件包，不要下载到x86-64的)         
` sudo apt install 文件路径/qq-amr64.deb`
系统内置了flatpak,因此可以使用`flatpak install xxx `      
安装faltpak商店的软件 ,但是fltpak是沙盒化运行肯可能软件启动不了       
卸载软件指令为    
`sudo apt purge xxx`
更新系统输入  
`sudo apt update`      
`sudo apt upgrade`                       
如果软件无法启动，应用查找找到此应用编辑启动方式，指令已一栏把末尾的 %u 改为 -no--sandbox   ,保存后再启动，如果还是启动不了，说明软件本身不兼容   

推荐软件    
metadata-cleaner清除文件元数据  
`sudo apt install metadata-cleaner`
如果软件图形化运行不了可以用命令行
`mat2 文件路径`       
 
clamav杀毒软件   
`sudo apt install clamtk`     
                                                


 



   

-----   
# 三.如果要自己手动安装                  
        
## 安卓运行gnulinux容器(proot/chroot)        
介绍：      
https://ivonblog.com/posts/how-to-use-termux/       

中文教程安装debian-Termux如何安裝Debian系統 (圖形界面＋中文化＋音訊＋一鍵啟動指令稿)         
https://ivonblog.com/posts/termux-proot-distro-debian/           
Termux X11：手機的X伺服器使用教學            
https://ivonblog.com/posts/termux-x11/        


 
国外其他教程：                   
https://github.com/LinuxDroidMaster/Termux-Desktops/blob/main/Documentation/proot/debian_proot.md#first-steps      
上面是非root模式的proot安装debian 教程，在安装好debian12后，在安装桌面前可以编辑debian镜像源，替换为debian sid滚动更新版中国镜像，然后更新系统升级到debiansid    
滚动更新版可以下载最新版软件包括新版gajim        
下面是chroot安装debian教程      
https://github.com/LinuxDroidMaster/Termux-Desktops/blob/main/Documentation/chroot/debianchroot.md       
同样可以替换镜像源升级到sid版    
汉化和安装输入法参考互联网debian相关教程          

## 使用tome脚本简易安装    （不推荐 tome脚本有私有软件捆绑）            
坏了，这回手机真变电脑了！给手机安装Linux系统，变身生产力神器      
https://www.bilibili.com/video/BV16u4y1M7yG/           
