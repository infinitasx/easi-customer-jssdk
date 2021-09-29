# 快速开始

本节介绍如何在您的项目中使用 EASI JSSdk。

## 用法

### ES modules

```typescript
// main.ts
import { easi, delivery } from 'easi-jssdk';

// easi
easi.config({});
// delivery
delivery.config({});
```

### 浏览器

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
