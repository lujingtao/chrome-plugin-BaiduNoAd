@[toc](chrome自制插件--百度搜索结果去广告1.0)

# 一、前言
国内用户用百度的占绝大多数，但是百度搜索结果的广告真烦人，特别是搜索“黄金”或者“理财”等相关信息，结果发现网页第一版全是所谓的推广链接，而且你会发觉这些链接大部分都是虚假网站，以骗钱为目的，关键这些链接还很难区分开来，要又经验并且仔细看才能区分，百度真无节操，当然你用vpn上google就安逸了。

于是我做了一个简单的chrome插件，可以用插件的css覆盖百度自身的css，用于把推广链接都清晰地区分开来，我们可以看看效果：


# 二、效果
图1：默认搜索结果，第一版全是广告，用户体验为-99999
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191016002436260.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2lhbWx1amluZ3Rhbw==,size_16,color_FFFFFF,t_70)

图2：加载插件后的效果，去掉广告，同时优化了搜索结果显示。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191016002521813.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2lhbWx1amluZ3Rhbw==,size_16,color_FFFFFF,t_70)
 

# 三、说明

- 1、插件就2个文件manifest.json(配置文件)，append.css(页面额外加载的css)，你们可以自行修改（现在贴吧也越来越多广告了，也可以用这种方法过滤）。

- 2、举一反三，插件可以应用到任意一个网站并修改网站样色，当然只有本机有效。
manifest.json中的"`matches": ["https://www.baidu.com/*"]`用于匹配网站，如果多个网站可以：`
"matches": ["https://www.baidu.com/*","http://www.qq.com//*"]
`
# 四、安装
插件安装：chrome右上角“三”图标 --> 更多工具 --> 扩展程序 --> 开发者模式 --> 加载已解压到扩展程序，然后选择“百度搜索结果去广告1.0”文件夹即可。

# 五、下载
[-->GitHub地址](https://github.com/lujingtao/chrome-plugin-BaiduNoAd)