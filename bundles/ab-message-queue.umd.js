(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('reflect-metadata'), require('rxjs'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ab-message-queue', ['exports', 'reflect-metadata', 'rxjs', '@angular/core'], factory) :
    (factory((global['ab-message-queue'] = {}),null,global.rxjs,global.ng.core));
}(this, (function (exports,reflectMetadata,rxjs,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ subject = new rxjs.Subject();
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
    var AbMessageQueueService = (function () {
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
                var /** @type {?} */ queue = (Reflect.getMetadata('ab:message', context));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        AbMessageQueueService.ctorParameters = function () { return []; };
        /** @nocollapse */ AbMessageQueueService.ngInjectableDef = i0.defineInjectable({ factory: function AbMessageQueueService_Factory() { return new AbMessageQueueService(); }, token: AbMessageQueueService, providedIn: "root" });
        return AbMessageQueueService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AbMessageQueueModule = (function () {
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
            { type: i0.NgModule, args: [{
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

    exports.AbMessageQueueService = AbMessageQueueService;
    exports.AbMessageQueueModule = AbMessageQueueModule;
    exports.subject = subject;
    exports.MessageHandler = MessageHandler;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWItbWVzc2FnZS1xdWV1ZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FiLW1lc3NhZ2UtcXVldWUvbGliL2RlY29yYXRvci50cyIsIm5nOi8vYWItbWVzc2FnZS1xdWV1ZS9saWIvYWItbWVzc2FnZS1xdWV1ZS5zZXJ2aWNlLnRzIiwibmc6Ly9hYi1tZXNzYWdlLXF1ZXVlL2xpYi9hYi1tZXNzYWdlLXF1ZXVlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHR5cGUgw6bCtsKIw6bCgcKvw6fCscK7w6XCnsKLw6/CvMKMw6XCpMKaw6TCuMKqw6fCscK7w6XCnsKLw6TCu8KlLMOlwojChsOpwprClFxuICogQGV4YW1wbGVcbiAqICAgICAgQE1lc3NhZ2VIYW5kbGVyKCd0ZXN0JylcbiAqICAgICAgaGFuZGxlclRlc3QodmFsdWU6IGFueSkge1xuICogICAgICAgIC8vIC4uLlxuICogICAgICB9XG4gKi9cbmV4cG9ydCBjb25zdCBNZXNzYWdlSGFuZGxlciA9IGZ1bmN0aW9uICh0eXBlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IGFueSkge1xuICAgIGlmICgvKFxcdytcXCwpKlxcdysvLnRlc3QodHlwZSkpIHtcbiAgICAgIGNvbnN0IHR5cGVzID0gdHlwZS5zcGxpdCgnLCcpO1xuICAgICAgbGV0IG1hcCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2FiOmhhbmRsZXInLCB0YXJnZXQpO1xuICAgICAgaWYgKCFtYXApIHtcbiAgICAgICAgbWFwID0gbmV3IE1hcDxTdHJpbmcsIEZ1bmN0aW9uPigpO1xuICAgICAgfVxuICAgICAgdHlwZXMuZm9yRWFjaCgodDogc3RyaW5nKSA9PiB7XG4gICAgICAgIG1hcFt0XSA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICB9KTtcbiAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoJ2FiOm1lc3NhZ2UnLCBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLCB0YXJnZXQpO1xuICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSgnYWI6aGFuZGxlcicsIG1hcCwgdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfDp8KxwrvDpcKewovDpMK7woXDqcKZwpDDpcKtwpfDpsKvwo3DpsKVwrDDpcKtwpfDpMK4wovDpcKIwpLDp8K6wr8nKTtcbiAgICB9XG4gIH07XG59O1xuXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzdWJqZWN0IH0gZnJvbSAnLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIMOmwrbCiMOmwoHCr8Olwo/CkcOpwoDCgcOmwpzCjcOlworCocOnwrHCu1xuICogQGF1dGhvciB4dWNoYW9cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWJNZXNzYWdlUXVldWVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiDDpsK2wojDpsKBwq/DpcKPwpHDqcKAwoHDpsKWwrnDpsKzwpVcbiAgICogQHBhcmFtIHR5cGUgw6bCtsKIw6bCgcKvw6fCscK7w6XCnsKLXG4gICAqIEBwYXJhbSB2YWx1ZSDDpsK2wojDpsKBwq/DpsKQwrrDpcK4wqbDpcKAwrxcbiAgICovXG4gIHB1YmxpYyBzZW5kKHR5cGU6IHN0cmluZywgdmFsdWU/OiBhbnkpIHtcbiAgICBzdWJqZWN0Lm5leHQoeyB0eXBlLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcKwwobDpsK2wojDpsKBwq/DpcKkwoTDp8KQwobDpsKWwrnDpsKzwpXDp8K7wpHDpcKuwprDpcKIwrDDpcKvwrnDpcK6wpTDpcKuwp7DpMK9wpPDpMK4wopcbiAgICogQHBhcmFtIGNvbnRleHQgY29tcG9uZW50w6XCrsKew6TCvcKTXG4gICAqL1xuICBwdWJsaWMgYmluZChjb250ZXh0OiBhbnkpIHtcbiAgICBjb25zdCBxdWV1ZSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2FiOm1lc3NhZ2UnLCBjb250ZXh0KSBhcyBPYnNlcnZhYmxlPGFueT47XG4gICAgY29uc3QgaGFuZGxlciA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2FiOmhhbmRsZXInLCBjb250ZXh0KTtcbiAgICBpZiAocXVldWUpIHtcbiAgICAgIHF1ZXVlLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGhhbmRsZXJbdmFsLnR5cGVdO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKGNvbnRleHQsIHZhbC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFiTWVzc2FnZVF1ZXVlU2VydmljZSB9IGZyb20gJy4vYWItbWVzc2FnZS1xdWV1ZS5zZXJ2aWNlJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgQWJNZXNzYWdlUXVldWVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFiTWVzc2FnZVF1ZXVlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbQWJNZXNzYWdlUXVldWVTZXJ2aWNlXVxuICAg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