(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{445:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"打包-vue-web-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包-vue-web-项目"}},[t._v("#")]),t._v(" 打包 vue web 项目")]),t._v(" "),a("h3",{attrs:{id:"_1-修改-build-的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改-build-的配置"}},[t._v("#")]),t._v(" 1.修改 build 的配置")]),t._v(" "),a("p",[t._v("在 vue-cli(4.x 版本)下，修改 vue.config.js, 如果没有就创建一个")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选项...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("publicPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-修改路由模式为-hash-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改路由模式为-hash-模式"}},[t._v("#")]),t._v(" 2.修改路由模式为 hash 模式")]),t._v(" "),a("p",[t._v("如果使用了路由并且路由模式为 history 模式的话，需要改为 hash 模式")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("base")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-打包"}},[t._v("#")]),t._v(" 3.打包")]),t._v(" "),a("p",[t._v("运行 npm run build")]),t._v(" "),a("p",[t._v("打包后会生成 dist 目录， dist 目录之后会用到")]),t._v(" "),a("h2",{attrs:{id:"使用-hbuildx-打包成-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-hbuildx-打包成-app"}},[t._v("#")]),t._v(" 使用 hbuildx 打包成 App")]),t._v(" "),a("h3",{attrs:{id:"_1-先在-dcloud-注册个开发者账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-先在-dcloud-注册个开发者账号"}},[t._v("#")]),t._v(" 1.先在 dcloud 注册个开发者账号：")]),t._v(" "),a("p",[t._v("https://dev.dcloud.net.cn/")]),t._v(" "),a("h3",{attrs:{id:"_2-下载-hubilderx-app-开发版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载-hubilderx-app-开发版本"}},[t._v("#")]),t._v(" 2.下载 hubilderx App 开发版本")]),t._v(" "),a("p",[t._v("（https://www.dcloud.io/hbuilderx.html），打开hbuilderx，点击左下角登录账号。")]),t._v(" "),a("h3",{attrs:{id:"_3-新建-h5-app-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-新建-h5-app-项目"}},[t._v("#")]),t._v(" 3.新建 h5+ App 项目：")]),t._v(" "),a("p",[t._v("文件->新建->项目")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/01/13/oqwczpfhTgdya6G.png",alt:"image-20211022101917225"}})]),t._v(" "),a("h3",{attrs:{id:"_4-将-dist-目录和新建的项目合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-将-dist-目录和新建的项目合并"}},[t._v("#")]),t._v(" 4.将 dist 目录和新建的项目合并")]),t._v(" "),a("p",[t._v("删除 myApp 项目里面的 css、img、js 文件夹；将打包后的 vue 静态资源文件夹 dist 里面的文件拷贝进 app 项目里：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/01/13/YoX2zaU514eFJNH.png",alt:"image-20211022102250128"}})]),t._v(" "),a("h3",{attrs:{id:"_5-修改-app-的配置文件-mainfest-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-修改-app-的配置文件-mainfest-json"}},[t._v("#")]),t._v(" 5.修改 app 的配置文件 mainfest.json")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/01/13/7GqO8xNiPvyukZn.png",alt:"image-20211022102642627"}})]),t._v(" "),a("h4",{attrs:{id:"可选配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可选配置"}},[t._v("#")]),t._v(" 可选配置")]),t._v(" "),a("p",[t._v("图标配置\n安装到手机上后显示的 app 图标。可以选择一个分辨率较大的图片，然后点击自动生成所有图标并配置。")]),t._v(" "),a("p",[t._v("启动图配置\n取消勾选：启动界面显示等待雪花")]),t._v(" "),a("p",[t._v("SDK 配置\n根据 app 项目需求，选择相应的第三方 SDK（一般需要去相应的 SDK 官网申请 key）")]),t._v(" "),a("p",[t._v("模块权限配置\napp 需要用到的权限，会询问用户打开这些权限。勾选相应的权限模块即可。")]),t._v(" "),a("h3",{attrs:{id:"_6-云打包-android-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-云打包-android-app"}},[t._v("#")]),t._v(" 6.云打包 Android app")]),t._v(" "),a("p",[t._v("选中需要打包的项目名，点击工具栏的“发行”，选择”原生 App-云打包“.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/01/13/8evI6JZjgshlzVK.png",alt:"image-20211022103310806"}})]),t._v(" "),a("p",[t._v("在弹出的框中，选择”使用 DCloud 公用证书“（也可以使用自有证书，需要查看官网说明），取消勾选 ”广告联盟“ 和 ”换量联盟“，点击最底部的”打包“按钮：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/01/13/HV6UK8aszOFNuhG.png",alt:"image-20211022103342804"}})]),t._v(" "),a("p",[t._v("打包完成后打开文件位置 就可以看到生成的 apk 安卓安装文件了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/01/13/o7TwB8tWVlfYn62.png",alt:"image-20211022105826098"}})]),t._v(" "),a("h4",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("p",[t._v("因为是使用云打包需要排队，具体时间无法确定")]),t._v(" "),a("h3",{attrs:{id:"_7-调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-调试"}},[t._v("#")]),t._v(" 7.调试")]),t._v(" "),a("p",[t._v("调试需要手机打开开发者模式通过 usb 连接电脑")]),t._v(" "),a("p",[t._v("运行-》运行到手机或模拟器 -》调试控制台")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/01/13/MmCNqAe36Iiyz5H.png",alt:"image-20211022104005852"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);