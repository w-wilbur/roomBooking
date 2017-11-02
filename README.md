# roomBooking
This is a system of booking room.

# 功能需求

一个会议室预定系统。
包含如下功能：

* 公司内部用户注册（激活）。
* 用户登录。
* 预定：时间、参会人（下拉选择）、说明。
* 取消预定。
* 个人页面。
* 时间、人员冲突检查。
* 有一个管理员可以管理会议室列表，调整他人创建的会议计划。

# 技术选型

* 前端使用Vue.js(2.5) [webpack + vue.js + vuex + vue-router]
* UI库采用ElementUI 2.0。
* 前后端分离，通过Resutful API通信。
* 后端采用ExpressJS。
* 数据库采用MongoDB。[Package](https://www.npmjs.com/package/mongoose)。
* [认证模块](http://www.passportjs.org/docs/username-password)。

# 部署方式

* docker-compose。
* 虚拟机安装Ubuntu。
* Markdown写技术文档。
* github.com用[git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)。


# stage 2:

* TS
* WebSocket / GraphQL
