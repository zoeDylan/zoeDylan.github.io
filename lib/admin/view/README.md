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
<img src="./lib/image/files/4.png" alt="4.png"/>
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
	<img src="./lib/image/files/1.png" />
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
 <a href="./lib/image/files/1.png" download="1.png">下载图片</a>
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

### b、i、del

`b`标签定义字体加粗

`i`标签定义字体倾斜

`del`标签给字体添加一条删除线

```html
<b>加粗</b><br>
<i>斜体</i><br>
<del>删除</del>
```
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
### **input**

`input`算是HTML中一个重要的标签了，它主要用于页面中的各种数据输入。

登录框演示
```html

帐号：<input type="text" placeholder="请输入帐号："><br>
密码：<input type="password" placeholder="请输入密码："><br>
记住密码:<input type="checkbox"><br>
<input type="submit" value="提交">
 
```

1. `input`的`type`属性

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

密码框和输入框中，可以添加`placeholder`属性（html5增加）展示一段提示文字

```html
输入框：<input type="text"><br>
密码框：<input type="password"><br>
输入框有placeholder属性：<input type="text" placeholder="请输入内容："><br>
密码框有placeholder属性：<input type="password"  placeholder="请输入密码："><br>

```