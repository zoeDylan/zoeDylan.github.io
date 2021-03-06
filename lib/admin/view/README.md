# 前端-从零开始系列-3:常用HTML元素

此篇将是纯HTML讲解的最后一篇，后期不会单独讲解。

之前写了两篇关于HTML的介绍，都是一些HTML最基础的使用方式，下面将对一些常用的元素`(标签)`进行讲解。

主要涉及：**表单、表格、列表、超链接、图片**等一些**原生、常用**的元素

---



### img

`img`标签是个空标签，所以`img`标签没有任何内容。

`img`常用属性就两个:`src(图片地址)`和`alt(替代文本)`

图片加载成功后是不会显示替代文本的。

```html
<img src="https://zoedylan.github.io/lib/image/files/4.png" alt="4.png"/>
<img src="." alt="替代文本：没有这张图片"/>
```

----

### a


1. **a标签的`href`属性和格式**
```html
  <a href="https://github.com/zoedylan">我的GitHub</a>
```

`a`标签就是网页中控制链接跳转的标签

上面代码可以看到：

* `href`属性控制链接地址
* `a`标签不是空元素,里面可以写内容

我们可以给图片一个链接：

```html
<a href="https://github.com/zoedylan">
	点击文字或图片跳转到指定链接
	<img src="https://zoedylan.github.io/lib/image/files/1.png" />
</a>
```

不过，`a`标签中不能再次嵌套`a`标签

```html
  <a href="https://github.com/zoedylan">
          我的外部的
          <a href="https://github.com/zoeDylan/jobTemplate">
                  我是里面的的
          </a>
  </a>
```

虽然两个链接都可以正常打开，但用浏览器开发人员工具查看就会发现，两个`a`标签从嵌套关系变成了并列的关系。

2. **a标签的`target`属性**

a标签默认`target`是当前页面打开链接

常用的就一个：`_blank`新页面打开

```html
  <a href="https://github.com/zoedylan">当前页面打开</a>
  <a href="https://github.com/zoedylan" target="_blank">新页面打开</a>
```

3. **a标签的`download`属性**

`download`属性是HTML5新增的，使用了这个属性代码点击链接下载文件。

```html
 <a href="https://github.com/zoedylan" download="下载文件">下载页面内容</a>
 <a href="https://zoedylan.github.io/lib/image/files/1.png" download="1.png">下载图片</a>
```

4. 扩展

当然，浏览器对a标签也是有一定的扩展，下面我就简单举例

```html
<a href="tel:00000000">拨打电话</a><br>
<a href="mailto:someone@microsoft.com?subject=helloworld">发送邮件</a>
```
这些扩展大多在移动端用到，还有其它一些场景对标签也有扩展，这个就需要后期自己去了解。

5. 总结

    1. `href`属性控制链接地址
    2. `a`标签不是空元素,里面可以写内容
    3. `href`以`tel:`开头可以拨打电话
    4. `href`以`mailto:`开头可以发送邮件
    5. 添加`download`属性可以下载文件
    
---

### br

`br`标签用于行内元素换行

```html
这段文字在一行，<br>但是用了br标签就强制换行了。
<br>
<a href="https://github.com/zoedylan">两个标签之间换行1</a><br><a href="https://github.com/zoedylan">两个标签之间换行2</a>
```

---

### button

网页中代表按钮

可以插入图片

```html
<button>我是一个按钮</button>
<button><img src="https://zoedylan.github.io/lib/image/files/man.png">我是一个图片按钮</button>
```

---

### b、i、del、sub、sup

`b`标签定义字体加粗

`i`标签定义字体倾斜

`del`标签给字体添加一条删除线

`sub`标签将字体设置为下标

`sup`标签将字体设置为上标

```html
<b>加粗</b><br>
<i>斜体</i><br>
<del>删除</del>
<sub>下标</sub>
<sup>上标</sup><br>
上标扩展：2M<sup>2</sup><br>
下标扩展：2M<sub>2</sub><br>
```
---

### h1、h2、h3、h4、h5、h6

标题大小

```html
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
```
---

### **input** [w3c](http://www.w3school.com.cn/tags/tag_input.asp)

`input`算是HTML中一个重要的标签了，它主要用于页面中的各种数据输入。

登录框演示
```html

帐号：<input type="text" placeholder="请输入帐号："><br>
密码：<input type="password" placeholder="请输入密码："><br>
记住密码:<input type="checkbox"><br>
<input type="submit" value="提交">
 
```

`input`标签有很多HTML5的新定义，但是由于兼容等问题，一般不是很常用。

* **`type`属性**

*提示：下文中出现的`label`标签将在后面看到，你滚动到下面先看`label`标签*

`type`决定`input`展示的类型,下面直接代码演示常用的几个

