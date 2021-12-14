# easi.openAppShop

打开商家详情

sdk 成功返回值

```TypeScript
{
    errMsg:"openAppShop:ok",
}
```

示例

```TypeScript
easi.openAppShop({
  shopId: 2,
  success(res) =>  {
  },
})
```

## 参数

| 参数     | 描述     | 类型     | 值  | 是否必须 |
| -------- | -------- | -------- | --- | -------- |
| shopId   | 商家 ID  | number   | -   | 是       |
| success  | 成功回调 | Function | -   | 否       |
| fail     | 失败回调 | Function | -   | 否       |
| complete | 完成回调 | Function | -   | 否       |
