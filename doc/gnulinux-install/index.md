    
###### 此项目为指导基于linux内核的自由及开源操作系统发行版debian/archlinux/redhat红帽系统及其分支（fedora/opensuse）的图形化加密安装，配置和软件使用教程     
目录：    

    简介    
    一.加密安装archlinux  及其分支 （包含图文教程）         
    二.arch及其分支安装后软件配置指南      
    三.arch系统使用注意事项/故障排除            
    四.debian及其分支          
    五. 红帽系统家族 （fedora/opensuse）      
    六.虚拟机/容器/安装到u盘//linux常用指令         
    七.多系统引导/本地系统引导修复，linux启动伪装隐藏   
    八.linux常用软件推荐  
    九.隐私安全建议           
###  简介：     
&ensp;&ensp;注意：为了教程简单易用，这里主要介绍带gnu命令的GNU/linux发行版,原则上非GNU的linux内核系统也可以使用，只不过上手难度更大，比如[alpinelinux](https://www.alpinelinux.org/) （高精简低占用，在虚拟机/vps以及linux发行版的软件开发测试调试用的多）和基于此系统的移动设备操作系统[postmarketos](https://postmarketos.org/)(安全性和自由度高于基于安卓aosp的自由开源系统)                                
&ensp;&ensp;上方文件夹内有安装过程的                
[图文教程（包含archlinux多系统加密安装和安装到移动u盘硬盘还有虚拟机安装等）pdf，点击此按钮跳转](/doc/gnulinux-install/linux%E5%8F%91%E8%A1%8C%E7%89%88%E5%A4%9A%E7%B3%BB%E7%BB%9F%E5%8A%A0%E5%AF%86%E5%AE%89%E8%A3%85%E5%9B%BE%E6%96%87%E6%95%99%E7%A8%8B-%E5%8C%85%E5%90%AB%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%92%8C%E7%A7%BB%E5%8A%A8u%E7%9B%98%EF%BC%88%E7%AC%AC%E4%BA%8C%E7%89%88%EF%BC%89.pdf/)          
&ensp;&ensp;引用教程为archlinux图形化安装分支eos,请结合下文一起观看， 中文输入法和换源等等看后文的 文字教程   二.arch及其分支安装后软件配置指南，安装故障或者安装后使用故障参后文教程 三.archlinux故障排除，多系统引导伪装隐藏看教程七                             
&ensp;&ensp;debian家族的lmde多系统安装方法和archlinux基本一致，仅仅多了一个boot分区而已，fedora安装过程和imde一致; 看不懂下面的官网英文说明，建议使用浏览器的翻译插件进行中文翻译，比如[火狐浏览器的翻译插件twp：](https://addons.mozilla.org/zh-CN/android/addon/traduzir-paginas-web/)            
###### &ensp;&ensp;系统优缺点分析：国外自由开源基于linux内核的发行版操作系统相比其他系统操作系统的最大优点就算自由开源免监控跟踪，其分支使用较多的主要有debian及其分支，arch及其分支，红帽fedora及其分支 等等。其中debian系统稳定性好，大陆用户多，网上使用教程好找，但对非自由硬件兼容性不太好，很多硬件可能无法正常运行，比如蓝牙，wifi，指纹等;arch硬件兼容性极好但稳定性不如debian，拥有aur用户仓库，可以找到绝大部分linux软件，而且arch官方wiki帮助文档非常详细，虽然都是英文，但是用插件翻译后小白也能看懂，每一步都有教程archlinux原版软件源内包含非自由组件，把安装选择权完全交给用户，有基于arch的自由操作系统parabola ;debian12开始引入了私有驱动程序，不过有完全自由分支pureos ;fedora是红帽系统的上游社区系统，承担红帽测试，红帽系统被广泛用于企业商用，硬件兼容性好，内置软件源只包含自由开源软件，这也是一个不错的选择                 
&ensp;&ensp; 原则上在保证硬件能正常满足用户使用要求下尽可能的选自由软件系统       ，尽可能的使用图形化安装，尽可能采取最隐秘安全的安装方式                      
---    
#### 分区简介，安装和加密原理分析    ：  (主要为GPT分区表的硬盘的介绍-EFI启动方式，MBR分区表-非EFI启动太古老和少见，下方不做论述，mbr分区表的硬盘装系统仅需要boot/efi分区和/ 根分区)            
#### &ensp;&ensp;&ensp;&ensp;8Mb大小的保留分区（不分配盘符）    
&ensp;&ensp;windows操作系统需要，linux发行版不需要，如果原电脑有win,不需要额外建立，win安装时都会建立这个保留分区                              
#### &ensp;&ensp;&ensp;&ensp;EFI引导分区（不可加密）        
&ensp;&ensp;挂载标记为 /boot/efi，可与其他系统的引导共用，原电脑有其他系统那么就不需要再建立，一般分区格式为fat32，大小建议300Mb到1G左右，不同系统对其大小要求不同，最稳妥是给1G（1024M）空间，如果是多系统使用安装系统时不要格式化此分区，选择保留分区，直接挂载为boot/efi      ，如果电脑过于老旧不支持efi启动，则不需要此分区                            
&ensp;&ensp;如果是全新安装或者安装到其他硬盘内，eif和保留分区可以用windows上的diskgenius分区工具的esp/mbr选项一键创建 ，该软件在一般的winpe里面都有，连接在后文  
         
#### &ensp;&ensp;&ensp;&ensp;boot分区（arch和debian最新版的 livcd 可加密此分区）                    
&ensp;&ensp;gnulunix启动后释放内核驱动引导等，可以合并到根分区内不单独建立，但是debian系如要加密系统分区则必须单独建立一个不加密的boot分区，大小建议1g左右，arch加密安装不需要单独建立此分区，有efi分区一般不再需要单独建此分区 （除非系统分区加密）                 
     
#### &ensp;&ensp;&ensp;&ensp;根分区（可加密）        
&ensp;&ensp;挂载标记为  /  ，用于放系统文件和用户文件，可以使用任意linux格式，推荐用ext4,这个稳定性最好，home分区 软件分区 备份分区u等，可以合并到根分区内，不建议建立这几个分区，如果空间满了不足会很麻烦，系统根分区大小建议40g以上，                                       
   &ensp;&ensp;图形化操作的加密方为将改分区删除然后新建分区，分区格式选择lusks或者ext4（点击下面或的luks加密选项），不同系统方法不太一样      ，然后挂载为 / 分区           
#### &ensp;&ensp;&ensp;&ensp;交换分区 （可加密）             
&ensp;&ensp;将一部分硬盘空间用于模拟运行内存，弥补运行内存的不足，分区格式为swap，挂载标记为swap    ，加密方法同根分区  ，一般情况4-8G空间足以

---        
#### 安装
[图文教程（包含archlinux多系统加密安装和安装到移动u盘硬盘还有虚拟机安装等）pdf，点击此按钮跳转](/doc/gnulinux-install/linux%E5%8F%91%E8%A1%8C%E7%89%88%E5%A4%9A%E7%B3%BB%E7%BB%9F%E5%8A%A0%E5%AF%86%E5%AE%89%E8%A3%85%E5%9B%BE%E6%96%87%E6%95%99%E7%A8%8B-%E5%8C%85%E5%90%AB%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%92%8C%E7%A7%BB%E5%8A%A8u%E7%9B%98%EF%BC%88%E7%AC%AC%E4%BA%8C%E7%89%88%EF%BC%89.pdf/)          
安装故障或者安装后使用故障参考教程三，安装后软件配置/源配置参考教程二   ，多系统引导和linux发行版启动隐藏请看教程七                 
 
 
&ensp;&ensp; 将ventoy（连接在后文）写入u.盘，然后开机用快捷键进入bios,在bios设置内选择u盘优先驱启动（不用品牌不同型号的快捷键不一，bios界面也不一样，这里自行网上查找你设备对应教程），u盘引导启动进入ventoy的界面，选择启动下载好的本地镜像iso（按f2可进入u盘空间外的本地硬盘）,进入系统安装镜像livecd，然后在livecd将用图形化的系统安装工具安装系统，写入efi ，boot ，根分区 并开启加密完成安装）
所需工具           
&ensp;&ensp;ventoy引导盘，用于免写安镜像到u盘，直接启动本地或者u盘内的系统安装           
https://www.ventoy.net/cn/download.html           

&ensp;&ensp;firepe/微pe windows的系统修复启动u盘  ，用于紧急分区和修复双系统中安装后修复windows的引导，和改变默认引导，恢复误删或者丢失的文件数据等    
firepe                   
https://firpe.cn/page-247  
微pe    
https://www.wepe.com.cn/download.html    
因为要用到ventoy进行u盘多系统引导,所以 下载winpe的exe软件启动后选择生成本地ios镜像文件，上面推荐的winpe下载其中一个即可                   
这里更推荐使用firepe,因为这个windows pe支持联网，如果安装失败需要回到原windows系统，或者下载其他linux发行版，可以在此pe环境联网下载系统安装镜像。   
打开fire pe官网下载地址 ：       
https://firpe.cn/page-247           
主页：   
https://www.firpe.cn/        
                  

### 注意：                   
&ensp;&ensp;不建议做默认的全盘安装，建议手动分区，保留上述分区外，留空间建立其他非挂载的分区（加密或不加密）用于存放个人重要资料，如果把资料都放在系统根分区，系统崩溃或者重装会丢失，     
&ensp;&ensp;加密安装后使用备份还原软件timeshift备份还原后是很可能还原后丢引导，  debian图形化安装操作中建立加密系统分区比mint和arch复杂   ，需要先建立好加密分区，解密挂载后，然后再挂载为  linux的系统分区             
&ensp;&ensp;winpe系统修复镜像，用于 修复启动和修改默认启动项                         
&ensp;&ensp;使用winpe内置的bootice工具图形化编辑默认启动项和添加启动项目，使用winpe里面的win修复工具修复win的启动项目，使用winpe的diskgenius分区助手软件预先划一定空间出来（可以从已有分区的剩余空间中划分出来），用于安装linux避免不熟悉linux分区时的误操作删除重要分区，可以直接在pe里面编辑好boot swap 根分区后进入linux-livecd 安装linux,也可以划一个分区然后在linux安装界面再把这一个分区化成安装需要的几个分区以及加密分区等    ，还可以在原windows下用win自带的磁盘管理分区压缩一个分区出来给linux用         

   
---    
正文：       

###  一.安装archlinux  及其分支（选择其中一种方法，推荐EndeavourOS）                        
  
1. 方法一 纯命令行安装，参考arch官网wiki（较为复杂）            2. 方法二  archlinux install命令行脚本           
3. 方法三   图形化安装arch原版（建议先从4中选择带中文安装的发行版体验一下安装流程）                
a. archlinux-gui ，安装界面可以改为中文，但是此项目已经停止维护（github）,清华开源镜像站里有包，版本较旧，可以用它安装好以后升级到新的，不过因为较旧估计需要添加密钥信任后才能正常更新系统和安装软件          
https://github.com/arch-linux-gui/alg-releases         
b. 使用alci来安装，版本维护新但是无中文安装界面  ，因此需要有Arch图形化安装经验才能很好理解各个英文选项    （比如Manjaro或者EndeavourOS）      
  官网：   https://alci.online/downloads/          
&ensp;&ensp;注意，部分镜像是不带桌面操作环境的,建议下载带xfce4桌面环境的dev版本             
https://sourceforge.net/projects/alci/files/alci-iso-dev/                
 
&ensp;&ensp;进入alci live cd的安装环境后，安装系统前前下载中文字体字体解决乱码中文          
打开终端软件，输入          
sudo pacman -Sy wqy-microhei        
&ensp;&ensp;然后安装时可以选中文 ，安装完成启动系统后再次用上面的字体安装指令解决系统中文乱码                  
 
（arch的包管理器为pacman，软件安装指令为 sudo pacman -S  xxxx）    
   
c. 如何将archlinux切换为完全自由操作系统分支    
https://wiki.parabola.nu/Migration_from_Arch    



4. 方法四-图形化安装arhlinux的分支                 
  
- [rebornlinux](https://www.rebornevo.com/)                 
- [EndeavourOS](https://endeavouros.com/)   推荐             
- [arcolinux](https://arcolinux.com/)            
- [manjaro](https://manjaro.org/)（不推荐，建议仅用于新手尝试，熟悉arch后换其他arch分支或原版arch,因为manjro对比arch原版有很多私货，使用aur用户仓库安装非官方仓库的软件容易故障）                 
- [Parabola GNU/Linux-libre](https://www.parabola.nu/)   -arch的自由分支 ，对硬件要求高，普通电脑安装兼容性可能不太好
               
如果将archlinux及其分支 切换到prarbola  ，参考       
https://wiki.parabola.nu/Category:Migration       
              
---       
  
###  二.arch及其分支安装后软件配置指南  
换源和第三方软件仓库配置指南   （切换中国镜像源后可以加速软件下载和使用更多的软非官方软件仓库的软件）                                     
      
安装nano文本编译器                           
开始菜单找到终端软件，打开终端软件，输入         
sudo pacman -S nano         
（下面指令操作都是在终端软件内完成的   ） 

nano编辑器使用比vim简单，不用快捷键可以直接插入，ctrl+x保存退出    ，一般的网上教程给的都是vim,可以把教程里面的vim 一词换成nano,其他不变 
换源过程过程大致为：
开始菜单内打开终端软件输入修改源指令： sudo nano xxx     （xxx为源的目录 ）   ，
回车确认，输入用户密码然后再次回车确认   
在弹出界面修改后按住 crtl 和x ，然后输入y保存退出，然后输入执行 sudo pacman -Syyu  更更新源和系统               
         
具体操作 教程

a.分别为arch源 清华大学中国镜像（官方软件仓库的中国本地镜像源）             
https://mirrors.tuna.tsinghua.edu.cn/help/archlinux/            

b.archlinux cn源（非官方仓库，包含第三方aur部分aur用户仓库上传的预编译的软件，里面包含各种代理软件 比如clash-verge,v2rayn等，可以不用代理直接下载，推荐启用次）                                    
    
https://mirrors.tuna.tsinghua.edu.cn/help/archlinuxcn/ 
               
archlinux cn源文字补充：     
修改源后，新系统中安装 archlinuxcn-keyring 包前的额外步骤              

&ensp;&ensp;2023 年 12 月后，在新系统下安装 archlinuxcn-keyring 时可能会出现错误：          

&ensp;需要在本地信任 farseerfc 的 GPG key：     终端输入指令并回车键确认                   
   
`sudo pacman-key --lsign-key "farseerfc@archlinux.org"   `                   

&ensp;&ensp;之后通过以下命令安装 archlinuxcn-keyring 包导入 GPG key    
输入                
`sudo pacman -Sy archlinuxcn-keyring   `            

[archlinuxcn]
Server = https://mirrors.xtom.nl/archlinuxcn/$arch
==注意==： 使用中国地区软件镜像源时，服务器会知道哪个ip下载安装了哪些软件，因此建议在有代理/vpn后，不要再使用中国地区源      
-[arlinux 全球https源](https://archlinux.org/mirrorlist/all/https/),选与自己代理/vpn节点地区近或相同的，如果坚持使用国内源，最好挂系统代理或者vpn，   
方法：   终端输入 `sudo nano /etc/pacman.d/mirrorlist`，然后把在所有源的每一排前加`#`将其注释掉，然后选择上面网站对应国家的服务器内容，鼠标右键复制粘贴进顶部，粘贴后去掉添加部分国家j的下一排每一行的`#`取消注释使其生效，然后键盘按 Ctrl+x 保存修改，然后n确认，最后终端输入       
`sudo pamcman -Sy archlinux-keyring`更新密钥，更新完成后输入`sudo pacman -Syyu`更新系统（更新前需要开启准备好的系统代理或者vpn）             
-[archlinux cn 全球源（找非中国的）](https://github.com/archlinuxcn/mirrorlist-repo),选与自己代理/vpn节点地区近或相同的,国内源装好代理后即可切换为过外源，如果坚持使用国内源，最好挂系统代理或者vpn       ，添加教程参考    
https://mirrors.tuna.tsinghua.edu.cn/help/archlinuxcn/          ，将教程中中添加代码部分替换为上面的全球源
         


c.chaotic aur源  （选装，chaotic是另一个第三方aur仓库，可以免代理使用，不少软件和archlinux cn源有重叠，根据个人需求看是否启用），第一次使用可能需要开启代理                              
https://aur.chaotic.cx/docs                         

arhxlinux cn 和chaotici aur 源里包含各种代理软件，比如v2raya/clash-verage-rev/flacalsh/sing-box/tor browser/mull/proton vpn,因此可以免代理下载vpn/代理软件            

---                    
软件配置指南-                   
1.安装中文输入法（fcitx5和ibus二选一，不要同时安装避免运行错误）          
&ensp;&ensp;&ensp;&ensp;一般需要安装软件本体，中文输入法扩展包，配置环境变量，其中kde plasma 桌面可以安装fcitx5中文输入法后，前往系统设置 > 输入设备 > 虚拟键盘，选择 Fcitx 5启用输入法，gnome桌面可以通过附加组建-插件调用 或者安装ibus中文输入法后设置内直接启用       

fcitx5 中文输入法  arch官方教程 （可以点击切换中文语言教程，包含自定义词库教程）
https://wiki.archlinuxcn.org/wiki/Fcitx5         
中文互联网第三方教程                          
https://zhuanlan.zhihu.com/p/577060385                      
https://zhuanlan.zhihu.com/p/468426138 

文字总结：对于kde plasma-wayland协议 桌面  （eos默认此桌面）                  
打开终端 输入              
sudo pacman -S fcitx5         
sudo pacman -S fcitx5-configtool         
sudo pacman -S fcitx5-qt       
sudo pacman -S fcitx5-gtk      
sudo pacman -S fcitx5-chinese-addons      
sudo pacman -S fcitx5-material-color     
sudo pacman -S kcm-fcitx5      
sudo pacman -S fcitx5-lua                  

安装完成后打开kde桌面设置             
前往系统设置 > 输入设备 > 虚拟键盘，选择 Fcitx 5。 注销系统，重新登陆，底部状态栏应该会加载出输入法图标，如果没有加载出，开始菜单内找到fcitx5,点击图标手动启动输入法               
linux发行版一般切换输入法中英文的快捷键为shift,切换输入法的快捷键为 crtl 加 空格   ，也可以点击底部状态栏输入法图标进行切换    

ibus   中文输入法  arch 官方教程  （如果要使用gnome桌面推荐此输入法）                

https://wiki.archlinuxcn.org/wiki/IBus                

ibus第三方教程                  
https://dev.leiyanhui.com/arch/ibus-install/#:~:text=%E5%AE%89%E8%A3%9D%20ibus%20%E5%9F%BA%E7%A1%80%201%20sudo%20pacman%20-S%20ibus,ibus-pinyin%20%E5%90%AF%E5%8A%A8%201%20ibus-daemon%20-d%20-x%20%E9%85%8D%E7%BD%AE%20%E5%8F%B3%E9%94%AEibus%E6%89%98%E7%9B%98%EF%BC%8C%E7%AE%80%E5%8D%95%E9%85%8D%E7%BD%AE%E3%80%82           
https://blog.csdn.net/lxyoucan/article/details/127554289             

gnome桌面安装好ibus后，输入ibus-setup启动输入法，然后在系统设置-输入法内  添加 中文-拼音，然后注销系统重新登陆即可启用             
   
  




---          

                     
2. 常用软件推荐安装：      


安装yay指令的软件管理，可以安装管理各种软件（需添加archlinux cn源）  ，   sudo pacman -S yay    
部分achlinux分支默认安装了yay,安装yay以后
使用 指令   yay 软件名    即可检索下载官方仓库和个人添加的仓库所有软件，包括aur用户软件仓库， 部分分支安装软件时会弹出检视代码，这时输入英文 wq 确认即可完成检视                          
安装pamac图形化软件包管理软件，实现摆脱命令行安装和管理软件    ，                  
 yay pamac       
&ensp;&ensp;&ensp;&ensp;选择archlinux cn提供的pamac-manager  ，arch的图形化应用商店软件下载和包管理器，可以检索所有aur用户仓库和官方仓库，实现免终端指令检索和自动化安装各种软件甚至驱动     ， 安装后在开始菜单找到 添加/删除程序 点击图标启动，启用后在这个软件的设置内找到 启用第三方aur ，然后设置里点击刷新软件库，刷新完成后重启软件即可加载aur用户仓库的软件 ，搜索需要的软件点击安装                     

            
安装火狐浏览器    ，      yay firefox     
安装 v2r代理软件          yay v2rayn                                
功能齐全的图形化压缩软件推荐peazip，     yay peazip          
安装libreoffice办公软件，      yay libreoffice zh             
安装koodo reader 阅读器   ，       yay koode                
安装xmpp加密聊天  ，          sudo pacman -S gajim             sudo pacman -S telegram-desktop             
安装虚拟分区加密工具  ，  yay veracrypt         
安装 局域网文件传输 分享工具  ，      yay localsend           
安装垃圾清理软件   ，     yay stacer         
安装磁力下载器 ，    yay gopeed  或者   yay motrix       
安装播放器    ，yay vlc      
安装系统备份还原工具timeshift ，yay timeshift     
安装在线视频播放器   zypleayer             
安装gnome磁盘管理工具（加密磁盘和管理分区等，linux最好用的图形化磁盘工具）           
yay gnome-disk
找到描述中带gnome的     
其官网：https://apps.gnome.org/zh-CN/DiskUtility/     

Kdenlive    ,KDE 社区开发的非线性视频编辑工具             
Audacity     ,录音和编辑音频文件              
HandBrake   ,视频格式转换            
Converseen   ,图片转换                   
          
........ 
 

系统代理终端指令：           
export ALL_PROXY=socks5://localhost:xxxx      
（xxxx为端口号,一般v2r的默认端口号为10808，clash的默认端口号为8090,tor浏览器端口号为9150,具体多少在代理软件设置内查看）  
终端git代理指令           
git config --global http.proxy 'socks5://localhost:xxxx'       
关闭代理：            
git config --global --unset http.proxy      
unset socks5h_proxy       
unset socks5_proxy       
unset all_proxy          

安装clash verge   clash代理工具的图形化前端           
yay clash-verge           

安装tor浏览器    
https://www.torproject.org/zh-CN/download/          
官网下载离线linux软件压缩包，解压后，在解压目录打开终端 ，用终端运行tor启动器    
赋读写权限
sudo chmod a+x /start-tor-browser.desktop  
然后启动     
/start-tor-browser.desktop              
系统如果要去全局给系统tor代理，终端输入        
export ALL_PROXY=socks5://127.0.0.1:9150          
git代理指令              
git config --global http.proxy 'socks5://127.0.0.1:9150'     
关闭代理         
图形操作可在设置-系统代理内开启手动代理   
在socks5一栏     ip地址填 127.0.0.1  ,端口填9150

关闭系统代理：   
图形化操作开启的可以在系统设置代理内关闭       
文字指令开启的可以在输入下面指令关闭        
git config --global --unset http.proxy        
unset socks5h_proxy        
unset socks5_proxy      
unset all_proxy                      

---           
 ###  三.arch系统使用注意事项/故障排除   

    
0. 安装失败，或者安装完成后无法启动进入桌面怎么办？         
这种情况多为系统和硬件不兼容导致的，
要么重新安装，重新安装不行就要考虑更换系统或者回退到原windows,。 u盘启动，选择archlinux或分支的的live-cd进入桌面环境，打开浏览器，搜索下载windows原版ios镜像或者推荐的其他linux发行版    ，下载完成后把镜像移动到u盘内，重启u盘引导进该安装镜像入执行安装    。 其他linux发行版参考此教程 四和五  ，archlinux其他分支参考此教程一 ，windows安装参考互联网 。     
如果第一次安装进入 live-cd的桌面都失败的话，必须更换其他系统。                        
如果是进行的多系统安装，linux安装故障，可以进入bios,在启动顺序将原windows启动移动到linux系统之上 f10保存重启进入windows,      如果误操作格式化了efi引导分区，u盘启动winpe，使用里面的引导修复工具执行windows引导修复  。                                    
1. arch为滚动更新以保持系统和软件最新，修复最新漏洞，简单来说就是没有win10和win11的版本之分，不像win10更新到win11需要完整安装， 不像debian10更新到debian11得先更换debian11的软件源。arch系统建议一两个月内至少执行一次更新指令，长期不更新，执行更新时系统可能会故障，终端输入  yay -Syyu   以全面更新系统。     
特别注意：更新过程中，软件下载完毕执行安装时，笔记本电脑确保电池电量够用，不要退出或者关机，避免内核更新或者内核模块更新意外终止导致内核故障，重启开机后系统无法进入图形界面。   
2.可以使用timeshift软件对系统进行快照备份，记住备份目录，故障后u盘启动archlinux图形化安装分支安装镜像 进入live cd桌面环境，安装timeshift  （sudo pacman -Sy timeshift）后启动此软件执行还原，避免数据丢失或者系统故障。                     
3. 万一系统故障又没有快照备份，这时可能要重装系统，在u盘启动archlinux图形化安装分支的live cd图形化预安装环境导出原系统中的重要用户文件，推荐终端输入 sudo pacman -Sy nautilus安装gnome桌面的文管理器（此软件可以打开带有不可访问权限的文件夹可以输入密码进入），然后终端输入 nautilus打开此软件,进入系统分区-home-用户文件夹，复制之前的重要文件到u盘或者其他分区。如果系统分区是有加密的，终端输入 sudo pacman -Sy gnome-disk 安装gnome桌面的分区管理器并打开，加载加密分区执行解密后点击此软件解密后分区图标内的播放按钮完成挂载，然后使用nautilus访问文件    
4. 如果驱动不兼容比如显卡不兼容，显示管理器异常等导致开机加载内核后黑屏无法进入桌面，按按住快捷键 ctrl+alt+F2进入终端，执行卸载更换不兼容驱动或不兼容的显示管理器，安装兼容的驱动   或者新建用户   。具体操作可以浏览器搜索教程          
举例1：   
比如显示管理器gdm不兼容，更换为sddm显示管理器     
sudo systemctl disable gdm   （禁止gdm开机启动）      
sudo pacman -Sy sddm   （安装sddm显示管理器器）       
sudo systemctl enable sddm     （设置sddm开机启动）  
完成后输入
reboot   
重启电脑     
举例2.用户 配置文件问题导致桌面无法启动
考虑更换/安装桌面或者添加新用户使用新用户登陆系统
a.安装cinnamon桌面   
sudo pacman -Sy cinnamon    
安装完成后重启，登陆界面显示管理器界面设置勾选cinnamon输入用户密码启动   
b.添加新用户参考后文教程五内的gnulinux常用shell命令               
   
举例3.手动安装了闭源英伟达显卡不兼容导致无法开机   
一般情况下默认安装提供的驱动是可用的，但是手动更换了显卡驱动后重启就可能出现故障导致无法进入桌面，这时需要使用上面提到的快捷键进入这卸载闭源显卡，更换为开源显卡驱动，教程参考9命令行界面，卸载手动安装的显驱动卡，更换为推荐的显卡驱动，教程参考[官方wiki教程 ](https://wiki.archlinuxcn.org/wiki/NVIDIA?rdfrom=https%3A%2F%2Fwiki.archlinux.org%2Findex.php%3Ftitle%3DNVIDIA_%28%25E7%25AE%2580%25E4%25BD%2593%25E4%25B8%25AD%25E6%2596%2587%29%26redirect%3Dno)    ,注意看教程里面表格提供的什么类型的显卡用什么类型的不同驱动，类型内核使用的驱动可能不太一样，
一般有普通内核，带tls标志长期内核，带zen标志的游戏内核内核  。查看内核指令：   
uname -srm         






  

其他异常解决：    
0. 软件源故障或者密钥故障导致无法安装软件更和更新系统
解决方法：更换软件源，比如清华大学源更换为ustc或者阿里云源    

更换软件源后输入 yay -Syyu刷新系统      

密钥过期常见于很久一段时间不更新系统，这时就更新密钥，终端输入指令      
 sudo pacman -Sy archlinux-keyring   
以更新密钥           

手动添加的第三方仓库源故障，比如添加的chaotic aur源故障，禁用手动添加的源，终端输入   sudo nano /etc/pacman.conf  ，找到chaotic aur,  删除之前添加的 [chaotic aur]和下面的源 两行 
[chaotic-aur]   
Include = /etc/pacman.d/chaotic-mirrorlist     
保存退出            
然后 yay -Syyu 更新系统     

添加的archlinux cn源故障可以更换到其他开源镜像站比如ustc源，参考下面教程      

https://mirrors.ustc.edu.cn/help/archlinuxcn.html  
说明：需要先删除之前添加的清华源     
终端输入  
sudo nano /etc/pacman.conf 
找到         
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
删除这两行     
然后根据上面教程添加ustc源         



    



1. 安装蓝牙（如果预装的系统无法启用蓝牙，或者无法使用蓝牙音频，参考此）                
https://wiki.archlinux.org/title/Bluetooth       
https://blog.csdn.net/weixin_44268185/article/details/120253969             
安装必要软件包                
sudo pacman -S bluez bluez-utils pulseaudio-bluetooth pavucontrol pulseaudio-alsa             
安装蓝牙图形管理                        
yay bluetoothctl              
yay overskride             
安装蓝牙音频                  
yay pulseaudio-bluetooth           
启动蓝牙服务              
systemctl enable bluetooth         
systemctl start bluetooth   

2. 启动pulseaudio服务（如果音频异常参考此）               

pulseaudio -k             
确保没有pulseaudio启动                 
pulseaudio --start           
启动pulseaudio服务         


3. 安装显卡驱动  （如果预装系统无显卡驱动参考此）    
安装完善xorg显示协议（xfce桌面环境必装）    
sudo pacman --needed xorg     
[安闭英伟达源装显卡驱动第三方教程1](https://arch.icekylin.online/guide/rookie/graphic-driver)  ,
 [inter显卡驱动官方教程2](https://wiki.archlinux.org/title/Intel_graphics) --还可以参考arch wiki   

[安装英伟达驱动教程官网教程（包含开源和闭源）](https://wiki.archlinuxcn.org/wiki/NVIDIA?rdfrom=https%3A%2F%2Fwiki.archlinux.org%2Findex.php%3Ftitle%3DNVIDIA_%28%25E7%25AE%2580%25E4%25BD%2593%25E4%25B8%25AD%25E6%2596%2587%29%26redirect%3Dno)              

4. 无线网卡驱动异常 （wifi无法启用参考此处）        
插入网线，根据品牌型号网上搜索找到无线网卡型号，如找不到就进入多系统的windows系统，安装鲁大师，查看电脑硬件 找到无线网卡型号    
进入archlinux终端，输入       
yay 无线网卡型号（或者品牌英文）  进行检索，安装对应的驱动重启即可        
如果yay 指令找不到驱动，浏览器bing/google/duckduckgo搜索引擎搜索    
 品牌型号 linux驱动 github        
 在github找到驱动,根据提供的说明进行安装     
---    


### 四.debian及其分支推荐      

安装过程参考上面的arch图文安装教程    

- [ lmde- mint中完全基于debian的分支LMDE](https://www.linuxmint.com/download_lmde.php)（与ubuntu无关的版本） ，cinnamon桌面环境，安装使用极其简单，桌面操作逻辑非常接近windows，非常新手使用 ，无需指令换源，有图像化的换源工具 和比较好图形化包管理工具,基本可以摆脱命令行的linux终端指令                       
         
&ensp;&ensp;&ensp;&ensp;视频安装教程在b站上面很多
debian 的包管理器为apt,  软件包格式为.deb      ，
终端指令安装软件为 sudo apt install xxx.deb  ，   
卸载指令为 sudo atp purge xxx.deb                     

 - [pureos-debian的自由操作分支](https://www.pureos.net/)    ，自带gnome图形化安装节目的桌面，因此安装较简单               
     

- [debian 系统正式版和sid滚动更新版 ](https://www.debian.org/index.zh-cn.html)    


            
注意：
安装nano 编辑器替换vim 编辑器，打开终端软件输入       
‘sudo  apt install nano’                 
nano编辑器使用比vim简单而且界面下有快捷键的中文提示，不用快捷键可以直接插入，修改后按ctrl+x，然后根据提示按y保存退出    ，一般的网上教程给的都是vim,可以把教程里面的vim 一词换成nano,其他不变    
 debian 安装好需要修改sudoer ，把普通用户添加到到其中，不然不能用sudo，参考   https://linux.cn/article-15958-1.html      
还需进入软件源内移除cd源（安装debian时用的）  ，不然无法正常下载更新软件，进入方式参考      https://mirrors.tuna.tsinghua.edu.cn/help/debian/     

具体操作总结为 打开终端软件，输入‘sudo nano /etc/apt/sources.list’               
进入源文件后移除cd dvd那一行的源     

- [Kodachi Linux-为保护隐私而生，反取证发行版，基于debian](https://www.digi77.com/linux-kodachi/)                     

debian系一般不需要自己安装中文输入法，仅需要安装部分驱动保证硬件完全正常，比如双显卡的显卡驱动等，pureos无中国因此下载软件可能需要代理，debian12在安装时选择中国镜像源安装好后不需要换源   ，lmde可以用桌面图形软件自己点击换源                    
   

---   

###  五. 红帽系统 家族    
安装过程参考上面的arch图文安装教程       
- [fedora系统](https://fedoraproject.org/)          

[清华大学开源镜像站免代理下载](https://mirrors.tuna.tsinghua.edu.cn/fedora/releases/40/Spins/x86_64/iso/)      
         
fedora 的包管理器为ndf,包格式一般为rpm,安装软件指令为    
 ‘sudo dnf install xxxx.rpm ’         
- [rockylinux](https://rockylinux.org/zh-CN/download)（centos继任者）  ，基于fedora,是红帽的中游系统 ，稳定性好于fedora,企业级系统      

- [Qubes OS](https://www.qubes-os.org/)-用虚拟机隔离的隐私安全发行版基于fedora           

- opensuse大蜥蜴     ，红帽家族为数不多的拥有滚动更新的发行版 风滚草             

 





---    

### 六.虚拟机/容器/常用指令/安装到u盘          
- 如何将系统安装到u盘和移动硬盘？      
安装系统时，用分区软件比如gnome-disk删除u盘分区  ，在u盘新建boot/efi分区挂载为/boot/efi用于u盘引导和 /分区用于系统和用户挂载，进行安装即可，步骤h安装到本地磁盘基本一致    ，如果不在u盘建立并挂载单独efi引导分区，u盘系统只能在此设备上使用    

- 安装waydroid容器 （运行lineageos类原生安卓系统）    
https://ivonblog.com/posts/archlinux-waydroid/    
- qemu安装安卓虚拟机（b站有视频教程）      
- 安装qemu/kvm虚拟机 （高性能虚拟机  ）     
https://wiki.manjaro.org/index.php/Virt-manager    
- 安装vitualbox虚拟机  （电脑系统通用虚拟机））           
 https://wiki.manjaro.org/index.php/VirtualBox      
- 自由及开源操作系统虚拟机使用教程    
/doc/gnulinux-virtualbox    
- linux常用指令教程           
/doc/gnulinux-shell      

---     

### 七.多系统引导/本地系统引导修复，linux启动伪装隐藏            
多系统引导工具可以让用户在开机时通过快捷键选择进入不同系统（避开系统选择界面提示），设置一个为默认系统，隐藏linux发行部bios启动项，修改efi启动分区文件，达到隐藏伪装和快速切换linux系统的目的。这样别人在拿到用户的设备时启动只会看到windows系统。     
[参考此教程：](/doc/gnulinux-install/%E5%A4%9A%E7%B3%BB%E7%BB%9F%E5%BC%95%E5%AF%BC.md/)     


---
### 八.Linux常用软件推荐         
- [此小节参考这个项目](/doc/linux-app/)  

### 九.一些隐私安全提升建议   
-[自由及开源linux桌面发行版操作系统的一些隐私安全提升设置建议](/doc/linux-privacy-security//)          


    
