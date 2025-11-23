##  使用隐私保护的自由及开源浏览器实现匿名和隐私保护 教程             

## 下载火狐及其分支   
==注意 ==   
&ensp;&ensp;官方版火狐默认开启了遥测和研究功能，会向服务器发送一些遥测数据用于改进火狐浏览器，这个过程可能会造成一些隐私泄漏，因此使用火狐官方版本应在设置里面关闭遥测/发送数据/研究        
- 火狐浏览器国际版及其分支  
#### 对于安卓：                 
1. [firefox火狐浏览器安卓国际版](https://ftp.mozilla.org/pub/fenix/releases/)
  -下载版本号数字最大的版本   
2. [使用ffupdate更新和安装各种隐私保护性浏览器包括火狐及其分支](https://github.com/Tobi823/ffupdater)           
3. [iceraven安卓版](https://github.com/fork-maintainers/iceraven-browser) --火狐浏览器分支（github上下载）   ,    
3.1.火狐分支水狐waterfox  ，[使用aurora商店（可以下载谷歌商店应用）](https://f-droid.org/en/packages/com.aurora.store/)   
4. [tor browser 电脑/手机版](https://www.torproject.org/download/#android)  -    官方或者谷歌商店或者droid ify内下载（droidify在fdroid内下载）   
4. ceno browser 火狐分支，fdroid内可以下载，p2p去中心化代理技术，实现隐私保护  ，缺点是额外代理效果很差，自带p2p对于绕过防火墙速度较慢，不如tor浏览器                                   
5. [fennec  ](https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/),相比火狐原版，移除了跟踪遥测和私有代码                          
---                     
#### 对于电脑         
 - [firefox火狐浏览器windows/linux/苹果官方国际版](https://www.mozilla.org/en-US/firefox/all/)       
- [火狐浏览器自由分支GNU Icecat桌面版](https://www.gnu.org/software/gnuzilla/)    
- [火狐浏览器隐私加强分支自由之狼浏览器桌面浏览器下载](https://librewolf.net/)              
- 电脑火狐分支zenbrowser ，带垂直标签和有便携免安装版   
https://github.com/zen-browser/desktop          
- [火狐分支水狐-支持电脑版和手机版](https://www.waterfox.net/)    
- [tor broser](https://www.torproject.org/download/)   
集成最好的匿名安全和tor网络           
- [mullvad browser](https://mullvad.net/en/browser)   
tor和其他公司的合作项目，为不带tor网络的tor浏览器，安全性同tor 只是不自带隐藏ip的tor网络功能     
- floorp 日本的火狐分支，隐私政策有问题回向日本政府泄漏数据 隐藏不推荐    
     

            
----  
#### 其他chromium内核的隐私浏览器：
- chromium谷歌浏览器开源版
-  brave浏览器，基于谷歌浏览器内核：隐私保护可以，自带tor功能，但是需要关闭遥测，可以开启防止指纹识别功能        
- duckduckgo浏览器，monocle/privacy浏览器（基于谷歌安卓的web浏览器技术）           

&ensp;&ensp;谷歌内核只是开源不满足自由要求，安全性漏洞也多，而且自家推广的是非开源版比如chrome浏览器，开源版（chromium）只作为社区研究推广使用，找社区开源版下载链接对普通用户来说也困难，其奇怪的开源协议导致了大部分私有浏览器公司甚至包括一些开源浏览器公司都捡现成，借助谷歌开源内核壳换皮搞自家的浏览器（无强制分发后开源要求），导致谷歌浏览器的全球绝对垄断（帮凶，全球开发者无偿自愿/非自愿给谷歌浏览器改进技术用于资本垄断全球），同时鼓励互联网网站限制非谷歌浏览器内核使用或者恶意降速，甚至爆出在隐私模式下也收集网站访问数据并上报的漏洞，这类基于开源谷歌内核开发的私有闭源浏览器著名的360浏览器，腾讯浏览器，搜狗浏览器，华为浏览器等等 ，自带认为的不良网站屏蔽黑名单和收集上报泄漏用户隐私                       
&ensp;&ensp;上面chromium内核浏览器的开源分支可以做备用，用于某些网站因谷歌垄断对火狐支持不太好或者故意降速，但是不能做主力使用   ，谷歌内核的浏览器 安卓上面只有猴狐和kiwi支持浏览器扩展插件  ，但是前者私有，后者半开源        


---   
## 火狐浏览器及其分支的基础安全设置                                                  
         
---               


&ensp;&ensp;  安卓系统：打开火狐浏览器（分支）设置，搜索-默认搜索引擎选择bing（如果没有代理/vpn）/duckduckgo（有代理/vpn，安全性高于bing，中文版默认的百度搜索很不安全），主页- 关闭快捷方式，关闭经常访问/最近访问和书签，启动页改为主页，防止别人打开浏览器直接在主页看到历史和书签以及打开的标签，隐私和安全-https-only模式改为启用-对所有标签页启用（防止意外访问http明文网页对运营商或者局域网监控到真实访问内容，网站账户密码等），增强型跟踪保护-模式标准（并不建议切换其他摸索，可能导致某些网站显示异常），开启要求网站不共享和不出售我的数据。网站设置，，其中跨站cookie建议保持默认的每次询问我，首drm控制的内容建议保持默认，禁用包括位置/麦克风/相机/虚拟现实等权限，需要使用相关权限时再进入此设置开启。  数据收集关闭所有能关闭的选项，崩溃包括选择永不发送，防止火狐官方通过此功能可能主动收集用户数据。（icereven和fennec已经默认关闭数据收集）         

 ---          
&ensp;&ensp;  电脑/笔记本桌面版：      主页 -主页内容-关闭所有选项，搜索-默认引擎改为bing（没有代理/vpn的情况）或duckduckgo（有代理/vpn的情况，隐私保护更好），搜索建议全部关闭。隐私安全- 隐私和安全-https-only模式改为启用-对所有标签页启用（防止意外访问http明文网页对运营商或者局域网监控到真实访问内容，网站账户密码等），增强型跟踪保护-模式标准（并不建议切换其他摸索，可能导致某些网站显示异常），开启要求网站不共享和不出售我的数据。网站设置，，其中跨站cookie建议保持默认的每次询问我，首drm控制的内容建议保持默认，禁用包括位置/麦克风/相机/虚拟现实等权限，需要使用相关权限时再进入此设置开启。  数据收集关闭所有能关闭的选项，崩溃包括选择永不发送，防止火狐官方通过此功能可能主动收集用户数据。    
密码-使用主密码，改设置启用后，如果要访问本地保存的网站密码必须先使用主密码解密，防止陌生人通过你的设备找到你火狐浏览器本地保存的密码。               
有代理/vpn的情况启用基于 HTTPS 的 DNS，选择严格模式/最大保护，保护dns查询防止防火墙和运营商知道你代理/vpn后访问的域名   ，也就是说防止dns泄露          



----               
## 浏览器插件 提高安全性和方便性：           
==注意==     
&ensp;&ensp;火狐官方允许私有/专有插件上架，在下载插件时应注意介绍页面的许可协议确保为开源协议，如果要使用私有插件，应该单独安装一个火狐分支来使用，千万不要和隐私用途的火狐版本混淆使用  ，谷歌内核浏览器 及其分支在插件下载页不会对插件的许可协议做说明 （谷歌/微软edge/brave/一众中国国产浏览器等，因此谷歌内核浏览器只能下载自己熟悉并确定是开源的插件）                     
- [火狐浏览器插件官网](https://addons.mozilla.org/zh-CN/firefox/)             
- [icecat自由浏览器插件官网](https://gnuzilla.gnu.org/mozzarella/)       
- crxsoso第三方插件网站（可以免代理下载广告拦截插件，但是这个网站安全性不能保证,仅用于无代理是下载火狐广告拦截插件或者谷歌内核的浏览器及其分支的插件）      
https://www.crxsoso.com/firefox/category/extensions                         
火狐浏览器推荐开源插件搜索安装：       
1. Chameleon             
伪造浏览器信息，伪造指纹信息，保护键盘等，伪装浏览器类型伪造系统类型，webrtc屏蔽，欺骗时区和语言，欺骗屏幕参数等 ，防止网站通过浏览器指纹缩小用户实名范围，根据所用真实设备信息 ，但是此插件可能会影响网站正常使用，建议指启用 以下这几个功能： 配置文件
-随机配置文件（或者手动切换ua），欺骗Accept-Language ，     欺骗X-Forwarded-For/Via IP，        禁用Referer，    保护键盘指纹，     欺骗字体指纹， 时区，其余伪装功能通过插件2canvasblocker完成。如果网页显示异常，尝试禁用此插件后刷新网页   
2. canvasblocker    
伪造浏览器指纹信息 ，对比chamelon少了时区/语言/伪造，安装后在弹出的设置界面初始化界面启用每一个功能，不明白意义的点击问号可以看到介绍            
3. uBlock Origin /AdGuard AdBlocker 
广告拦截和跟踪器拦截，选择一个即可，配置低的设备建议使用uBlock Origin，这两个插件因为吃代广告服务的中国大公司门的官司，在中国主动屏蔽了安装，因此从官方插件中心下载需要先开启代理/vpn连接外网，如果没有可以通过第三方插件中心crxsoso下载，https://www.crxsoso.com/firefox/category/extensions      
4. disable webrtc    
屏蔽webrtc避免ip泄漏（1和3都有此功能,安装13不用安装4,ublock在电脑上无法启用webrtc屏蔽功能）
5. User Agent Switcher        
伪造浏览器和系统（和1重复，插件1能正常使用的情况下不必安装此插件）   
6. ClearURLs    
移除网址跟踪    
7. Privacy Badger 
广告和跟踪器拦截，重点是跟踪器 ，在    Privacy Badger 插件设置中找到通用设置-隐私-开启`禁止网站追踪您点击了哪些链接（“超链接审计”）`和`禁用预读取`， 可以防止网站跟踪你点击访问过哪些链接      
8. NoScript 安全套件         
只允许在您信任的站点运行动态内容，保护您不受 XSS 点击劫持的攻击，并免遭“幽灵”、“熔断”等 JavaScript 漏洞利用风险，如果不会设置参考tor浏览器内置此插件的的默认设置  
9. Cookie AutoDelete   
可以设置自动清理cookie本地隐私数据   
10. Bitwarden – 开源加密免费云密码保存管理器                      
11. clear breowsering data          
一键清理历史/cooike等 （也可以用火狐自带的历史清理功能）    
12. twp   （网页翻译），也可以用火狐浏览器自带的本地离线翻译，隐私性更好，只是翻译效果没有在线的twp好                 
13. -Violentmonkey （油猴子网页脚本，网页脚本使用建议使用单独的火狐浏览器分支，网页脚本可能包含后门，最好不使用）                  
[greasyfork油猴脚本在线下载](http://greasyfork.org/)                    
其他插件推荐：        
- Location Guard         
   Mozilla Firefox 等现代浏览器可以告诉网站您所在的位置，以便提供位置感知功能。您的地理位置是通过各种方式获取的（例如使用 WiFi 数据），并且通常非常准确，这可能会侵犯您的隐私。此扩展允许您享受地理定位的有用应用程序，同时保护您的隐私。它通过向网站报告虚假位置来实现这一目的，而该虚假位置是通过向真实位置添加一定量的“噪音”而获得的。噪声是随机选择的，以确保无法高精度地推断出真实位置。提供了三个可配置的隐私级别。隐私级别越高，噪声量越大，这会提供更好的隐私，但代价是虚假位置不太准确。可以为每个网站进行配置以实现灵活性：可以为行车路线提供比天气预报更准确的位置。还有一种选择是使用固定位置，而不是在真实位置上添加噪音。这提供了最好的隐私（完全不依赖于真实位置），但代价是精度非常低。      
- Mailvelope        
 使用端到端加密增强您的在线邮件安全性。基于OpenPGP标准的安全邮件通信。
Mailvelope 向常见网络邮件提供商的用户界面添加了缺少的加密和解密功能。
它支持PGP加密标准（OpenPGP、GPG）并兼容其他PGP应用程序。使用 Mailvelope 加密硬盘上的文件并发送加密的电子邮件附件。Mailvelope 可将安全性无缝集成到您的工作流程中。     
- Firefox Relay 火狐油箱中继         
   介绍： 我们都创建了许多在线帐户，但其中大多数仅链接到一两个电子邮件地址。这意味着，如果只有一个帐户遭到黑客攻击，那么使用同一电子邮件地址的每个帐户也可能面临风险。Firefox Relay 可帮助您保护您的真实电子邮件地址 - 与您的在线身份关系最密切的地址。它可以让您生成独特的随机别名，用于注册帐户、应用程序或新闻通讯，并将消息转发到您的真实地址。如果您发现某个帐户正在发送不需要的电子邮件或垃圾邮件，您可以阻止该别名，它将停止向您的收件箱发送电子邮件。一旦您不再需要某个帐户，您可以删除别名。       
- Temp Mail    
     Temp Mail 提供临时、安全、匿名、免费、一次性的电子邮件地址。忘掉垃圾邮件、广告邮件、黑客攻击和攻击机器人吧。保持您真实邮箱的清洁和安全。我们的扩展是高级版本的服务，例如：10 分钟邮件、游击邮件、邮件程序、getairmail、一次性邮件、临时邮件等。    
- History Cleaner历史清理器      
    删除超过指定天数的浏览历史记录（要执行此操作，请进入 Firefox 附加组件管理器，找到历史记录清理器，然后在首选项中设置行为和天数）。     
- Modify Header Value      
  修改标头值 可以为所需网站或 URL 上的所有请求添加、修改或删除 HTTP 请求标头。如果您是应用程序开发人员、网站设计师，或者您想测试网站上请求的特定标头，则此 Firefox 插件非常有用。     
- Privacy Redirect     
   将 Twitter、YouTube、Instagram 和 Google地图重定向至尊重隐私的替代品： Nitter、Invidious、Bibliogram 和 OpenStreetMap。    
- Link Cleaner     跟踪链接清理器       
   

........
火狐移动版如果安装不了 下载插件文件后，浏览器开启开发者模式（设置-关于-点击火狐图标六下）从火狐设置插件的本地插件按钮导入插件    


---    





##  图文高级使用教程               
-[点击查看火狐浏览器图文使用教程-包括tor/brave](/doc/firefox-use/src/commit/824ff4905f43b97ccb7500e91744e11b3d9894ec/%E8%87%AA%E7%94%B1%E5%8F%8A%E5%BC%80%E6%BA%90%E6%B5%8F%E8%A7%88%E5%99%A8firefox&tor&brave&fennec&mull%E6%95%99%E7%A8%8B%EF%BC%88a908%EF%BC%89.pdf/)      
==特别提醒==                 
上面图文教程内的脚本教程最好不要使用，脚本可能包含后门，沉浸式翻译不开源已有严重泄露用户网站账户密码的案例，相比火狐本地翻译和开源twp插件唯一优势只有视频字幕翻译和本地pdf翻译。如果要使用上面的功能，请单独准备一个火狐浏览器分支使用，在这个浏览器内不应该登陆任何个人账户，和隐私用的火火狐浏览器作隔离 。           
火狐最好使用foxyproxy进行网页代理而不是vpn模式，，因为vpn模式在关闭火狐前关闭梯子会泄漏真实ip,    梯子意外断联或者闪退也会，因此最好使用代理模式，断梯子后直接浏览器断网-代理软件启用本地代理端口，火狐浏览器下载foxyproxy代理插件，设置socks5代理，ip为本地地址`127.0.0.1`，端口号在代理软件设置内找，比如vrayng默认端口号为10808,             保存设置后点击插件，然后切换到此代理。                                        
  
---
## 补充     
&ensp;&ensp;在 Firefox 电脑版中配置基于 HTTPS 的 DNS 保护级别（doh）,加密dns域名解析请求同时防止dns污染 ，防止dns解析网址到目标ip时泄漏真实ip申请和目标访问， 不管梯子的加密型再强             
https://support.mozilla.org/zh-CN/kb/dns-over-https     

&ensp;&ensp;安卓火狐正式版打开`about:config`高级设置的方法为地址栏输入  
`chrome://geckoview/content/config.xhtml`    
（电脑版本直接在地址栏输入`about:config`）             
回车，搜索         
`network.trr.mode`，将值改为2或者3（默认是 0；2 表示尝试使用 DoH,3是严格，如果不行就退回到传统方式；5 表示任何情况下都不用 DoH 功能）
&ensp;&ensp;搜索network.trr.uri，
&ensp;&ensp;将值改为支持DoH的未污染服务器地址，可以输入一些公共的，如adgruad（需翻墙）
`https://dns.adguard-dns.com/dns-query`       
couldfire的dns：    
`https://1.1.1.1/dns-query`      
火狐的dns：      
`https://mozilla.cloudflare-dns.com/dns-query`，      
或者其他              
&ensp;&ensp;通过以上步骤，你已经成功开启了火狐浏览器隐藏功能DoH，可以避免自己的DNS查询记录被监控收集和恶意篡改，不再受困于DNS污染而无法正常访问某些网站。新版火狐可能已经在设置选项里面支持doh修改     
&ensp;&ensp;此外，你还可以在地址栏输入'about:networking'选择DNS选项，查看DNS查询状态。    -  对于安卓，建议使用tor代理工具inzivible ，开启他的tor和dnscrypt功能 防止dns泄漏并加密dns申请   
- 对于其他梯子，请修改梯子软件内的默认dns为谷歌`8.8.8.8`  或者clouldfire的 `1.1.1.1`或其他国外dns解析服务网址，删掉阿里云，腾讯，中国移动，百度等dns       
----     
- 不依靠插件手动禁用webrtc，防止ip泄露，对于电脑firefox，浏览器地址栏输入 `about:config`，安卓版地址栏输入  `chrome://geckoview/content/config.xhtml`      ， 当系统询问您是否了解风险时，点击<我接受风险！>按钮。在搜索字段中，复制并粘贴以下内容：`media.peerconnection.enabled`在搜索结果中，单击鼠标右键并选择切换`ture`为`flase`,打开网站
`htttps://ipleak.net/`，找到  Your IP addresses - WebRTC detection-  no leak, RTCPeerConnection not available.，说明成功禁用了webrtc                    

            
---
                    
#### 如何让火狐插件主页支持扩展功能，特别是使用翻译插件翻译火狐插件介绍的网页 ？     
电脑火狐可以直接网址 `about:config`打开隐藏设置    
安卓火狐正式版打开about:config的方法为地址栏输入  
`chrome://geckoview/content/config.xhtml`      

&ensp;&ensp;先在about:config页面点击左上角加号，名称填入：      
`privacy.resistFingerprinting.block_mozAddonManager`       
下面值false切换为true       ，然后点创建，创建好了之后直接在当前页面搜          
`extensions.webextensions.restrictedDomains`         
接着把值中的addons.mozilla.org刪掉 ，也可以全部删，全部删的话值中所有的网站都不会限制扩展使用，时效：永久






