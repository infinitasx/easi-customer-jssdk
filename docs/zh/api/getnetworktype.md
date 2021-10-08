# easi.getNetworkType

获取网络类型

sdk 成功返回值

```TypeScript
{
    errMsg:"ready:ok",
    networkType："",
    dBm: -70,
}
```

示例

```TypeScript
easi.getNetworkType({
  success({ networkType, errMsg }) => {
    console.log(networkType, errMsg)
  },
  fail({ errMsg }) => {},
  complete() => {},
})
```

## 参数

| 参数     | 描述     | 类型     | 值  | 是否必须 |
| -------- | -------- | -------- | --- | -------- |
| success  | 成功回调 | Function | -   | 否       |
| fail     | 失败回调 | Function | -   | 否       |
| complete | 完成回调 | Function | -   | 否       |
