# easi.getEASILocation

获取当前选择的配送地址或首页定位地址

sdk 成功返回值

```TypeScript
{
    errMsg:"getEASILocation:ok",
    data:{address: "", latitude:"",longitude:""},
}
```

示例

```TypeScript
easi.getEASILocation({
  type: 'wgs84',
  success(res) =>  {
  },
})
```

## 参数

| 参数     | 描述                               | 类型     | 值      | 是否必须 |
| -------- | ---------------------------------- | -------- | ------- | -------- |
| type     | 预留字段，默认为 wgs84 的 gps 坐标 | string   | "wgs84" | 是       |
| success  | 成功回调                           | Function | -       | 否       |
| fail     | 失败回调                           | Function | -       | 否       |
| complete | 完成回调                           | Function | -       | 否       |