```html
输入框：<input type="text"><br>
密码框：<input type="password"><br>
提交按钮：<input type="submit"><br>
重置按钮: <input type="reset"><br>
单选: <label><input type="radio" name="sex">男</label><label><input type="radio" name="sex">女</label><br>
多选: <label><input type="checkbox">篮球</label><label><input type="checkbox">足球</label><label><input type="checkbox">乒乓球</label><br>
上传文件: <input type="file"><br>

```

* **`placeholder`属性**

密码框和输入框中，可以添加`placeholder`属性（html5增加）展示一段提示文字

```html
输入框：<input type="text"><br>
密码框：<input type="password"><br>
输入框有placeholder属性：<input type="text" placeholder="请输入内容："><br>
密码框有placeholder属性：<input type="password"  placeholder="请输入密码："><br>

```

* **`disabled`和`readonly`属性**

密码框和输入框中，可以添加`readonly`属性，标签变成只读:

```html
<input type="text" readonly="readonly" value="readonly"><br>
<input type="text" disabled="disabled" value="disabled">

```

* **`value`属性**

密码框和输入框中，可以添加`value`属性，给标签设置初始值:

```html
输入框：<input type="text" value="初始值："><br>
密码框：<input type="password" value="123">

```
* **`checked`属性**

多选和单选按钮中，可以添加`checked`属性，给标签添加默认选择项：

```html
单选: <label><input checked="checked" type="radio" name="sex">男</label>
      <label><input type="radio" name="sex">女</label><br>
多选: <label><input checked="checked" type="checkbox">篮球</label>
      <label><input checked="checked" type="checkbox">足球</label>
      <label><input type="checkbox">乒乓球</label><br>

```

多选可以添加多个`checked`属性,单选只能在其中一个里面添加`checked`属性

* **`name`属性**

用于定义标签名称，提交服务器，服务器可以根据名称获取值.

```html
输入框：<input type="text" name="name"><br>
密码框：<input type="password" name="password">
```

`name`属性对多选和单选进行分类

```html
选择性别：<label><input checked="checked" type="radio" name="sex">男</label>
      <label><input type="radio" name="sex">女</label><br>
选择年龄段：<label><input checked="checked" type="radio" name="age">0-10岁</label>
      <label><input type="radio" name="age">11-20岁</label>
      <label><input type="radio" name="age">21-30岁</label>
      <label><input type="radio" name="age">31-40岁</label><br>
选择爱好： <label><input checked="checked" type="checkbox">篮球</label>
      <label><input checked="checked" type="checkbox">足球</label>
      <label><input type="checkbox">乒乓球</label><br>
```

性别和年龄段是不同意义的单选框，所以他们可以分别使用`checked`属性


`input`标签主要就是这些属性，一般配合`form`标签使用。

---

### label

`label`标签主要用于单选和多选的点击处理.

```html
没有label标签的单选框，点击文字无效果：<br>
性别: <input type="radio" name="sex">男
<input checked="checked" type="radio" name="sex">女<br>

有label标签的单选框，点击文字选择：<br>
性别：<label><input type="radio" name="sex">男</label>
      <label><input type="radio" name="sex">女</label><br>
```

* **`for`属性**

`label`的`for`属性需要对应单选或多选的`id`属性进行操作.

```html
性别：<label><input type="radio" id="man" name="sex">男</label>
      <label><input type="radio" id="woman" name="sex">女</label><br>
<label for="man">选择男</label>  <label for="woman">选择女</label><br>
<label for="man">点击图片选择男<img src="https://zoedylan.github.io/lib/image/files/man.png"/>
<label for="woman">点击图片选择女<img src="https://zoedylan.github.io/lib/image/files/woman.png"/>
```
上面我用的都是单选框，你可以修改代码换成多选框进行处理。

---

### form  [w3c](http://www.w3school.com.cn/tags/tag_form.asp)

`form`标签一般都和`input`标签配合使用

示例：
```html
<form>
  帐号：<input type="text" placeholder="请输入帐号："><br>
  密码：<input type="password" placeholder="请输入密码："><br>
  记住密码:<input type="checkbox"><br>
  <input type="submit" value="提交">
  <input type="reset" value="重置">
</form>
```
小提示：添加`form`标签后，你可以点击**重置**按钮，你会发现你输入的内容已经重置了。

* **`action`属性**

`action`属性代码`form`标签提交数据的地址
```html
<form action="./abc">
  帐号：<input type="text" placeholder="请输入帐号："><br>
  密码：<input type="password" placeholder="请输入密码："><br>
  记住密码:<input type="checkbox"><br>
  <input type="submit" value="提交">
  <input type="reset" value="重置">
</form>
```

点击提交后，你可以看到浏览器地址栏的地址变化。

* **`method`属性**

`method`属性规定`form`提交的方法，一般是:`GET`和`POST`之一。


