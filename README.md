# brief-multi-page-frame

## 多页面配置
　　此框架主要用来集成多个项目，各个项目独立运行和打包，一个项目（端）就是一个文件夹。本框架主要搭建了两个端的项目，政务端（gov）和企业端（ent）。
　　配置过程如下：
1. 在根目录创建进程文件，规定当前进程对象；（eg:.env.govDev(开发配置)，.env.gov(线上配置)）
2. 在根目录的 projectsConfig.js 文件，规定运行打包配置，配置中用到的入口、模板等文件自行创建；（具体内容查看 projectsConfig.js 文件）
3. 在 package.json 文件创建 script 脚本命令，包括启动命令和打包命令 (eg:"govDev":"vue-cli-service serve --mode govDev")

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run govDev // 政务端运行
npm run entDev // 企业端运行
```

### Compiles and minifies for production
```
npm run gov // 政务端打包
npm run ent // 企业端打包
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
