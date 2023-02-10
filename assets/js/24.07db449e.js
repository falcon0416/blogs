(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{430:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"自动部署-github-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动部署-github-actions"}},[t._v("#")]),t._v(" 自动部署：GitHub Actions")]),t._v(" "),s("p",[t._v("阮一峰关于 GitHub Actions 的教程： "),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("注意：因为部署插件不断更新需要根据新的插件改相应配置")])]),t._v(" "),s("h3",{attrs:{id:"生成-token-秘钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-token-秘钥"}},[t._v("#")]),t._v(" 生成 "),s("strong",[t._v("token")]),t._v(" 秘钥")]),t._v(" "),s("blockquote",[s("p",[t._v("官网："),s("a",{attrs:{href:"https://docs.github.com/en/actions/reference/encrypted-secrets",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.github.com/en/actions/reference/encrypted-secrets"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("注意：github-pages-deploy-action V4 开始不需要添加 token")])]),t._v(" "),s("h3",{attrs:{id:"添加配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加配置文件"}},[t._v("#")]),t._v(" 添加配置文件")]),t._v(" "),s("ul",[s("li",[t._v("在项目目录下新建"),s("code",[t._v(".github\\workflows")])]),t._v(" "),s("li",[t._v("随便命名一个 yml 配置文件 我的命名"),s("code",[t._v("main.yml")])]),t._v(" "),s("li",[t._v("yml文件 具体配置填写见 "),s("a",{attrs:{href:"https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1),t._v(" 或下面示例")])]),t._v(" "),s("h3",{attrs:{id:"填写配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#填写配置"}},[t._v("#")]),t._v(" 填写配置")]),t._v(" "),s("h4",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作流名称，不设置的话默认取配置文件名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build and Deploy\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定触发 workflow 的条件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定触发事件时，可以限定分支或标签")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前是 只有 branches 分支上触发 push 事件时才执行工作流任务")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" main\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作流执行的一个或多个任务")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务名称")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务运行的容器类型（虚拟机环境）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务执行的步骤")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 步骤名称")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout 🛎️    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取代码")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用的操作 actions，可以使用公共仓库，本地仓库，别人的仓库的action")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将代码拷贝到虚机中")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 nodejs 版本")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SetNodeVersion\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'14'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nodejs 版本检查")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NodeCheck\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install and Build 🔧 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          npm ci\n          npm run build")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建发布 Github pages")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy 🚀\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用github-pages-deploy-action: https://github.com/JamesIves/github-pages-deploy-action/tree/master")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@v4.2.2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 存储库中要部署的文件夹。")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该步骤会将项目中 FOLDER 指定文件夹下的文件推送到 BRANCH 分支，作为Github Pages 部署的内容。")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The branch the action should deploy to.")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("folder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dist "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The folder the action should deploy.")]),t._v("\n")])])]),s("h4",{attrs:{id:"关于-github-pages-deploy-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于-github-pages-deploy-action"}},[t._v("#")]),t._v(" 关于 github-pages-deploy-action")]),t._v(" "),s("p",[t._v("注意：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("JamesIves/github-pages-deploy-action@master 无法使用，继续使用会报错")])]),t._v(" "),s("li",[s("p",[t._v("github-pages-deploy-action V4 开始不需要添加 token ，如果添加会报 128 错误")])]),t._v(" "),s("li",[s("p",[t._v("github 关于 128 错误的解答："),s("a",{attrs:{href:"https://github.com/JamesIves/github-pages-deploy-action/issues/624",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/JamesIves/github-pages-deploy-action/issues/624"),s("OutboundLink")],1)])])]),t._v(" "),s("h5",{attrs:{id:"github-pages-deploy-action-v2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages-deploy-action-v2"}},[t._v("#")]),t._v(" github-pages-deploy-action@v2")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GitHub Actions Build and Deploy Demo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build and Deploy\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@releases/v2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACCESS_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BASE_BRANCH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BRANCH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FOLDER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" public\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BUILD_SCRIPT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" npm run build\n")])])]),s("h5",{attrs:{id:"github-pages-deploy-action-v4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages-deploy-action-v4"}},[t._v("#")]),t._v(" github-pages-deploy-action@v4")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GitHub Actions Build and Deploy Demo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install and Build 🔧\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          npm install\n          npm run build")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# JamesIves/github-pages-deploy-action@4.1.1 not need token")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@4.1.1\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("folder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" public\n")])])]),s("h2",{attrs:{id:"github-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[t._v("#")]),t._v(" GitHub Pages")]),t._v(" "),s("h3",{attrs:{id:"创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[t._v("#")]),t._v(" 创建")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"常用-github-actions-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用-github-actions-配置"}},[t._v("#")]),t._v(" 常用 GitHub-Actions 配置")]),t._v(" "),s("h3",{attrs:{id:"通过-ssh-命令-连接远程服务器并部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-ssh-命令-连接远程服务器并部署"}},[t._v("#")]),t._v(" 通过 ssh 命令 连接远程服务器并部署")]),t._v(" "),s("p",[t._v("use :"),s("a",{attrs:{href:"https://github.com/marketplace/actions/ssh-remote-commands",target:"_blank",rel:"noopener noreferrer"}},[t._v("appleboy/ssh-action@master"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is a basic workflow to help you get started with Actions")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CICD\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Controls when the workflow will run")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Triggers the workflow on push or pull request events but only for the master branch")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Allows you to run this workflow manually from the Actions tab")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflow_dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A workflow run is made up of one or more jobs that can run sequentially or in parallel")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# This workflow contains a single job called "build"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cicd_job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The type of runner that the job will run on")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Steps represent a sequence of tasks that will be executed as part of the job")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v3\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ssh link remote server and executing script")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" executing remote ssh commands using password\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" appleboy/ssh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@master\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("WELCOME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executing remote ssh commands using password"')]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SERVER_HOME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node-express-server"')]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.DC_HOST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.DC_USER "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.DC_PASS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("envs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" WELCOME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("SERVER_HOME\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n            echo $WELCOME \n            echo whoami \n            whoami  \n            echo git version\n            git  --version \n            echo node version\n            node -v\n            echo npm version\n            npm -v\n            cd ~ \n            echo ~ ls\n            ls -la \n            echo $SERVER_HOME ls\n            cd $SERVER_HOME\n            ls -la \n            npm run deploy  ")]),t._v("\n         \n")])])]),s("h4",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("使用 appleboy/ssh-action@master 有可能会报 npm 或 node 命令找不到的情况\n最好在 usr/bin 建立一个"),s("a",{attrs:{href:"https://blog.bitbw.top/Nodejs/Linux%E7%B3%BB%E7%BB%9F%E5%AE%89%E8%A3%85Nodejs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node相关命令的软连接"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);