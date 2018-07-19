# mPlayer

> m端直播播放器

## 外部调用方法

### 1. 发送弹幕

#### 示例代码：

```
var msg = {
  content:'小花狗真好看',
  username:'总有刁民想害朕',
  type: 0,
  usercolor: 'red'
};

window.pushDanmu(msg);
  
```

#### 参数说明：

| 参数         | 说明             | 类型            | 可选值                |  默认值    | 是否必须 |
|-------------|------------------|----------------|----------------------|-----------|---------|
| content     | 弹幕内容          | string         |          —           |    —      |   是    |
| type        | 当前业务线标示     | number         |  0:系统消息, 1:用户弹幕 |    -      |   是    |
| username     | 发送弹幕的用户名   | string         |         —            |     —     |   是    |
| usercolor    | 用户名的颜色      | string         |     'red', 'green'   |   'red'   |   否    |



