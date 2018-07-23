import 'reflect-metadata';
import { Subject } from 'rxjs';
import { Injectable, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ subject = new Subject();
/**
 *
 * @param type 消息类型，多个类型以,分隔
 * \@example
 * \@MessageHandler('test')
 *      handlerTest(value: any) {
 *        // ...
 *      }
 */
var /** @type {?} */ MessageHandler = function (type) {
    return function (target, key, descriptor) {
        if (/(\w+\,)*\w+/.test(type)) {
            var /** @type {?} */ types = type.split(',');
            var /** @type {?} */ map_1 = Reflect.getMetadata('ab:handler', target);
            if (!map_1) {
                map_1 = new Map();
            }
            types.forEach(function (t) {
                map_1[t] = descriptor.value;
            });
            Reflect.defineMetadata('ab:message', subject.asObservable(), target);
            Reflect.defineMetadata('ab:handler', map_1, target);
        }
        else {
            throw new Error('类型仅限字母数字下划线');
        }
    };
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
    /** @nocollapse */ AbMessageQueueService.ngInjectableDef = defineInjectable({ factory: function AbMessageQueueService_Factory() { return new AbMessageQueueService(); }, token: AbMessageQueueService, providedIn: "root" });
    return AbMessageQueueService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AbMessageQueueModule = /** @class */ (function () {
    function AbMessageQueueModule() {
    }
    /**
     * @return {?}
     */
    AbMessageQueueModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AbMessageQueueModule,
            providers: [AbMessageQueueService]
        };
    };
    AbMessageQueueModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [],
                    exports: []
                },] },
    ];
    return AbMessageQueueModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AbMessageQueueService, AbMessageQueueModule, subject, MessageHandler };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWItbWVzc2FnZS1xdWV1ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYWItbWVzc2FnZS1xdWV1ZS9saWIvZGVjb3JhdG9yLnRzIiwibmc6Ly9hYi1tZXNzYWdlLXF1ZXVlL2xpYi9hYi1tZXNzYWdlLXF1ZXVlLnNlcnZpY2UudHMiLCJuZzovL2FiLW1lc3NhZ2UtcXVldWUvbGliL2FiLW1lc3NhZ2UtcXVldWUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gdHlwZSDDpsK2wojDpsKBwq/Dp8KxwrvDpcKewovDr8K8wozDpcKkwprDpMK4wqrDp8KxwrvDpcKewovDpMK7wqUsw6XCiMKGw6nCmsKUXG4gKiBAZXhhbXBsZVxuICogICAgICBATWVzc2FnZUhhbmRsZXIoJ3Rlc3QnKVxuICogICAgICBoYW5kbGVyVGVzdCh2YWx1ZTogYW55KSB7XG4gKiAgICAgICAgLy8gLi4uXG4gKiAgICAgIH1cbiAqL1xuZXhwb3J0IGNvbnN0IE1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKHR5cGU6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KSB7XG4gICAgaWYgKC8oXFx3K1xcLCkqXFx3Ky8udGVzdCh0eXBlKSkge1xuICAgICAgY29uc3QgdHlwZXMgPSB0eXBlLnNwbGl0KCcsJyk7XG4gICAgICBsZXQgbWFwID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnYWI6aGFuZGxlcicsIHRhcmdldCk7XG4gICAgICBpZiAoIW1hcCkge1xuICAgICAgICBtYXAgPSBuZXcgTWFwPFN0cmluZywgRnVuY3Rpb24+KCk7XG4gICAgICB9XG4gICAgICB0eXBlcy5mb3JFYWNoKCh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgbWFwW3RdID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSgnYWI6bWVzc2FnZScsIHN1YmplY3QuYXNPYnNlcnZhYmxlKCksIHRhcmdldCk7XG4gICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKCdhYjpoYW5kbGVyJywgbWFwLCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ8OnwrHCu8Olwp7Ci8OkwrvChcOpwpnCkMOlwq3Cl8Omwq/CjcOmwpXCsMOlwq3Cl8OkwrjCi8OlwojCksOnwrrCvycpO1xuICAgIH1cbiAgfTtcbn07XG5cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN1YmplY3QgfSBmcm9tICcuL2RlY29yYXRvcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogw6bCtsKIw6bCgcKvw6XCj8KRw6nCgMKBw6bCnMKNw6XCisKhw6fCscK7XG4gKiBAYXV0aG9yIHh1Y2hhb1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBYk1lc3NhZ2VRdWV1ZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIMOmwrbCiMOmwoHCr8Olwo/CkcOpwoDCgcOmwpbCucOmwrPClVxuICAgKiBAcGFyYW0gdHlwZSDDpsK2wojDpsKBwq/Dp8KxwrvDpcKewotcbiAgICogQHBhcmFtIHZhbHVlIMOmwrbCiMOmwoHCr8OmwpDCusOlwrjCpsOlwoDCvFxuICAgKi9cbiAgcHVibGljIHNlbmQodHlwZTogc3RyaW5nLCB2YWx1ZT86IGFueSkge1xuICAgIHN1YmplY3QubmV4dCh7IHR5cGUsIHZhbHVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOlwrDChsOmwrbCiMOmwoHCr8OlwqTChMOnwpDChsOmwpbCucOmwrPClcOnwrvCkcOlwq7CmsOlwojCsMOlwq/CucOlwrrClMOlwq7CnsOkwr3Ck8OkwrjCilxuICAgKiBAcGFyYW0gY29udGV4dCBjb21wb25lbnTDpcKuwp7DpMK9wpNcbiAgICovXG4gIHB1YmxpYyBiaW5kKGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IHF1ZXVlID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnYWI6bWVzc2FnZScsIGNvbnRleHQpIGFzIE9ic2VydmFibGU8YW55PjtcbiAgICBjb25zdCBoYW5kbGVyID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnYWI6aGFuZGxlcicsIGNvbnRleHQpO1xuICAgIGlmIChxdWV1ZSkge1xuICAgICAgcXVldWUuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gaGFuZGxlclt2YWwudHlwZV07XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY29udGV4dCwgdmFsLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJNZXNzYWdlUXVldWVTZXJ2aWNlIH0gZnJvbSAnLi9hYi1tZXNzYWdlLXF1ZXVlLnNlcnZpY2UnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBYk1lc3NhZ2VRdWV1ZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWJNZXNzYWdlUXVldWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtBYk1lc3NhZ2VRdWV1ZVNlcnZpY2VdXG4gICAgfTtc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