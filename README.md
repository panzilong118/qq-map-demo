# 公交情报平台（新版）

## note
- api:
- 需求文档:
- 腾讯地图api: https://lbs.qq.com/index.html

### 网址
- 测试环境：https://tst.sparta.html5.qq.com/#/

## TODO LIST
- [ ] 框架搭建
- [ ] 微信登录
- [ ] 前后端分离cicd

##　开发环境
- node: v12.13.1
- npm: 6.12.1
- @vue/cli: 4.1.2
- vue: 2.6.10
- vue-router: 3.1.4
- vuex: 3.1.2

## 项目结构

### 目录结构
  ```bash
  - public
    - favicon.ico
    - index.html  # 入口html
  - src   # 业务代码
    - assets  # 图片，字体等资源
    - api # 接口交互模块
    - components  # 公共组件
    - filters   # 过滤器
    - directives  # 指令集合
    - router   # vue router
    - store   # vuex
    - views   # 视图组件

    - App.vue
    - main.js   # 入口js
    - main.styl # 全局样式
  - .env.[mode] # 环境变量
  - .gitlab-ci.yml # cicd 配置文件
  - README.MD
  ```

### 命名规范， 见[vue风格指南](https://cn.vuejs.org/v2/style-guide/)
- 文件名：
  - *.vue 结尾的文件及与其对应的 *.js *.styl 使用大驼峰　——　`HelloWorld.vue; HelloWorld.js; HelloWorld.styl`
  - 其他文件使用小驼峰 —— `main.js`
- 变量命名：小驼峰　——　`userName`

## 开发流程

### 分支管理
- master 正式环境生产分支，只允许从dev分支合并
- dev 开发与测试环境分支，只允许从feature分支合并，每次提交会发布测试环境
- feature 模块分支， 从dev切出来，开发每个模块，开发完了之后合并到dev分支，并删除feature分支。分支命名规范: feature-[featureName]-开发人员姓名-日期
- bugfix 修改bug分支，从dev切出来，修改bug，开发完了之后合并到dev分支，并删除bugfix分支。分支命名规范: bugfix-[bugName]-开发人员姓名-日期

### 代码审核
- master 分支、 dev 分支的合并 assign 给团队其他人。
- 尽量避免自己提交merge request； 自己合并

### 上线
- dev环境提测
- 测试通过合并master分支

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start (npm run serve)
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
