/**
 * 消息发送服务类
 * @author xuchao
 */
export declare class AbMessageQueueService {
    constructor();
    /**
     * 消息发送方法
     * @param type 消息类型
     * @param value 消息携带值
     */
    send(type: string, value?: any): void;
    /**
     * 将消息处理方法绑定到对应实体上
     * @param context component实体
     */
    bind(context: any): void;
}
