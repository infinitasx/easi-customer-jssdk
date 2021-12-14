# 变更日志

本项目的所有更改都将记录在此文件中。

本文件格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/) ，并且遵循 [Semantic Versioning](https://semver.org/spec/v2.0.0.html) 。

## [2.0.0] - 2021-09-02

### Added

- 支持外卖配送
- 增加基础接口
- 增加使用文档 website
- 兼容 1.x
- 添加 1.x 和 2.x 的 demo 界面

### Changed

- 支持 ts

### Removed

- 移除老的 api: scan、user、wx_share、login、addCart、showCart

### Changed

- 修改打包配置支持外卖和配送
- 重构 sdk

## [1.3.3] - 2021-08-6

### Fixed

- 修复代码异常

## [1.3.2] - 2021-06-26

### Added

- 新增添加购物车
- 新增添加显示全局购物车

## [1.3.1] - 2021-06-25

### Added

- 新增唤起登录的 Bridge
- 支持系统版本低于 Bridge 要求版本的提示

### Chore

- 重构部分源代码
- demo.html 添加测试按钮

### Deprecated

- isIos、isAndroid、isEasi、isMalaysia 已支持属性的方式访问，后期 isIos()、isAndroid()、isEasi()、isMalaysia()方法会移除

## [1.3.0] - 2021-05-21

### Changed

- 修改 README.md

### Chore

- 优化源代码

## [1.2.0] - 2021-05-20

### Added

- 发布时生成 README.html

## [1.1.1] - 2021-05-20

### Added

- 接入 DevOps
- 支持发布到 EASI CDN
