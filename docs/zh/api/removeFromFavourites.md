# easi.removeFromFavourites

店铺移除收藏夹

sdk 成功返回值

```TypeScript
{
    errMsg:"removeFromFavourites:ok",
}
```

示例

```TypeScript
easi.removeFromFavourites({
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
