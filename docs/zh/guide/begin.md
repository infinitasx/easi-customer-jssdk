# 快速开始

本节介绍如何在您的项目中使用 EASI JSSdk。

## ES modules

```typescript
// main.ts
import { easi, delivery } from 'easi-jssdk';

// easi
easi.config({});
// delivery
delivery.config({});
```

## 浏览器

```html
<html>
  <head>
    <script src="https://static.easiglobal.com/easi-jssdk/2.0.0/easi/index.min.js"></script>
    <script src="https://static.easiglobal.com/easi-jssdk/2.0.0/delivery/index.min.js"></script>
  </head>
  <body>
    <script>
      // easi
      easi.config({});
      // delivery
      delivery.config({});
    </script>
  </body>
</html>
```

## 使用示例

```js
easi.getXXX({
  param1: 1,
  param2: 'string',
  param3: true,
  param4: {},
  param5: [],

  // 通用参数，回调函数
  success(res) => {
    // 处理成功情况
    const value1 = res.value1
    console.log(value1)
  },
  fail({ errMsg }) => {
    // 处理失败情况
  },
  complete() => {
    // 处理所有情况
  },
  cancel() => {
    // 处理用户取消情况
  },
})
```

## sdk 响应示例

```js
// 成功响应
{
  errMsg:"config:ok",
  checkResult:{chooseImage: true, copy: false},
  langage:""
}

// 失败响应
{
  errMsg:"config:fail,失败原因"
}

// 取消响应
{
  errMsg:"config:cancel,取消原因"
}
```
