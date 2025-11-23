 ## 移动设备品牌推荐 和  移动设备开源操作系统刷机指南               
&ensp;&ensp;说明： 此教程为   一手/二手-专用/备用移动设备购买推荐   和 在windows/gunlinux下刷写手机/平板等移动设备使用的基于安卓aosp的国外自由及开源操作系统（另一种说法为“类原生系统”）的文字及视频教程        

`
目录：          
一. 一手/二手-专用/备用手机购买推荐         
二. 机型专用刷机包教程      
三.以一加6手机刷lineage为例操作详解         
四.手机刷入root教程       
五.GSI类原生系统通用机型刷机教程及bug修复       

`   

         
--- 
###  一. ==一手/二手-专用/备用手机购买推荐==：        
   &ensp;&ensp;首先需要明确的是移动设备刷机包一般分为机型专用适配包和gsi通用刷机包， 前者只能用于此机型，做了专门的适配，bug相对较少，缺点是要有自愿者去无偿做适配和维护，后者各个机型可以通用，但是无专门适配，bug多少比较依赖原系统底包，一般情况下不影响日常使用，突出优点是不需要适配。有机型适配包的设备，既可以刷适配包又可以刷gsi。           
 &ensp;&ensp;  购买前应自行查询此品牌的此型号是否能解bl锁（可以在酷安/xda/电报群/搜索引擎等论坛查询）        
  品牌推荐顺序由高倒地低为  -                 
1. 美国谷歌pixel
2. 韩国lg手机，韩国三星(高通处理器机型)，        
3. 台湾htc
4. 日本索尼 （一般日版不能解bl锁而港版/大陆版/欧版可以解bl，日版但是刷入其他地区版本售卖的二手机也不能解bl，如果不是很清楚怕买错可以不考虑此品牌）                                      
4. 中国大陆国产手机-中国一加（高通机型基本都能直接解开bl锁）， 中国小米/红米（出厂为miui系统-非澎湃系统的旧型号,如果要买联发科机型，处理器应低于联发科天机1200-这种才能强解bl，二手购买的最好为已解锁bl的-小米正常情况下解锁需实名和7天等待时间，9008有售后账户授权限制），  中国魅族（需付费第三方解锁，部分型号只能刷gsi）， 中国联想（高通机型，包含摩托罗拉，基本只能刷gsi）， 中国酷比魔方（平板设备，基本只能刷gsi），中国中兴（联发科机型，处理器低于联发科1200，只能刷gsi）...    
oppe/vivo部分机型可以解bl锁但是基本只能刷gsi,他们的子品牌realme和iqqo基本不能解bl                 
                     
---     

