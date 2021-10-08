# easi.previewImage

预览图片

sdk 成功返回值

```TypeScript
{
    errMsg:"getLocalImageData:ok",
}
```

示例

```TypeScript
easi.previewImage({
  current: '',
  urls: [],
})
```

## 参数

| 参数     | 描述                         | 类型     | 值  | 是否必须 |
| -------- | ---------------------------- | -------- | --- | -------- |
| current  | 当前显示图片的 http 链接     | string   | -   | 是       |
| urls     | 需要预览的图片 http 链接列表 | string[] | -   | 是       |
| success  | 成功回调                     | Function | -   | 否       |
| fail     | 失败回调                     | Function | -   | 否       |
| complete | 完成回调                     | Function | -   | 否       |
