### 自由及开源linux桌面发行版操作系统的一些隐私安全提升设置建议    

#### 1. 对系统分区和个人重要磁盘分区进行lucks加密，前者需要在linux发行 版安装时设置，后者可以通过分区软件比如[gnome disk](https://apps.gnome.org/DiskUtility/)[arch终端输入 yay gnome disk 进行安装]开启luks加密。同时建议安装使用windows+linux多系统，将windows设置为默认系统，修改bios启动名称等隐藏linux系统       ，详见教程[电脑自由及开源系统GNU/Linux发行版-极简图形化加密安装及使用教程](/doc/gnulinux-install/)       

---        
#### 2. 使用veracrypt虚拟磁盘加密软件对重要文件进行加密或者设置隐藏卷（只有外层密码没有隐藏卷密码解密只能看到外层的假分区），或者使用kgpg等其他加密软件二次加密。      
[官方下载地址](http://veracrypt.fr/en/downloads.html)                  
[中文使用教程点击此](https://itlanyan.com/veracrypt-tutorial/)       
[博客园教程二点击此](https://www.cnblogs.com/xiaohi/p/15322161.html)       

---    


#### 3. 使用开源的vpn或代理软件隐藏ip，参考[ 此教程 ](https://gitea.com/gjcxn358/go-to-word)       
---               
#### 4. 使用tor浏览器和firefox系的浏览器，在浏览器设置里开启主密码 ，防止本地储存的网络密码/书签被其他人查看     。.浏览器其他安全使用建议参考另一个教程 [自由及开源匿名浏览器firefox/fennec/tor/brave/kiwi下载及使用指南]( /doc/firefox-use)  ，包括伪装浏览器设备信息、防止互联网跟踪 、防止ip（webrtc）/dns（dns加密）泄漏等                  
---   
#### 5. 使用虚拟机隔离操作环境和隐藏真实设备信息，参考

[电脑上自由及开源虚拟机极简安装教程](https://sourceforge.net/projects/pureos-virtualbox/files/gnulinux-virtualbox/)           

---     
#### 6. 开启随机mac地址防止来自局域网等的定位

设置wifi随机mac地址    
对于kde和gnome桌面都可以在wifi连接后在网络连接此wifi的地方设置随机mac地址    
无视桌面环境手动命令行强制设置         
    电脑系统archlinux MAC 地址欺骗官方wiki教程
    ----每次启动时随机化 MAC 地址,简单来说就是打开终端,输入          
 ```  
sudo nano /etc/systemd/network/01-mac.link  
```                 
,然后输入下面的内容后，使用键盘快捷键 Ctrl+x 后按y 保存并退出     
```    
[Match]     
PermanentMACAddressPolicy=random    
[Link]    
MACAddress=spoofed MAC        
```      






---    
#### 7. 禁止系统日志记录防止别人通过查看你的电脑内的日志文件窃取用户操作历史记录*      
编辑 journald.conf 文件，打开终端输入：       
```   
sudo nano /etc/systemd/journald.conf      
 ```    
    
修改配置：   
找到或添加以下行         
[Journal]    
#Storage=auto  
在这行下面添加   
```   
Storage=none     
```    
#你也可以同时在末尾换行后添加设置：          

```       
ForwardToSyslog=no   
ForwardToKMsg=no   
ForwardToConsole=no   
ForwardToWall=no    
MaxLevelStore=crit     
```       
#如果Storage不是none，可以限制只存储严重错误       


保存文件并关闭编辑器 (在 nano 中是 Ctrl+X，然后 Y，然后 Enter)。       

重启 systemd-journald 服务：     
```   
sudo systemctl restart systemd-journald     
```          

    

（可选）清理现有磁盘日志：       
如果之前是持久化存储，并且你设置了 Storage=volatile 或 none，可以删除旧的磁盘日志：         
```
sudo rm -rf /var/log/journal/*         
```    

    

---    
#### 8. 禁用 Shell 命令历史记录 (Bash)防止你在服务器上执行的命令被记录下来     
- Linux中禁用命令历史记录   
-关闭history记录功能       
`set +o history`      
- 打开history记录功能     
`set -o history`    
- 清空记录         
`history -c` 记录被清空，重新登录后恢复。      
`rm -f $HOME/.bash_history` 删除记录文件，清空历史。      
- 临时不记录    
在执行的命令前添加空格。例如： history       
- 修改系统文件永久禁用 (针对当前用户):    
你需要编辑你的 Bash 配置文件 ~/.bashrc。打开 ~/.bashrc 文件进行编辑：           
```    
sudo nano ~/.bashrc     
```   
在文件末尾添加以下行：    

 ```          
# Disable history    
unset HISTFILE     
HISTSIZE=0      
HISTFILESIZE=0     
# 或者使用  set 命令 (通常 unset HISTFILE 和设置大小为0更彻底)         
set +o history     
```    
    
保存文件并关闭编辑器 (在 nano 中是 Ctrl+X，然后 Y，然后 Enter)。      

解释：    
    unset HISTFILE: 告诉 Bash 不要将历史记录保存到任何文件。    
    HISTSIZE=0: 设置在内存中保留的历史命令数量为0。
    HISTFILESIZE=0: 设置在历史文件中保留的历史命令数量为0。    
    set +o history: 这是 Bash 内建命令，用于禁用历史扩展和记录。      


要使更改立即生效，请重新加载配置文件或打开一个新的终端输入：      
       
```   
source ~/.bashrc   
 ```      

 (可选) 删除现有的历史文件：          
```    
rm -f ~/.bash_history        
```    

 
完成后检查是否还有历史记录，输入         
```   
history              
```   

 ---    
#### 9. 其他     
不记录文件历史和自动回收站文件自动删除，这个一般可以在桌面设置里关闭      
以gnome桌面为例    
设置-隐私与安全-文件历史-关闭    
回收站和临时文件 -打开自动清理回收站和自动删除临时文件，自动删除周期调到最低   
gnome其他安全设置    
设置-搜索-搜索结果-关闭所有   
摄像头-关闭   
位置 -自动定位关闭    
如无需要请关闭蓝牙    
共享-关闭所有             
设备名称-改成无关联和名称比如windows         
用户-修改名称（这个会显示在一些软件中比如 telegram firefox登陆设备等,不要和用户名一样，改成完全不相关的）    
系统-远程桌面-关闭  ，远程登陆-关闭     

健康-屏幕使用历史关闭          


--   如果是kde plasma 桌面                     

设置-搜索-关闭文件搜索           
plasma搜索-关闭所有     
最近文件-不要记住    
用户反馈-禁用     
用户-修改名称（这个会显示在一些软件中比如 telegram firefox登陆设备等,不要和用户名一样，改成完全不相关的）    
自动启动-关闭不需要的程序 
远程桌面-关闭           
**会话-桌面会话-会话恢复-启动为空会话（默认设置在关闭电脑后启动会显示会自动打开之前的应用）  
如无需要请关闭蓝牙           


---     

- 使用[BleachBit](https://www.bleachbit.org/)定时清理垃圾缓存，和剩余空间擦除（防止删除文件恢复），用其文件粉碎功能替代文件删除（防止删除文件恢复）    

- [文件跟踪元数据擦除(Metadata Cleaner)](https://flathub.org/apps/fr.romainvigier.MetadataCleaner)        
    
---   

### 十. 高级
1. 使用开源杀毒软件clamtk 查杀病毒和后门程序/文件                  
2. 使用防火墙软件防止远程入侵，比如firewalld       
3. 使用虚拟机/沙盒/容器做环境隔离和设备伪装 ，虚拟机如 kvm/virtaulbox/gnome boxes,沙盒如[firejail](https://wiki.archlinuxcn.org/wiki/Firejail)（点击高亮即可查看教程）,和[flatpak包管理器和应用商店](https://wiki.archlinuxcn.org/wiki/Flatpak),容器如安卓容器——[waydroid运行lineage安卓类原生系统](https://ivonblog.com/posts/archlinux-waydroid/)                                
4. [使用安全代理隐藏ip地址](https://gitea.com/gjcxn358/go-to-word)                    
上述使用详见其他教程                
....               

---   
### 更多教程请访问  
- [archlinux 隐私安全 wiki](https://wiki.archlinuxcn.org/wiki/%E5%AE%89%E5%85%A8)         

-[主页导航](https://minzuhun.codeberg.page/)         
- [网络安全-自由及开源软件使用指导](https://minzuhun.codeberg.page/minzufuxing/internet-security.html)        

- [互联网安全标准纲要](https://minzuhun.codeberg.page/minzufuxing/standard.html)    







.....







    