&ensp;&ensp;''' 联发科处理器的手机只有部分老处理器能解锁（低于天机1200），尽量别买联发科处理器的手机，且机型适配包基本没有带加密的开源类原生系统，使用gsi通用刷机bug相对较多，联发科处理器手机解锁视频教程看下面教程里 。    
- 非安卓aosp的linux内核的自由开源操作系统可用参考此教程-[postmarketos](https://postmarketos.org/)（安全性隐私性高于安卓，能运行支持手机cpu构架的linux内核运行的软件）,因此系统支持的设备较老不是特别多所以不作单独说明，相关教程请看官网      ，对于普通用户，目前不推荐
- 另一个移动linux开源项目是[Kali NetHunter Pro](https://www.kali.org/docs/nethunter-pro/)    ，这个相比postmarketos软件包多，基于debian ,黑客网络工具也多，pro版支持的机型很少，普通版是通过proot容器和原安卓共生，这个支持机型相对多一点  ，对于普通用户，目前不推荐
- debian,ubuntu,archlinux都有移动版但是适配非常少，未来可能会变多 ，对于普通用户，目前不推荐      
&ensp;&ensp;注意：postmarkos和kali移动版都可以安装pc桌面环境或移动桌面环境，且都可以通过waydroid容器运行lineage 安卓类原生子系统来运行安卓应用，性能损失极小，因此如果能刷linux系统的可优先考虑linux+waydroid的方案，安全性和隐私性相比真机安装安卓系统（安卓权限管理混乱）更安全。                               

---    
             
# 二. 机型专用刷机包教程 

-[windows刷机工具合集-非官方自上传，免代理下载](/doc/android-install/win%E5%88%B7%E6%9C%BA%E5%B7%A5%E5%85%B7%E5%8C%85/)                 

**1. 过程步骤：**     
- 解锁 BL（Bootloader）     
- 刷入第三方 REC（Recovery）    
- 在 REC 中格式化 Data 并进行五清（清除 Dalvik Cache、Cache、System 和 Data）     
- 使用卡刷（Zip 文件）或线刷（Fastboot 文件）方式刷入原生包（系统镜像打包的zip压缩包）      
 
**2. 去哪里找机型专用包？**      
- **方法1：** XDA 论坛，使用火狐浏览器的 TWP 翻译插件可帮助理解内容。     
  - [XDA 论坛](https://xdaforums.com/)    
- **方法2：** 在电报中搜索对应机型的英文名/出口国产手机海外名找对应的电报群组，电报群的资源最新最全，因此最推荐。
- **方法3：** 在酷安 App 中的机型专区进行检索。酷安一般的开源类原生刷机包都是转载的xda或者电报群 
      


&ensp;&ensp;对于谷歌手机，可以刷写[石墨烯系统](https://grapheneos.org/)    
其他手机建议刷写lineage   （分为官方维护更新机型和民间维护机型，前者官网下载，后者在xda,酷安和电报群找）    
[lineage官方维护机型下载官网](https://lineageos.org/)    
crdroid类原生官方适配机型较多    
[crdoid官网](https://crdroid.net/)        
类原生建议都下载不带gapps谷歌框架版，如果后续需要谷歌框架，可以下载litegapps用面具root app刷入   （私有服务）           
       
---

### 安卓 ADB 工具及安装 USB 驱动安装教程     

**对于 Windows：**   
1. 下载并安装 [ADB 工具](https://developer.android.com/studio/releases/platform-tools)。  
方法2，用搞机助手的adb cmd工具箱直接使用adb [搞机助手](https://lsdy.top/)   
2. 解压下载的文件，进入解压目录。   
3. 将设备连接到电脑，确保已开启 USB 调试。  
4. 安装适用于设备的 USB 驱动。  
 比如[搞机助手一键安装usb安卓驱动](https://lsdy.top/)
5. 在命令提示符中输入 `adb devices` 验证设备是否正确连接。   

**对于 linux内核的桌面系统 **           
1. 打开终端模拟器使用以下命令安装 ADB 工具：   


- 对于debian及其分支：        
 ```
sudo apt install  android-tools
 ```
- 对于archlinux及其分支：    
 ```
sudo pacman -S android-tools
 ```
- 对于fedora    
 ```
sudo dnf install  android-tools      
 ```
2. 连接设备并确保 USB 调试已开启。  
3. 使用 `adb devices` 命令确认设备连接正常。 

  
---     

### 卡刷教程
      
**解 BL 锁教程：**       
 - **谷歌设备：**       
  1. 获取设备的解锁码（通常需在开发者选项中启用 OEM 解锁）。        
  2. usb连接电脑，确保adb连通，手机关键后按住快捷键进入bootloader模式,（一般为音量减+开机键）
  3. 使用命令 `fastboot oem unlock` 解锁。       
  4. 按照提示完成解锁过程。       

- **小米设备：**        
（小米出厂为miui的机型解锁简单，需要实名认证等待7天，或者淘宝远程渠道付费几十块解锁，出厂为澎湃的机型基本只能付费400+找渠道解锁）            
  1. 在小米官网申请解锁权限。     
  2. 下载并安装小米解锁工具。       
  3. usb连接设备并在解锁工具中执行解锁操作。       
&ensp;&ensp;小米设备较为特殊，如果是澎湃系统，最好降级到miui后刷机，不然很可能刷机后因为底层不兼容导致不开机。     

- **一加设备：**       
  1. 在开发者选项中启用 OEM 解锁。      
  2.usb连接电脑，确保adb连通，手机关键后按住快捷键进入bootloader模式,（一般为音量减+开机键）
  3. 使用命令 `fastboot oem unlock` 执行解锁。      
  4. 根据提示完成操作。（需在手机上通过上下音量按键移动并确认）
  一加此过程可以使用 大侠阿木的 一加工具箱进行图形化操作           
&ensp;&ensp;注意： 一加手机如果搭载氢os的，因氢os早以停更停留在安卓11，刷入较新的安卓版本的开源类原生安卓因底层不兼容会导致无法进入系统和rec。为了解决这个问题，需先将下载国际版氧os或者coros，底层为安卓12的“非最新”的官方刷机包，将刷机包移动到根目录，氢os系统设置-系统更新升级-从本地升级-选择刷机包进行升级，升级完成重启开机，开机后再次进入系统更新，执行联网检测升级（氧os需要挂代理才能升级），最好把系统更新到安卓13以上，这样的两次以上刷机操作能确保ab分区都能兼容新版本的开源类原生系统  。  
  手机原系统为氧os或者coros的，只需保证安卓版本在安卓12以上即可。             

&ensp;&ensp;*** 部分其他手机机型解锁需要专门购买工程线，特别是一些较新的国产手机 ***        
  
#### 视频教程及其他手机包括华为旧机型参考资料：部分手机 b 站有教程， 关键词 ：机型 刷类原生，比如  


- [玩机必看！从零开始入门刷机！小白也能看懂的BL ROOT GSI详解！]( https://www.bilibili.com/video/BV1j5sceSEWL)    
- [*LineageOS 刷机教程](https://www.bilibili.com/video/BV1XQ4y1p7Ly )     
- [谷歌手机解锁bl教程]( https://www.bilibili.com/video/BV1FV411572t)   
- [三星解锁BL教程三个按键系列正确教程 ](https://www.bilibili.com/video/BV12U4y1m7jA)  
- [三星手机 OEM 解锁及 BL 解锁教程](https://www.bilibili.com/video/BV1mK4y1V7Qp)     
- [一加手机一键解锁Bootloader OnePlus手机解BL锁]( https://www.bilibili.com/video/BV1iF411Q79v)        
- [一加全系类root，解bl，保姆级教学！！及全系列傻瓜式root,Apatch,kernnelsu工具分享！！！！！]( https://www.bilibili.com/video/BV13J4m1T7EN)   
- [LG 解锁Bootloader](  https://www.bilibili.com/video/BV1et411F7Ny)   
- [华为刷机入门-华为刷机系统性知识讲解](https://www.bilibili.com/video/BV1pi4y1W7SF)                
- [华为旧机型解 BL 教程](https://www.bilibili.com/video/BV1gY411S74x )  
- [索尼解锁](https://developer.sony.com/develop/open-devices/get-started/unlock-bootloader)   
- [Realme解锁](https://www.realmebbs.com/post-details/1275426081138028544)    
- [联想解锁BL教程](https://www.bilibili.com/video/BV1KZ4y1y73N/)  
- [小米Fastboot线刷教程](https://www.bilibili.com/video/BV1ED4y1E7JY/)   
- [小米、红米手机解 BL 锁妈妈喂奶级教程](https://www.bilibili.com/video/BV1HA411X7Qd)          
- [红米 k40 刷类原生教程](https://www.bilibili.com/video/BV1Eg411u7gu)             
- [红米 K40 刷入原生 pe 系统教程](https://www.bilibili.com/video/BV1DT4y1U7xC )             
- [小米Fastboot线刷教程](https://www.bilibili.com/video/BV1ED4y1E7JY/)    
- [oppo无需深度测试秒解bl锁 + root教程！！针对高通骁龙处理器](https://www.bilibili.com/video/BV1NtY5eoEUL)     
- [OPPO VIVO 强解BL，ROOT教程！！及免费工具分享！]( https://www.bilibili.com/video/BV1X7421o7iB)    
- [魅族手机bl锁工具和图文教程](https://meizubl.com/)    

- [MTK联发科处理器手机强解bl教程（详细版）]( https://www.bilibili.com/video/BV1pg4y1r7BA)   
- [联发科秒解bl锁教程]( https://www.bilibili.com/video/BV1Xi421Y7Ud)    
    

  
---    
        

**刷入第三方 recovery恢复工具教程：**    
1. 下载适用于设备的第三方 REC 镜像（如 TWRP或者橙狐，在xda,酷安或电报群自己的机型专区搜索下载）。
2. 记住rec镜像文件所在目录，如果rec是压缩包，请解压压缩包-看到img文件。  

3. 重启设备到 Fastboot 模式（通常按住音量下 + 电源键）。    
4. 使用命令 `fastboot flash recovery 文件目录/rec文件名称.img` 刷入 REC。     
5. 重启设备到 REC 模式确认刷入成功。 

&ensp;&ensp;补充：对于开源类原生安卓，一般情况刷机包自带自己的recovery.img的，可以从压缩包提取出来刷入，这种自带rec一般是不能从内部储存空间刷入系统的，只能走adb的sideload（变卡刷为线刷），此需要使用 adb sideload刷机指令。lineage类原生官方刷机教程使用的就是此方法。比如[一加6刷入lineage的官方刷机教程](https://wiki.lineageos.org/devices/enchilada/install/)      

    
---     

**字库基带备份教程：**  
如果不修改分区，只是安装开源类原生安卓，此过程可以忽略，一般正常刷机不会掉基带。   
1. 启动 REC 模式。       
2. 选择“备份”选项。          
3. 确保选择了字库（/persist）和基带（/radio）进行备份。       备份简单的图形化方案是用酷安上面下载多系统工具箱，在此软件内完成备份（非开源）。字库和基带一般类原生刷机不用备份，涉及分区大小调整和修改需要备份，不然刷机后可能因基带缺失故障无法使用sim卡（找不到人重新编写基带和序列号，或者找不到备份，只能返厂换主板）                 
4. 执行备份并保存到设备存储中。
5. 将备份文件usb连接复制到电脑中保存。  
                 
---    

**格式化 Data 和五清教程：**                   
1. 启动到 REC 模式。            
2. 选择“Wipe”选项。      
3. 执行“格式化 Data”操作。      
4. 清除缓存（Dalvik Cache、Cache、System 和 Data）。   开源类原生安卓刷机一般不需要第4步。     
    
---    
       
**REC 下导入刷机包刷入类原生教程：**
这是卡刷步骤，线刷此处不讲，在后文gsi通用刷机里会讲解     
1. 启动 REC 模式并连接电脑，将刷机包导入手机储存空间，如果rec无法解密或者无法识别mtp,可以外接sd卡或者使用搞机助手的非mtp推送文件推送到手机内       
2. 选择“安装”或“Install”选项。   
3. 导航到刷机包所在路径（通常是 ZIP 文件）。   
4. 选择刷机包并滑动确认刷入。 
如果是使用类原生官方rec,,rec下选择update -from adb,然后usb连接电脑,使用指令           
adb sideload  刷机包所在目录/刷机包名（包含刷机包后缀.zip）       
   进行线刷 



##### 补充
- 如果手上没有电脑但是有一台已经root的安卓设备，要给另一部移动设备刷安卓，参考此教程：[如何用一部root后的安卓设备给另一部移动设备刷机](https://m.bilibili.com/opus/473669476102226211)    

  ---                
### 三.以一加6手机刷lineage为例操作详解
*以一加6为例，简述lineage刷机文字教程*
一加6lineage最新版的官方地址为：     
https://download.lineageos.org/devices/enchilada/builds        
官方安装指南:         
https://wiki.lineageos.org/devices/enchilada/       
中文简述：根据官方教程，确保原系统在安卓11以上，如果不是，先将系统更新到最新。      
1.  usb连接电脑，安装好安卓驱动，android adb（windows10以上自带）或搞机助手（自带adb），打开原系统设置-开发者选项-OEM 解锁,完成操作，关机后按住开机键+音量减进入fastboot模式，解bl锁。   
打开电脑adb命令行终端，输入解锁指令解锁adb命令为：fastboot oem unlock         
 注意： 此时，设备可能会在屏幕上显示提示，需要交互才能继续解锁引导加载程序的过程。请执行设备要求您执行的任何作以继续。   
这一步也可以使用 大侠阿木工具箱，一键完成。          

2.  fastboot模式下使用adb指令或者搞机工具箱（fastboot菜单-rec刷入），刷入lineage的recovery（rec镜像在官网你的机型最新包网页里面提供了的），然后重启进入rec进行下一步系统刷入操作。         
    注意：一加6根据上面教程提供的不是recocery恢复模式镜像，而是带刷机恢复功能的boot启动镜像。下载刷入boot镜像重启手机即可进入恢复模式进行下一步刷机操作，boot镜像刷入可以用adb指令：fastboot flash boot boot镜像所在目录/boot.img                   
或搞机器工具箱-fastboot模式-刷入任意分区镜像刷入boot分区                 
3. 保持usb连接电脑，lineage的恢复模式下选择update，然后选择Apply from ADB。电脑搞机助手-rec恢复模式选项-adb side刷机-选择下载好的lineage镜像安装包完成刷入,刷入完成后重启，如果还是进入恢复界面，选择 format清除数据清除完成后即可开机。如果卡开机界面,强制重启进入fastboot，然后使用命令fastboot reboot recvovery ,进入rec，如果fastboot界面可以选择重启到recovery可以不用指令（开机长按主键+音量加进入rec的方式对一加不一定有效）,选择format清除数据清除完成后即可开机。如果使用adb命令，adb命令为：
 adb -d sideload 系统压缩包所在目录/系统包名（包含后缀）                                    
提示： 安装软件包后，recovery 将通知您安装附加组件需要重新启动才能恢复。如果您想这样做，请选择“是”，否则选择“否”。                     

    
   
---    

### 四. **Root 刷入教程：** 
注意：如果设备作为生活工作用途，不建议root,root后银行app是无法人脸识别登录的，即使刷了隐藏root模块，国产游戏、淘宝、闲鱼等软件也可能被封号。               
如果设备作为隐私用途，建议root,root后可以刷入机型伪装模块等隐藏设备真实信息和各模块或者root软件自定义安全功能。   
前者要想尽可能的保障安全，那么就多使用开源软件替代品，利用github和fdroid应用商店下载开源软件替代日常软件，不可替代部分的国产软件，最好通过[shelter](https://f-droid.org/zh_Hans/packages/net.typeblog.shelter/)（也可以在fdroid应用商店软件内下载）开启工作空间，用于安装国产应用，通过[aurora store](https://f-droid.org/zh_Hans/packages/com.aurora.store/)下载国内应用的谷歌play国际版减少跟踪。aurora使用需要代理，fdroid下载使用可以通过国内源免代理（比如清华大学源）     
[开源软件使用指南和推荐参考此处](/doc/fdroid-use/)                  
####  root教程：  
1. [github下载magisk.apk](https://github.com/topjohnwu/Magisk)
或者使用[狐狸面具](https://github.com/HuskyDG/magisk-files)，下载apk后将文件名后缀.apk改为.zip    
（狐狸面具隐藏root的效果更好，最好的是ksu和apatch）    
2. 启动到 REC 模式，连接电脑。     
3. 将面具压缩包 导入手机，选择“安装”或“Install”选项。    
4. 导航到面具（Magisk）安装包所在路径。   
5. 选择安装包并滑动确认刷入。    
6. 重启设备后，将面具zip的.zip后缀改为.apk并安装此软件既可获取root。  
&ensp;&ensp;注意：部分类原生包带有ksu的root,只需要在系统启动后安装ksu root软件包既可使用root ，无需刷入面具，[ksu下载官网](https://github.com/tiann/KernelSU)  
KernelSU 内核 root  （root隐藏较好，防止部分国产私有软件检测到root不让使用）        
https://github.com/tiann/KernelSU       
Apatch内核root（支持机型较kernelsu多，功能相似，root隐藏较好，防止部分国产私有软件检测到root不让使用，带root密码）           
https://github.com/bmax121/APatch     
&ensp;&ensp;ksu需要下载对应机型的boot分区文件刷入，支持机型较少，apatch需要安装apk后，提取系统或对应刷机包的boot.img,使用apatch修补boot文件（设置并记住密钥）的到新的boot镜像文件，再在rec下卡刷boot分区或者bootloader模式下线刷boot分区然后重启再次安装此软件apk包使用解锁密码使用   。
&ensp;&ensp;非官方lineage原网页链接或者其他类原生很可能不会单独提供boot镜像文件，这种情况需要在系统安装包里面提取，这个镜像一般情况下需要解压刷机压缩包里面的 Payload.bin镜像文件，然后用拆包软件比如windows软件fastbootenhance进行拆包，提取里面的对应镜像    

下载地址：   
https://github.com/libxzr/FastbootEnhance                     
在没有第三方rec时,刷入面具也可以使用apatch的boot修补法。               
注意root软件只能同时使用一个        
---    



&ensp;&ensp;这样就完成了机型专用刷机包的详细教程。如果有任何设备特定的问题，请查阅相关论坛或设备支持文档。



---



# 五.GSI类原生系统通用机型刷机教程及bug修复    
-[windows刷机工具合集包含下面教程提到的所有工具-非官方自上传，免代理下载](/doc/android-install/win%E5%88%B7%E6%9C%BA%E5%B7%A5%E5%85%B7%E5%8C%85/)                   
&ensp;&ensp;适用于没有机型专用包以的通用刷机方案，此教程在windows环境下操作，gsi通用刷机不推荐在gnu/linux系统环境下进行，除非linux发行版能找到类似FastbootEnhance 的解包工具软件。                                       

##### gsi包原理：gsi通用镜像替换官方system分区，其他分区不动，实现刷入类原生通用包，因此需要官方包做底包，使用原系统的vendor boot等分区 。此过程为线刷 ，后面教程为ab分区（请自行查看手机是否为ab分区）           
所需工具：          
- A.[搞机助手电脑版](https://lsdy.top/)                   
熟悉adb指令的不需要这个非开源程序            
- B.电脑安卓驱动和9008驱动         
安卓驱动搞机助手里面有 ，9008驱动酷安和搜索引擎很容易检索到            
-  C.[gsi包-各种类原生及原生安卓系统合集](https://github.com/phhusson/treble_experimentations/wiki/Generic-System-Image-%28GSI%29-list)  

gsi刷机包命名规则对应版本：    
简要说明：以某crd版本为例，文件名为：             
crDroid-10.13-arm64_bvN-Unofficial.img.xz，crdoid-10.13代表类原生名称和版本号，arm64代表系统支持的手机框架为arm框架64位,大部分手机平板cpu都是此框架，后面bvN中b代表a/b分区（出厂系统安卓11以上的手机多半是a/b分区，具体是不是可以自己上网查，a/b分区的手机刷入only a的gsi镜像无法开机），v代表无谷歌服务。        
另一个版本  
crDroid-10.13-arm64_bgN-Unofficial.img.xz，bgN中的g代表谷歌框架服务，此版本如果登陆过谷歌账户没有退出安装开机后会强制谷歌登陆验证，N代表没有默认开启root超级用户。unofficecial代表非类原生官方，img是镜像后缀，.xz代表镜像是xz压缩格式，需要解压后使用。
如果手机是a/b分区（安卓11以上的手机多半是a/b分区，具体是不是可以自己上网查），最好选择bv版而不是带谷歌跟踪的bg版。有的系统镜像名带slim，这个和普通版本实际区别不是很大都可以使用。               
完整命名：       
类原生项目名-版本号-{arm|a64|arm64}_{a|b}{v|g}{N|S}-{signed|vndklite|personal}  。 
arm代表cpu框架为ARM 32位 ，
a64: 代表ARM 32-bit with 64-bit binder ，    
arm64:代表 ARM 64位（大部分移动手机cpu是这个框架），      
a: 手机为only a分区 ，      
 b: 手机为only b分区，       
 没有标明a或者b的， 说明是a和ab通用的   。                  
 v: Vanilla,缩写，没有自带谷歌服务，           
 g:GAPPS缩写，带常规谷歌服务  ，     
 o: With Android Go GAPPS，精简版谷歌服务，            
  (f): With MicroG and FLOSS,micro开源谷歌服务，             
  N: No Superuser 没有默认开启超级用户，    
  S: With PHH Superuser，带有phh的超级用户，       





下载好正确的系统包后，如果是压缩包，需要先解压，真正镜像一般为img格式    
步骤：       
0. 确保已解bl，解bl教程在酷安机型专区搜索，搜自己的机型 ，教程也可以看上文。           
1. 底包不同刷机后bug和驱动支持不同，这个需要自己测试最新版原厂系统和出厂原厂系统哪一个做底包bug更少，底包可以卡刷压缩包或者线刷，还可以9008强刷。9008刷机使用工具qefl高通9008刷机工具刷入，此过程自行网上搜索  。                
 
2. adb输入工具和gsi的system分区镜像包       
此过程通用   
- 准备好电脑线刷，安装好安卓驱动    
- 开机加音量减 进入fastboot模式   

-  准备好解压后的gsi镜像 ，usb连接电脑，打开搞机助手，点击adb cmd命令工具箱   
输入指令：
 ``` 
fastboot reboot fastboot 
 ```          
进入fastbootb模式（ab分区，非fastboot）          
如果还是直接进入rec,需要恢复官方系统包的rec后再次执行才能进入fastbootb）                 
  
- 刷入gsi system镜像使用指令 ：      
 ```    
fastboot flash system 镜像目录/文件名
 ```     

3. 刷入第三方rec，进入rec去除avb验证然后开机       
&ensp;&ensp;第三方rec参考：酷安或者xda专区可直接搜索 ，如果没有第三方rec只能用官方，尝试跳过此步骤，如果禁用avb验证后还是卡开机（禁用教程看后文），尝试格式化data分区（如果是ab分区），非ab分区尝试双清或者5清后再次开机，如果没有第三方rec用官方rec,进入recovery模式后点击恢复出厂清除手机数据设置即可 ，这个等于格式化data,第三方rec如果由于版本不兼容无法格式化data尝试刷入官方rec格式化或者支持此安卓版本的第三方rec进行格式化data。            
对于没有twrp这种第三方rec，或者twrp版本不支持去除验证功能，就需要提取 avb的镜像，然后使用去除验证指令手动刷入此镜像。   
    &ensp;&ensp;禁用 AVB 验证： 在 Bootloader 模式下，使用 fastboot 命令来禁用 AVB 验证。
所需FastbootEnhance工具下载地址： https://github.com/libxzr/FastbootEnhance             
- [中文版免代理下载点击此，自上传](/doc/android-install/raw/commit/9bb75669ea13ba4754bd04cf67480fd67feb5323/win%E5%88%B7%E6%9C%BA%E5%B7%A5%E5%85%B7%E5%8C%85/%E4%B8%AD%E6%96%87%E7%89%88FastbootEnhance-1.4.0.zip/)                          
下面的命令行操作过程也可以使用fadtboot工具箱免指令图形化点击操作，右键选择对应分区执行备份还原，选择禁用验证，过程参考下面adb命令行 部分，只是不需要使用命令行。注意：对应a/b分区的需要adb指令在手机fastboot模式下用adb命令进入fastbootd模式电脑完成操作 （fstboot reboot fastboot）                                            
adb指令过程：                        
对于only a分区的手机，需要执行adb命令：          
 ‘fastboot --disable-verity flash vbmeta （vbmata镜像所在文件目录）/vbmeta.img‘,'vbmeta.img'为刷gsi前的原机系统版本号的vbmeta镜像文件。这个镜像一般情况下需要解压原机系统刷机压缩包里面的 .bin镜像文件，然后用拆包软件比如windows的软件fastbootenhance工具箱进行对.bin进行解包，提取里面的对应分区镜像。或者usb连接电脑后在手机fstbootd模式下，直接从原机里面提取镜像，使用FastbootEnhance工具的fastboot可视化功能-分区表。                                                                                      
    对于使用ab动态分区（Dynamic Partition）的设备，还除上述外需要以下命令：                                                        
 fastboot --disable-verity flash vbmeta_system vbmeta_system.img                  
       
 fastboot --disable-verity flash vbmeta_vendor vbmeta_vendor.img              
&ensp;&ensp;同样    vbmeta_system.img和               vbmeta_vendor.img需要替换为系统原包提取的对应分区镜像文件 。 如果没有vbmeta_vendor原包没有分区镜像 则不管。              
                        
4. 开机后部分功能异常，再次重启即可正常    
5. 如果rec不支持解密，因此要刷入面具root需要外接u盘或者使用搞机助手电脑版，usb链接，推送文件功能，推送magisk.zip到手机，然后rec进入sd目录刷入面具        
如果没有第三方rec,解压原底包版本的官方刷机包的boot分区文件（一般官方有包能下载），用面具app通过修补官方包boot分区然后用电脑搞机助手刷入       
6. bug修复 包括指纹等         
酷安搜索   gsi修复             
&ensp;&ensp;顶部状态栏显示被挖孔或者刘海屏遮挡可以用自由开源iconify修改，酷安或者github可以搜索此软件。       
开启高刷，无法通话，修复信号，双扬声器只有一个有声音等，都可以在带phh工具的类原生系统的设置-phh里面修改。    
如果安装的是非gapps的类原生，如果要刷入谷歌框架，自行搜索litegapps,支持rec刷入和面具root刷入  ，一般情况没必要使用谷歌服 务。                        

---    
### C.9008刷机救砖
此过程需要在windows环境下进行，因为高通9008刷机工具无gnulinux版，救砖用于刷机过程中故障开机黑屏    

1. 网上下载对应机型的9008刷机包 
2. 安装高通9008刷机工具QFIL Tool和9008驱动  ，这里注意一加和小米等国产手机的的9008刷机需要使用手机厂的官方工具             
3. usb 连接手机后进入9008模式进行刷写     
详细步骤可以浏览器检索       
参考资料：
- [用QFIL Tool工具9008刷机救砖图文教程](https://www.rom100.com/thread-69613-1-1.html) 
- [ 高通设备通用9008模式救砖视频教程 ](https://www.bilibili.com/video/BV1Gp4y1W7Zx)    
- [一加手机9008](https://www.bilibili.com/video/BV1uP4y157BB)         
- [小米手机9008](https://www.bilibili.com/video/BV1dwheetEZi)           
      

&ensp;&ensp;9008模式可以用搞机助手电脑版的bootloader进入9008 按钮启动       
&ensp;&ensp;部分手机需要拆机短接才能9008   
&ensp;&ensp;注意： 部分手机在9008模式下一段时间未操作会自动退出重启，因为最好是电脑点击刷机后手机再进入9008     
      
---    
### D.备注      
&ensp;&ensp;常用adb指令：             

 - 查看当前ADB的版本：adb version   
- 重启设备：adb reboot    
 - 进入Recovery模式：adb reboot recovery   
- 进入Fastboot模式：adb reboot fastboot    
- 通过ADB刷入Recovery：fastboot flash recovery + [空格] + [Recovery文件路径/文件名]
 - system镜像刷入指令 ：     fastboot flash system 镜像目录/文件名   
 - boot分区刷入 fastboot flash bott 镜像目录/文件名                       
-  查看设备屏幕分辨率：adb shell wm size            
- 查看设备屏幕密度：adb shell wm density         
- 查看设备型号：adb shell getprop ro.product.model        
-  查看设备厂商名称：adb -d shell getprop   ro.product.brand             
- 查看所有已安装应用的包名：adb shell pm list packages        
- 给设备安装Apk：adb install -r + [空格] + [安装包路径.apk]
-   强制停止应用：adb shell am force-stop + [空格] + [应用包名]         
- 查看手机序列号： adb get-serialno       
- 查看设备系统的Android版本：adb shell getprop ro.build.version.release         
-  查看设备系统的Api版本：adb shell getprop    ro.build.version.sdk          
- 查看设备的Mac地址：adb shell cat /sys/class/net/wlan0/address            

