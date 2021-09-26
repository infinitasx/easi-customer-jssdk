# Affix

Fix the element to a specific visible area.

```javascript
var name = '';
```

## Basic usage1

Affix is fixed at the top of the page by default.

:::demo You can set `offset` attribute to change the offset top，the default value is 0。

affix/basic

:::

## Basic usage2

Affix is fixed at the top of the page by default.

:::demo You can set `offset` attribute to change the offset top，the default value is 0。

affix/basic

:::

## Events

| Event Name | Description                       | Parameters                 |
| ---------- | --------------------------------- | -------------------------- |
| change     | triggers when fixed state changed | (value: boolean)           |
| scroll     | triggers when scrolling           | scroll top and fixed state |

## Methods

| Method | Description                 | Parameters |
| ------ | --------------------------- | ---------- |
| update | update affix state manually | —          |
