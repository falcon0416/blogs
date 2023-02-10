(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{503:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"使用-vscode-直接调试-js-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-vscode-直接调试-js-代码"}},[t._v("#")]),t._v(" 使用 vscode 直接调试 js 代码")]),t._v(" "),s("h3",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),s("ul",[s("li",[t._v("将当前标签页设置为需要调试的 js")]),t._v(" "),s("li",[t._v("将需要打断点的地方标上小红点")]),t._v(" "),s("li",[t._v("左侧工具栏点击小虫子（Run and Debug）")]),t._v(" "),s("li",[t._v("点击运行和调试")]),t._v(" "),s("li",[t._v("选择 nodejs 作为调试工具")]),t._v(" "),s("li",[t._v("开始调试")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2023/01/13/aPTpzhvdbIjl9mU.png",alt:"image-20210309103224511"}})]),t._v(" "),s("p",[t._v("如果只调试 js 代码的话，选择 nodejs 即可")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2023/01/13/9idBpr5efJH7MNY.png",alt:"image-20210309103344902"}})]),t._v(" "),s("h3",{attrs:{id:"调试界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试界面"}},[t._v("#")]),t._v(" 调试界面")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2023/01/13/bkAqIP4lVm8W9JK.png",alt:"image-20210309103733550"}})]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("使用 vscode 调试非常方便，比直接在浏览器中调式体验更好，可以边调试边改代码，很爽的体验；")]),t._v(" "),s("h2",{attrs:{id:"launch-和-tasks-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#launch-和-tasks-的使用"}},[t._v("#")]),t._v(" launch 和 tasks 的使用")]),t._v(" "),s("h3",{attrs:{id:"launch-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#launch-的使用"}},[t._v("#")]),t._v(" launch 的使用")]),t._v(" "),s("p",[t._v("待完成")]),t._v(" "),s("h3",{attrs:{id:"tasks-任务-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tasks-任务-的使用"}},[t._v("#")]),t._v(" tasks（任务）的使用")]),t._v(" "),s("p",[t._v("官网：https://code.visualstudio.com/docs/editor/tasks#_variable-substitution")]),t._v(" "),s("h3",{attrs:{id:"预定义变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预定义变量"}},[t._v("#")]),t._v(" 预定义变量")]),t._v(" "),s("p",[t._v("官网：https://code.visualstudio.com/docs/editor/variables-reference#_predefined-variables")]),t._v(" "),s("p",[t._v("知乎：https://zhuanlan.zhihu.com/p/92175757")]),t._v(" "),s("h3",{attrs:{id:"tasks-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tasks-json"}},[t._v("#")]),t._v(" tasks.json")]),t._v(" "),s("blockquote",[s("p",[t._v("具体的配置文件")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See https://go.microsoft.com/fwlink/?LinkId=733558")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for the documentation about the tasks.json format")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cwd"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${fileDirname}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义执行环境")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tasks"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shell"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ruler  -p  ${fileBasename}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"problemMatcher"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fileLocation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"relative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${fileDirname}"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pattern"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提示文本进行分组 下面是具体的提示文本")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// s920.rule:652:1: warning 规则Server,"软件预装","os"已在647行定义')]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"regexp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error)\\\\s+(.*)$"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"file"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件名所在组")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"line"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码所在行")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"column"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码所在列")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"severity"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// warning 还是 error")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提示文本")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presentation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"echo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reveal"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"focus"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"panel"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shared"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"showReuseMessage"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clear"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"group"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            ...\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("p",[t._v("使用 launch 时.vscode 目录一定要在所打开文件夹的根节点下")]),t._v(" "),s("p",[t._v("否则点击运行启动调试则只能调试当天打开的 tab 标签页")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2023/01/13/cWJlO8KUPwpND62.png",alt:"image-20210723134611394"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);