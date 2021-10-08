# easi.scanBarcode

扫描二维码

sdk 成功返回值

```TypeScript
{
    errMsg:"scanBarcode:ok",
    codeContent:""
}
```

示例

```TypeScript
easi.scanQRCode({
  needContent: false,
  success({ codeContent }) {

  }
})
```

## 参数

| 参数        | 描述                                                   | 类型     | 值  | 是否必须 |
| ----------- | ------------------------------------------------------ | -------- | --- | -------- |
| needContent | 是否返回扫描内容，默认 false，否则由客户端处理扫描结果 | boolean  | -   | 是       |
| success     | 成功回调                                               | Function | -   | 否       |
| fail        | 失败回调                                               | Function | -   | 否       |
| complete    | 完成回调                                               | Function | -   | 否       |
