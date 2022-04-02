(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{408:function(t,e,s){"use strict";s.r(e);var a=s(56),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用hexo建立本地博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用hexo建立本地博客"}},[t._v("#")]),t._v(" 使用hexo建立本地博客")]),t._v(" "),s("h2",{attrs:{id:"全局安装hexo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局安装hexo"}},[t._v("#")]),t._v(" 全局安装hexo")]),t._v(" "),s("p",[t._v("不建议使用官网的中提供的方法，那样安装完成后执行hexo的相关命令会有问题。推荐直接终端输入一下指令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --unsafe-perm --verbose -g hexo\n")])])]),s("blockquote",[s("p",[t._v("这里注意下node的版本，本人是使用的v15.14.0版本")])]),t._v(" "),s("h2",{attrs:{id:"建站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建站"}},[t._v("#")]),t._v(" 建站")]),t._v(" "),s("blockquote",[s("p",[t._v("声明：本人建立的博客项目名称为blog\n项目存放位置是desktop")])]),t._v(" "),s("h3",{attrs:{id:"建立博客项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立博客项目"}},[t._v("#")]),t._v(" 建立博客项目")]),t._v(" "),s("p",[t._v("在桌面打开终端依次输入一下指令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("hexo inti blog\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" blog\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("p",[t._v("以上命令都已经执行完成后表示我们已经新建了一个博客。我们可以项目中启动终端，输入 "),s("code",[t._v("hexo server")]),t._v(" 来本地启动我们博客，浏览器访问生成的链接即可。项目中的各个文件说明我就不做过多赘述了，具体内容参考"),s("a",{attrs:{href:"https://hexo.io/zh-cn/docs/setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"博客主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#博客主题"}},[t._v("#")]),t._v(" 博客主题")]),t._v(" "),s("p",[t._v("个人感觉hexo默认的博客主题好丑啊，直接替换掉吧。本人使用的是next主题很简洁，大家不嫌弃的话也可以使用这个主题。\nhexo中有"),s("a",{attrs:{href:"https://hexo.io/themes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("主题库"),s("OutboundLink")],1),t._v("，大家可以进入自行下载。hexo的主题库内容都是从GitHub中过来的，如果有人不会安全上网的话可以去"),s("a",{attrs:{href:"https://gitee.com/explore",target:"_blank",rel:"noopener noreferrer"}},[t._v("码云"),s("OutboundLink")],1),t._v("上搜索看看有的话直接拉下来放在"),s("strong",[t._v("项目的themes文件夹")]),t._v("，之后修改项目中 _config.yuml 中的 "),s("strong",[t._v("theme")]),t._v(" 为对应主题名称即可。")]),t._v(" "),s("p",[t._v("next主题具体配置给大家几个参考链接进行配置吧：")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/f054333ac9e6",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo的next主题个性化教程:打造炫酷网站"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://theme-next.iissnan.com/getting-started.html#third-party-services",target:"_blank",rel:"noopener noreferrer"}},[t._v("next配置文档"),s("OutboundLink")],1)])])]),t._v(" "),s("h3",{attrs:{id:"写博客文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写博客文章"}},[t._v("#")]),t._v(" 写博客文章")]),t._v(" "),s("blockquote",[s("p",[t._v("下述内容都是按照我自己习惯来写文章的。")])]),t._v(" "),s("p",[t._v("本人喜欢用vsCode来写markdown的文章，上述项目我都是导入到vsCode中进行编辑处理的。并且vsCode自带的终端很好用，默认是mac自带的bash，可以手动选择为zsh。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("终端输入 "),s("code",[t._v('hexo n "博客文章名称"')]),t._v(" 即新建了一个文章草稿（默认新建是文章，将博客项目中 _config.yuml "),s("strong",[t._v("中的default_layout")]),t._v("从"),s("strong",[t._v("post")]),t._v("修改为"),s("strong",[t._v("draft")]),t._v(" 即可）。默认草稿中的文章是不是在博客站中展示的，所有你可以不用担心你的草稿在博客网站上被查看到。")])]),t._v(" "),s("li",[s("p",[t._v("一般我都会在草稿中将博客文章内容写好之后再通过 "),s("code",[t._v('hexo publish "博客文章名称"')]),t._v(" 将改文章进行发布。（本质就是从 _drafts 文件夹移入到_posts 文件夹中）")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("hexo deploy")]),t._v(" 可以直接发布我们博客（要通过配置_config.yml中deploy信息）。")])])]),t._v(" "),s("p",[t._v("通过步骤1，2之后能很好的控制我的博客中文章内容不出错。这个方法很不错希望大家可以借鉴。")])])}),[],!1,null,null,null);e.default=r.exports}}]);