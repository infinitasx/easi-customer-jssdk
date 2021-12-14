# easi.addToCart

唤起商品 SKU 选择界面

sdk 成功返回值

```TypeScript
{
    errMsg:"addToCart:ok",
}
```

示例

```TypeScript
easi.addToCart({
  itemId: 10000,
  openDetails: false,
  success(res) =>  {
  },
})
```

## 参数

| 参数        | 描述             | 类型     | 值    | 是否必须 |
| ----------- | ---------------- | -------- | ----- | -------- |
| itemId      | 商品 ID          | number   | -     | 是       |
| openDetails | 是否打开商品详情 | boolean  | false | 否       |
| success     | 成功回调         | Function | -     | 否       |
| fail        | 失败回调         | Function | -     | 否       |
| complete    | 完成回调         | Function | -     | 否       |
