# easi.getDeviceLocation

获取设备地址

sdk 成功返回值

```TypeScript
{
    errMsg:"getDeviceLocation:ok",
}
```

示例

```TypeScript
easi.getLocation({
  type: 'wgs84',
  success({latitude，longitude，speed，accuracy}) {

  }
})
```

## 参数

| 参数     | 描述                                               | 类型     | 值      | 是否必须 |
| -------- | -------------------------------------------------- | -------- | ------- | -------- |
| type     | 预留字段，默认为 wgs84 的 gps 坐标，其他坐标系待定 | string   | 'wgs84' | 是       |
| success  | 成功回调                                           | Function | -       | 否       |
| fail     | 失败回调                                           | Function | -       | 否       |
| complete | 完成回调                                           | Function | -       | 否       |