```html
<form action="./abc" method="GET">
  帐号：<input type="text" placeholder="请输入帐号："><br>
  密码：<input type="password" placeholder="请输入密码："><br>
  记住密码:<input type="checkbox"><br>
  <input type="submit" value="提交">
  <input type="reset" value="重置">
</form>
```

* **`target`**

和`a`标签的`target`方法一样

```html
<form action="./abc" method="GET" target="_blank">
  帐号：<input type="text" placeholder="请输入帐号："><br>
  密码：<input type="password" placeholder="请输入密码："><br>
  记住密码:<input type="checkbox"><br>
  <input type="submit" value="提交">
  <input type="reset" value="重置">
</form>
```
---

### select 

`select`标签用于定义下来列表框

```html

<select>
	<option value="1">苹果</option>
	<option value="2">梨子</option>
	<option value="3">香蕉</option>
</select>

```

`select`本身数据是来源于它里面的`option`

* **`selected`属性**默认选择

`selected`属性需要添加到`option`标签上面

```html
默认选择梨子
<select>
	<option value="1">苹果</option>
	<option selected="selected" value="2">梨子</option>
	<option value="3">香蕉</option>
</select>

```
* **`disabled`** 禁用

```html
<select disabled="disabled">
	<option value="1">苹果</option>
	<option selected="selected" value="2">梨子</option>
	<option value="3">香蕉</option>
</select>
```
---

### textarea

`textarea`叫做文本域，和`input`标签的输入框类似,也可以使用`name`、`placeholder`等属性。

不同的是,`textarea`可以输入多行.

```html
<textarea placeholder="输入内容："></textarea>
<textarea>
我是textarea
哼哼哈嘿
</textarea>
```

* **`disabled`和`readonly`属性**

和输入框的`readonly`类似
```html
<textarea readonly="readonly：">readonly</textarea>
<textarea disabled="disabled：">disabled</textarea><sub>下标</sub>
```

---

### div、p、span

这三个标签是在写页面出现最多的三个标签

```html
<div>我是div<p>我是p<span>我是span</span></p></div>
```

`div`和`p`是块级元素,`span`是内联元素.

**错误演示：**
```html
<span>我是span<p>我是p<div>我是div</div></p></span>
<span>我是span<div>我是div</div></span>
```

尽量杜绝在`span`里面使用`p`和`div`，也不要在`p`里面使用`div`.

---

### ul、ol、li、dl、dt、dd

这一堆标签是定义列表的,下面我直接展示使用方式：

```html
<b>列表：</b>
<ul>
    <li>列表1</li>
    <li>列表2</li>
    <li>列表3</li>
    <li>
    	<p>li什么鬼？</p>
     	<div>
     		<img src="https://zoedylan.github.io/lib/image/files/man.png">
     	</div>
     </li>
</ul>
<b>数字列表：</b>
<ol>
    <li>列表1</li>
    <li>列表2</li>
    <li>
    	<p>li什么鬼？</p>
     	<div>
     		<img src="https://zoedylan.github.io/lib/image/files/man.png">
     	</div>
     </li>
</ol>
<b>dl列表</b>
<dl>
    <dt>姓名：</dt>
    <dd>zoeDylan</dd>
    <dt>年龄:</dt>
    <dd>18</dd>
    <dt>个性宣言：</dt>
    <dd>
    	<p>dd什么鬼？</p>
     	<div>
     		<img src="https://zoedylan.github.io/lib/image/files/man.png">
     	</div>
    </dd>
</dl>

```
列表其实没什么好说的，注意他们的格式，根据实际情况使用就可以了。

---

### table

`table`标签用于定义页面中的表格

```html
<table>
    <tr>
        <td>标题</td>
        <td>创建时间</td>
        <td>操作</td>
    </tr>
    <tr>
        <td>前端-从零开始系列-1:认识HTML</td>
        <td>2017-09-04</td>
        <td><button>预览</button><button>删除</button></td>
    </tr>
    <tr>
        <td>前端-从零开始系列-1:认识HTML</td>
        <td>2017-09-04</td>
        <td><button>预览</button><button>删除</button></td>
    </tr>
    <tr>
        <td>前端-从零开始系列-1:认识HTML</td>
        <td>2017-09-04</td>
        <td><button>预览</button><button>删除</button></td>
    </tr>
</table> 
```

可以给`table`添加`border`属性值为`1`展示边框,值为`0`则没有边框

