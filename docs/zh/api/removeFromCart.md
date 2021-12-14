# easi.removeFromCart

从全局购物车中移除商品

sdk 成功返回值

```TypeScript
{
    errMsg:"removeFromCart:ok",
}
```

示例

```TypeScript
easi.removeFromCart({
  itemId: 10000,
  success(res) =>  {
  },
})
```

## 参数

| 参数     | 描述     | 类型     | 值  | 是否必须 |
| -------- | -------- | -------- | --- | -------- |
| itemId   | 商品 ID  | number   | -   | 是       |
| success  | 成功回调 | Function | -   | 否       |
| fail     | 失败回调 | Function | -   | 否       |
| complete | 完成回调 | Function | -   | 否       |
