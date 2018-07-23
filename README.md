# angular通信组件

用来满足简单的通信需求

-------------------

[TOC]

#安装
通过npm安装，执行以下命令
> npm install ab-message-queue --save

#使用

在模块中引入AbMessageQueueModule

```
import { AbMessageQueueModule } from 'ab-message-queue';
@NgModule({
  imports: [
	  AbMessageQueueModule
  ]
})
```

在component中注入服务
```
export class MessageTestTsComponent implements OnInit {
	constructor(private mqs: AbMessageQueueService) {}
}
```

如果component需要处理消息，则需要在onInit方法中绑定该实例，并注册消息处理函数

```
ngOnInit() {
  this.mqs.bind(this);
}

// 增加注解
@MessageHandler('yourMessageType')
handler(value: any) {
  console.log(value);
}
```

发送消息
```
  this.mqs.send('yourMessageType', 'hello');
```
