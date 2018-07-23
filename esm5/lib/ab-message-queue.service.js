/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { subject } from './decorator';
import * as i0 from "@angular/core";
/**
 * 消息发送服务类
 * @author xuchao
 */
var AbMessageQueueService = /** @class */ (function () {
    function AbMessageQueueService() {
    }
    /**
     * 消息发送方法
     * @param {?} type 消息类型
     * @param {?=} value 消息携带值
     * @return {?}
     */
    AbMessageQueueService.prototype.send = /**
     * 消息发送方法
     * @param {?} type 消息类型
     * @param {?=} value 消息携带值
     * @return {?}
     */
    function (type, value) {
        subject.next({ type: type, value: value });
    };
    /**
     * 将消息处理方法绑定到对应实体上
     * @param {?} context component实体
     * @return {?}
     */
    AbMessageQueueService.prototype.bind = /**
     * 将消息处理方法绑定到对应实体上
     * @param {?} context component实体
     * @return {?}
     */
    function (context) {
        var /** @type {?} */ queue = /** @type {?} */ (Reflect.getMetadata('ab:message', context));
        var /** @type {?} */ handler = Reflect.getMetadata('ab:handler', context);
        if (queue) {
            queue.subscribe(function (val) {
                var /** @type {?} */ callback = handler[val.type];
                if (callback) {
                    callback.call(context, val.value);
                }
            });
        }
    };
    AbMessageQueueService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    AbMessageQueueService.ctorParameters = function () { return []; };
    /** @nocollapse */ AbMessageQueueService.ngInjectableDef = i0.defineInjectable({ factory: function AbMessageQueueService_Factory() { return new AbMessageQueueService(); }, token: AbMessageQueueService, providedIn: "root" });
    return AbMessageQueueService;
}());
export { AbMessageQueueService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWItbWVzc2FnZS1xdWV1ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWItbWVzc2FnZS1xdWV1ZS8iLCJzb3VyY2VzIjpbImxpYi9hYi1tZXNzYWdlLXF1ZXVlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7OztJQVlwQztLQUFpQjs7Ozs7OztJQU9WLG9DQUFJOzs7Ozs7Y0FBQyxJQUFZLEVBQUUsS0FBVztRQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7O0lBT3pCLG9DQUFJOzs7OztjQUFDLE9BQVk7UUFDdEIscUJBQU0sS0FBSyxxQkFBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQW9CLENBQUEsQ0FBQztRQUM1RSxxQkFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO2dCQUNqQixxQkFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDYixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ25DO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7OztnQkE5QkosVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7Z0NBVkQ7O1NBV2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3ViamVjdCB9IGZyb20gJy4vZGVjb3JhdG9yJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiDmtojmga/lj5HpgIHmnI3liqHnsbtcbiAqIEBhdXRob3IgeHVjaGFvXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFiTWVzc2FnZVF1ZXVlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICog5raI5oGv5Y+R6YCB5pa55rOVXG4gICAqIEBwYXJhbSB0eXBlIOa2iOaBr+exu+Wei1xuICAgKiBAcGFyYW0gdmFsdWUg5raI5oGv5pC65bim5YC8XG4gICAqL1xuICBwdWJsaWMgc2VuZCh0eXBlOiBzdHJpbmcsIHZhbHVlPzogYW55KSB7XG4gICAgc3ViamVjdC5uZXh0KHsgdHlwZSwgdmFsdWUgfSk7XG4gIH1cblxuICAvKipcbiAgICog5bCG5raI5oGv5aSE55CG5pa55rOV57uR5a6a5Yiw5a+55bqU5a6e5L2T5LiKXG4gICAqIEBwYXJhbSBjb250ZXh0IGNvbXBvbmVudOWunuS9k1xuICAgKi9cbiAgcHVibGljIGJpbmQoY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgcXVldWUgPSBSZWZsZWN0LmdldE1ldGFkYXRhKCdhYjptZXNzYWdlJywgY29udGV4dCkgYXMgT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGNvbnN0IGhhbmRsZXIgPSBSZWZsZWN0LmdldE1ldGFkYXRhKCdhYjpoYW5kbGVyJywgY29udGV4dCk7XG4gICAgaWYgKHF1ZXVlKSB7XG4gICAgICBxdWV1ZS5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBoYW5kbGVyW3ZhbC50eXBlXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2suY2FsbChjb250ZXh0LCB2YWwudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==