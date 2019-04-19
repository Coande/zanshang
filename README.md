## 说明
当前仓库是 Coande 的赞赏页，预览：https://reward.e12e.com?app=co-trans-ext

fork 自 https://github.com/kujian/zanshang

在原基础上添加了赞赏记录页，赞赏记录数据存于`js/data.js`文件。赞赏数据以 app 分别记录，文件中对象 key 为 app 名称。网站链接以 query 形式携带 app 字段来区分来自不同的 app，如预览页中的 `?app=co-trans-ext`，`co-trans-ext` 为 app 名称。

以下为原项目 README.md :

># 仿知乎的赞赏，支持支付宝和微信
>
>## 功能简介：
>
>[更多介绍](http://caibaojian.com/zanshang.html)
>
>给自己的博客加了一个支付宝和微信的赞赏功能，在文章的最底部，点击赞赏按钮，就会出现一个类似知乎专栏的赞赏弹窗，不过知乎的比较高级，它那个是调用微信的支付接口，我这个只是简单的使用了几张二维码图片替换，所以没法显示有哪些人打赏了。
>
>## 功能预览
>
>![](http://img.caibaojian.com/uploads/2017/02/zansang.gif)
>
>在线体验：[http://caibaojian.com/zanshang.html](http://caibaojian.com/zanshang.html)
>
>## 如何使用
>
>直接clone这个项目，按照index.html中的代码，把css、HTML、js代码方别引入就可以了。
>
>## 使用须知：
>
>二维码图片是放在当前目录中的images文件中，支付宝和微信的命名规则为：type+'-'+data-num.如果选择下面这个2元，当默认选择支付宝付款方式时，则对应的图片就是alipay-2.png。
>
>```html
><button class="btn btn-blink" data-num="2">2元</button>
>```
>
>如果对应选择微信的付款方式，同时选择10元这个按钮，则对应的图片就是wechat-10.png。
>
>```html
><button class="btn btn-blink" data-num="10">10元</button>
>```
>使用时记得替换images路径下的二维码为你自己的，不然别人打款就会打给我的啦。:)