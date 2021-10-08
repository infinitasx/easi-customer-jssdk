# easi.openLocation

打开第三方地图

sdk 成功返回值

```TypeScript
{
    errMsg:"openLocation:ok",
    latitude:"", // 纬度，浮点数，范围为90 ~ -90
    longitude:"", // 经度，浮点数，范围为180 ~ -180
    speed:"", // 速度，m/s
    accuracy:"" // 位置精度
}
```

示例

```TypeScript
easi.openLocation({
  latitude: 0,
  longitude: 0,
  zoom: 1,
})
```

## 参数

| 参数      | 描述                                       | 类型     | 值  | 是否必须 |
| --------- | ------------------------------------------ | -------- | --- | -------- |
| latitude  | 纬度，浮点数，范围为 90 ~ -90              | number   | -   | 是       |
| longitude | 经度，浮点数，范围为 180 ~ -180            | number   | -   | 是       |
| zoom      | 地图缩放级别，整型值，0~18 for Google Maps | number   | -   | 是       |
| success   | 成功回调                                   | Function | -   | 否       |
| fail      | 失败回调                                   | Function | -   | 否       |
| complete  | 完成回调                                   | Function | -   | 否       |
