**视频教程：**

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=327623069&bvid=BV1JA411h7Gw&cid=171385214&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

https://www.bilibili.com/video/BV1JA411h7Gw/ 

---

- ***[文字教程源码点击此](/doc/git-codeberg-github-sourceforgek-cloudfire-md-html/raw/branch/main/md%E4%B9%A6%E5%86%99%E5%85%B7%E4%BD%93%E4%BE%8B%E5%AD%90/README.md/)   
       ********
- [点击此观看实际效果](https://p23tyjujukk.codeberg.page/git-codeberg-github-sourceforgek-cloudfire-md-html/md书写具体例子/README.html)

---

==源码==          

# 标题1   `#空格`   
## 标题2   `## 空格`   
### 标题3
#### 标题4 
##### 标题5 
---
#### 首行缩进     
&ensp;`&ensp;空格`这是半个字符的缩进        
&ensp;&ensp;` &ensp;&ensp;空格`这是一个字符的缩进     
&ensp;&ensp;&ensp; &ensp;这是` &ensp;&ensp;&ensp; &ensp;空格`两个字符的缩进(常用)    
---空格  &ensp;&ensp;   这是分隔符，前后有空行        

---
  

---
#### 引用       
>  这是引用   
--- 
#### 目录      
这是目录         
- 添加目录段首加五个空格，比如
     
        ** 这是目录： **  
           一.          
           二.
           三.  

或者使用        
```
这是目录： **  
一.           
二.  
三.      

```   

*** 


#### 列表      
这是列表    
1. 列表1    
2. 列表2   
---
这是无顺序列表     
- 列表1   
- 列表2    
----
这是任务列表   

- [ ] 吃饭

- [x] 打豆豆

- [ ] 睡觉 
---
- 代码块  

``` 
这是C语言指令   

```
---
- 数学公式等中间引用     
$$
这是公式   
$$
----
- 表格：（左对齐，右对齐，中间对齐，|用shift+反斜杠打出）    

|姓名|年龄|成绩|    
|:---|---:|:---:|
|李|18|100| 

---
- 脚注： 

一件三连 [^这是脚注]    
    
[^这是脚注] :这是注释         

---
链接引用：   
[这是标题](这是链接地址 "这是解释")

[这是标题][id]                                 

[id]:这是链接地址 "要前后空行，其他地方使用他复制上面的标题和id"    
ULR:   

https://bing.com      

![这是图片标题](http://www.baidu.com/img/bd_loge1.png?where=super " 这是图片解释")  
插入图片并调整比例     


<p>
<img src="https://codeberg.org/iNPUTmice/Conversations/raw/branch/master/fastlane/metadata/android/en-US/images/phoneScreenshots/01.png" align="center" width="216"/ >
<img src="https://codeberg.org/iNPUTmice/Conversations/raw/branch/master/fastlane/metadata/android/en-US/images/phoneScreenshots/02.png" align="center" width="216"/>
<img src="https://codeberg.org/iNPUTmice/Conversations/raw/branch/master/fastlane/metadata/android/en-US/images/phoneScreenshots/03.png" align="center" width="216"/>
<img src="https://codeberg.org/iNPUTmice/Conversations/raw/branch/master/fastlane/metadata/android/en-US/images/phoneScreenshots/04.png" align="center" width="216"/>
<img src="https://codeberg.org/iNPUTmice/Conversations/raw/branch/master/fastlane/metadata/android/en-US/images/phoneScreenshots/05.png" align="center" width="216"/>
</p>
    
---
### 符号等        
**这是强调**     
*这是斜体*  
`行内代码`    
<u>这是下划线</u> 
~~这是删除线文本~~        
文本^这是上标^     
文本~这是下标~   
<small>小号字体</small>    
<big>大号#</big>   
这是表情 :smile:  
$这是行内数学公式$   
H~2~0    
H<sub>2</sub>0   
X^2^     
X<sup>2</sup>  

==这是高亮==（md高亮语法有些平台不支持展示）          
html高亮语法mark：  `<mark>高亮内容</mark>`               
<mark>高亮展示 </mark>               
               
---  
###字体设置       
 <font size=1>我是尺寸</font>   
<font face="逐浪新宋">我是逐浪新宋</font>   
<font face="逐浪圆体">我是逐浪圆体</font>   
<font face="逐浪花体">我是逐浪花体</font>   
<font face="逐浪像素字">我是逐浪像素字</font>   
<font face="逐浪立楷">我是逐浪立楷</font>   
<font color=red>我是红色</font>   
<font color=#008000>我是绿色</font>   
<font color=yellow>我是黄色</font>   
<font color=Blue>我是蓝色</font>  
<font color= #871F78>我是紫色</font>   
<font color= #DCDCDC>我是浅灰色</font>   
<font size=5>我是尺寸</font>   
<font size=10>我是尺寸</font>   
<font face="逐浪立楷" color=green size=10>我是逐浪立楷，绿色，尺寸为5</font>        
###### 叠加使用叠加几个后面多几个</font>  
比如         

 <font color=red><font size=5>我是红色和尺寸 </font></font>       
 或者合写     
  <font color=red size=5>我是红色和尺寸 </font>                 


--- 
## html5折叠语法   

最简单的方式为   
<details>
<summary><font size=4 color=red>目录（这是折叠按钮，点击展开展开）</font></summary>       

折叠标题字体四号，颜色为红色      
### 标题       
- 小分    
1. 序号    

</details>


<details>    
  <summary>折叠文本</summary>  
  
  保留格式要空行
### 此处可书写文本  
1. `嗯，是可以书写文本的`        

</details>        


<details>   
  <summary>折叠代码块</summary>  
  <pre><code>    

     System.out.println("虽然可以折叠代码块");  
     System.out.println("但是代码无法高亮");  

  </code></pre>  
</details>  

<details>    
  <summary>折叠代码块</summary>  
  <pre><blockcode>   

     System.out.println("虽然可以折叠代码块");  
     System.out.println("但是代码无法高亮");  

  </blockcode></pre>  
</details>       

           


解读       
```
details：折叠语法标签   
summary：折叠语法展示的摘要   
pre：以原有格式显示元素内的文字是已经格式化的文本   
code：指定代码块    
```


---
## 嵌入视频   
复制视频网站分享里面的代码分享    

src=“”引号里面的内容src="https://www.bilibili.com/video/BV1JA411h7Gw"   

<iframe width="560" height="315" src="https://www.youtube.com/embed/m2xCpt8qWyM?si=cS35pfw4I16HGmU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   


---





