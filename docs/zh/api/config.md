# easi.config

基础配置

使用 其他 api 之前需要调用该接口

示例

```TypeScript
easi.config({
  debug: true, // 开发模式，打印日志
  jsApiList: ['chooseImage']
})
```

## 参数

| 参数      | 描述              | 类型     | 值                       | 是否必须 |
| --------- | ----------------- | -------- | ------------------------ | -------- |
| debug     | 是否启用 debug    | boolean  | true / false             | 否       |
| jsApiList | 待检测的 api 列表 | string[] | ['chooseImage',...other] | 是       |
