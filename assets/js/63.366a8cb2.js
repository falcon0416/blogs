(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{461:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://hexo.io/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo 官方文档"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("p",[a("strong",[t._v("编辑好 md 文档先在"),a("code",[t._v("hexo server")]),t._v(" 运行一下在提交 github")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Markdown 使用时（） "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" 都需要转义 否者会报错\n")])])]),a("p",[a("strong",[t._v("每次提交 github 自动构建前，要重启一下 hexo server 然后看看没有报错 ，再进行提交")])]),t._v(" "),a("h2",{attrs:{id:"next-主题注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-主题注意事项"}},[t._v("#")]),t._v(" next 主题注意事项")]),t._v(" "),a("p",[t._v("canvas_ribbon 和 tree 需要配合在 CDN 中添加 git 默认不上传 lib 下的文件")]),t._v(" "),a("h2",{attrs:{id:"关于报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于报错"}},[t._v("#")]),t._v(" 关于报错")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/01/13/TKmqzHNUjtB581A.png",alt:"image-20200725160508488"}})]),t._v(" "),a("p",[t._v("没有任何提示 哪个文件，挨个改动回退试试，原来是因为"),a("code",[t._v("_config.yml")]),t._v("这里直接写中文是不行的，中文需要引号包裹")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("social")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 微博: http://weibo.com/your-user-name  这里不能使用中文  确使用方式如下  地址后是图标")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"微博"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//weibo.com/your"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" fab fa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("weibo\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"知乎"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//www.zhihu.com/people/your"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" fab fa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("zhihu\n")])])]),a("h2",{attrs:{id:"next-主题文章老是自动滚到底部评论区的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-主题文章老是自动滚到底部评论区的问题"}},[t._v("#")]),t._v(" Next 主题文章老是自动滚到底部评论区的问题")]),t._v(" "),a("p",[t._v("原因 :\n设置了 utterances")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("utterances")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("p",[t._v("解决：\n取消 utterances")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("utterances")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])]),a("h2",{attrs:{id:"hexo-4-2-1-升级至-6-2-0-next-7-8-0-升级至-8-12-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hexo-4-2-1-升级至-6-2-0-next-7-8-0-升级至-8-12-1"}},[t._v("#")]),t._v(" hexo 4.2.1 升级至 6.2.0 Next 7.8.0 升级至 8.12.1")]),t._v(" "),a("h3",{attrs:{id:"hexo-升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hexo-升级"}},[t._v("#")]),t._v(" hexo 升级")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" npm-check "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查之前安装的插件，都有哪些是可以升级的")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd hexo 目录")]),t._v("\nnpm-check         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查那些依赖能够升级 并把 package.json 版本号升级到最新")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" update        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装升级")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"next-升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-升级"}},[t._v("#")]),t._v(" Next 升级")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://theme-next.js.org/docs/getting-started/upgrade.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("升级官方文档"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd hexo 目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i hexo-theme-next\n\n")])])]),a("h4",{attrs:{id:"修改配置文件位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件位置"}},[t._v("#")]),t._v(" 修改配置文件位置")]),t._v(" "),a("p",[t._v("将"),a("code",[t._v("themes/next/_config.yml")]),t._v(" 复制到 "),a("code",[t._v("hexo目录/_config.next.yml")])]),t._v(" "),a("h4",{attrs:{id:"备份原主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份原主题"}},[t._v("#")]),t._v(" 备份原主题")]),t._v(" "),a("p",[t._v("将 "),a("code",[t._v("themes/next")]),t._v(" 改为 "),a("code",[t._v("themes/next-old")])]),t._v(" "),a("h4",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),a("p",[t._v("运行"),a("code",[t._v("hexo clean")]),t._v("并"),a("code",[t._v("hexo s")]),t._v("检查站点是否正常工作")])])}),[],!1,null,null,null);a.default=n.exports}}]);