```html
<table border="1">
    <tr>
        <td>标题</td>
        <td>创建时间</td>
        <td>操作</td>
    </tr>
    <tr>
        <td>前端-从零开始系列-1:认识HTML</td>
        <td>2017-09-04</td>
        <td><button>预览</button><button>删除</button></td>
    </tr>
    <tr>
        <td>前端-从零开始系列-1:认识HTML</td>
        <td>2017-09-04</td>
        <td><button>预览</button><button>删除</button></td>
    </tr>
    <tr>
        <td>前端-从零开始系列-1:认识HTML</td>
        <td>2017-09-04</td>
        <td><button>预览</button><button>删除</button></td>
    </tr>
</table> 
```
规范点的写法，我们用`thead`表示头部`th`表示内容列,`tbody`表示内容

```html
<table border="1">
    <thead>
    	<tr>
          <th>标题</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>前端-从零开始系列-1:认识HTML</td>
            <td>2017-09-04</td>
            <td><button>预览</button><button>删除</button></td>
        </tr>
        <tr>
            <td>前端-从零开始系列-1:认识HTML</td>
            <td>2017-09-04</td>
            <td><button>预览</button><button>删除</button></td>
        </tr>
        <tr>
            <td>前端-从零开始系列-1:认识HTML</td>
            <td>2017-09-04</td>
            <td><button>预览</button><button>删除</button></td>
        </tr>
    </tbody>
</table> 
```
给`td`添加`colspan`修改占用格数
```html
<table border="1">
     <tr>
         <td>a1</td>
         <td>a2</td>
         <td>a3</td>
     </tr>
     <tr>
         <td>b1</td>
         <td>b2</td>
     </tr>
     <tr>
         <td>c1</td>
         <td colspan="2">c2</td>
     </tr>
</table>
```
给`td`添加`rowspan`修改占用列数

```html
<table border="1">
     <tr>
         <td>a</td>
         <td>a1</td>
         <td>a3</td>
     </tr>
     <tr>
         <td  rowspan="2">b</td>
         <td>b1</td>
     </tr>
     <tr>
         <td>c</td>
         <td colspan="2">c1</td>
     </tr>
     <tr>
         <td>d</td>
         <td>d1</td>
         <td>d2</td>
     </tr>
</table>
```

`table`标签本身挺简单的，就`td`的两个属性需要花点时间去理解透彻。

---

### video、audio

这两个标签正如他们名字一样，一个是视频，一个是音频.

```html
<video src="https://zoedylan.github.io/lib/image/files/v1.ogg" ></video>
<audio src="https://zoedylan.github.io/lib/image/files/a1.ogg" ></audio>
```

上面代码运行，我们可以看到音频和视频使用的链接和`img`一样都是用的`src`属性

* `controls`控制器 

我们需要一个控制器,添加一个`controls`属性

```html
<video src="https://zoedylan.github.io/lib/image/files/v1.ogg" controls="controls"></video>
<audio src="https://zoedylan.github.io/lib/image/files/a1.ogg" controls="controls"></audio>
```

* `autoplay`自动播放和`loop`循环播放

给
```html
<video src="https://zoedylan.github.io/lib/image/files/v1.ogg" loop="loop" autoplay="autoplay" controls="controls"></video>
<audio src="https://zoedylan.github.io/lib/image/files/a1.ogg" loop="loop" autoplay="autoplay" controls="controls"></audio>
```
* 多个视频或音频源

```html
<video controls="controls">
	<source src="https://zoedylan.github.io/lib/image/files/v1.ogg"/>
    <source src="https://zoedylan.github.io/lib/image/files/v2.mp4"/>
</video>
<audio controls="controls">
	<source src="https://zoedylan.github.io/lib/image/files/a1.ogg"/>
    <source src="https://zoedylan.github.io/lib/image/files/a2.mp3"/>
</audio>
```

`source`标签单独使用没有任何意义，但是放在`audio`和`video`里面表示音频或视频源

`audio`和`video`不具备列表功能，所以列表播放需要`javascript`来控制，这个后期再讲到。

---

`style、script、link `这三个标签在后续的`JS`和`CSS`中讲到.

---

### HTML注释

HTML中的注释:`<!--注释内容-->`

```html
<p>下面有段注释</p>
<!--当行注释注释，这里面不会显示-->
<p>上面有段注释</p>
```
区域注释

```html
<p>下面有段注释</p>
<!--
<div>
  我是被注释了的DIV
  <button>我也被注释了</button>
</div>
-->
<p>上面有段注释</p>

```


### 总结

一个网页的构成不外乎就是各种HTML代码嵌套生成的。

但是有些代码嵌套会出现各种奇葩的问题,比如：`p`标签里面写一个`div`标签

我列出的只是一些常用的标签，更多的可以去[w3c](http://www.w3school.com.cn/tags/index.asp)查看详细的。

这篇讲的内容比较多，重点不是怎么用，而是知道有这么个东西，以后好直接使用。

特别是各种标签的各种属性，在以后开发中肯定会用到，可以多练习，多熟悉。

---

HTML的教程到此结束，接下来我会讲解样式(`CSS`)方面的,并结合HTML进行一些讲解。