# 兼容

为了处理新老客户端混用 jssdk 的问题，目前在 jssdk 内部已做了兼容,在使用新老 api 之前需要先判断是否存在

## ES modules

老写法

```js
import { Easi } from 'easi-jssdk';
// 老api
const easi = new Easi();
easi.addCart(
  result => {
    if (result.code === 0) {
      // 调用成功
      console.log(result.data);
    }
  },
  {
    itemId: 1234,
    openDetails: true,
  },
);
```

新写法

```js
import { easi } from 'easi-jssdk';
// 老api
easi.addCart &&
  easi.addCart(
    result => {
      if (result.code === 0) {
        // 调用成功
        console.log(result.data);
      }
    },
    {
      itemId: 1234,
      openDetails: true,
    },
  );

// 新api
easi.getXXX && easi.getXXX({
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

## 浏览器

```html
<html>
  <head>
    <script src="https://static.easiglobal.com/easi-jssdk/2.0.0/easi/index.min.js"></script>
  </head>
  <body>
    <script>
      // easi
      easi.config && easi.config({});

      easi.addCart &&
        easi.addCart(
          result => {
            if (result.code === 0) {
              // 调用成功
              console.log(result.data);
            }
          },
          {
            itemId: 1234,
            openDetails: true,
          },
        );
    </script>
  </body>
</html>
```

老版本 api[链接](https://github.com/infinitasx/easi-customer-jssdk/edit/master/README.md)
