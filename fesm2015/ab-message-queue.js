import 'reflect-metadata';
import { Subject } from 'rxjs';
import { Injectable, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ subject = new Subject();
/**
 *
 * @param type 消息类型，多个类型以,分隔
 * \@example
 * \@MessageHandler('test')
 *      handlerTest(value: any) {
 *        // ...
 *      }
 */
const /** @type {?} */ MessageHandler = function (type) {
    return function (target, key, descriptor) {
        if (/(\w+\,)*\w+/.test(type)) {
            const /** @type {?} */ types = type.split(',');
            let /** @type {?} */ map = Reflect.getMetadata('ab:handler', target);
            if (!map) {
                map = new Map();
            }
            types.forEach((t) => {
                map[t] = descriptor.value;
            });
            Reflect.defineMetadata('ab:message', subject.asObservable(), target);
            Reflect.defineMetadata('ab:handler', map, target);
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
class AbMessageQueueService {
    constructor() { }
    /**
     * 消息发送方法
     * @param {?} type 消息类型
     * @param {?=} value 消息携带值
     * @return {?}
     */
    send(type, value) {
        subject.next({ type, value });
    }
    /**
     * 将消息处理方法绑定到对应实体上
     * @param {?} context component实体
     * @return {?}
     */
    bind(context) {
        const /** @type {?} */ queue = /** @type {?} */ (Reflect.getMetadata('ab:message', context));
        const /** @type {?} */ handler = Reflect.getMetadata('ab:handler', context);
        if (queue) {
            queue.subscribe(val => {
                const /** @type {?} */ callback = handler[val.type];
                if (callback) {
                    callback.call(context, val.value);
                }
            });
        }
    }
}
AbMessageQueueService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
AbMessageQueueService.ctorParameters = () => [];
/** @nocollapse */ AbMessageQueueService.ngInjectableDef = defineInjectable({ factory: function AbMessageQueueService_Factory() { return new AbMessageQueueService(); }, token: AbMessageQueueService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AbMessageQueueModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AbMessageQueueModule,
            providers: [AbMessageQueueService]
        };
    }
}
AbMessageQueueModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                exports: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AbMessageQueueService, AbMessageQueueModule, subject, MessageHandler };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWItbWVzc2FnZS1xdWV1ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYWItbWVzc2FnZS1xdWV1ZS9saWIvZGVjb3JhdG9yLnRzIiwibmc6Ly9hYi1tZXNzYWdlLXF1ZXVlL2xpYi9hYi1tZXNzYWdlLXF1ZXVlLnNlcnZpY2UudHMiLCJuZzovL2FiLW1lc3NhZ2UtcXVldWUvbGliL2FiLW1lc3NhZ2UtcXVldWUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gdHlwZSDDpsK2wojDpsKBwq/Dp8KxwrvDpcKewovDr8K8wozDpcKkwprDpMK4wqrDp8KxwrvDpcKewovDpMK7wqUsw6XCiMKGw6nCmsKUXG4gKiBAZXhhbXBsZVxuICogICAgICBATWVzc2FnZUhhbmRsZXIoJ3Rlc3QnKVxuICogICAgICBoYW5kbGVyVGVzdCh2YWx1ZTogYW55KSB7XG4gKiAgICAgICAgLy8gLi4uXG4gKiAgICAgIH1cbiAqL1xuZXhwb3J0IGNvbnN0IE1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKHR5cGU6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KSB7XG4gICAgaWYgKC8oXFx3K1xcLCkqXFx3Ky8udGVzdCh0eXBlKSkge1xuICAgICAgY29uc3QgdHlwZXMgPSB0eXBlLnNwbGl0KCcsJyk7XG4gICAgICBsZXQgbWFwID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnYWI6aGFuZGxlcicsIHRhcmdldCk7XG4gICAgICBpZiAoIW1hcCkge1xuICAgICAgICBtYXAgPSBuZXcgTWFwPFN0cmluZywgRnVuY3Rpb24+KCk7XG4gICAgICB9XG4gICAgICB0eXBlcy5mb3JFYWNoKCh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgbWFwW3RdID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSgnYWI6bWVzc2FnZScsIHN1YmplY3QuYXNPYnNlcnZhYmxlKCksIHRhcmdldCk7XG4gICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKCdhYjpoYW5kbGVyJywgbWFwLCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ8OnwrHCu8Olwp7Ci8OkwrvChcOpwpnCkMOlwq3Cl8Omwq/CjcOmwpXCsMOlwq3Cl8OkwrjCi8OlwojCksOnwrrCvycpO1xuICAgIH1cbiAgfTtcbn07XG5cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN1YmplY3QgfSBmcm9tICcuL2RlY29yYXRvcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogw6bCtsKIw6bCgcKvw6XCj8KRw6nCgMKBw6bCnMKNw6XCisKhw6fCscK7XG4gKiBAYXV0aG9yIHh1Y2hhb1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBYk1lc3NhZ2VRdWV1ZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIMOmwrbCiMOmwoHCr8Olwo/CkcOpwoDCgcOmwpbCucOmwrPClVxuICAgKiBAcGFyYW0gdHlwZSDDpsK2wojDpsKBwq/Dp8KxwrvDpcKewotcbiAgICogQHBhcmFtIHZhbHVlIMOmwrbCiMOmwoHCr8OmwpDCusOlwrjCpsOlwoDCvFxuICAgKi9cbiAgcHVibGljIHNlbmQodHlwZTogc3RyaW5nLCB2YWx1ZT86IGFueSkge1xuICAgIHN1YmplY3QubmV4dCh7IHR5cGUsIHZhbHVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOlwrDChsOmwrbCiMOmwoHCr8OlwqTChMOnwpDChsOmwpbCucOmwrPClcOnwrvCkcOlwq7CmsOlwojCsMOlwq/CucOlwrrClMOlwq7CnsOkwr3Ck8OkwrjCilxuICAgKiBAcGFyYW0gY29udGV4dCBjb21wb25lbnTDpcKuwp7DpMK9wpNcbiAgICovXG4gIHB1YmxpYyBiaW5kKGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IHF1ZXVlID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnYWI6bWVzc2FnZScsIGNvbnRleHQpIGFzIE9ic2VydmFibGU8YW55PjtcbiAgICBjb25zdCBoYW5kbGVyID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnYWI6aGFuZGxlcicsIGNvbnRleHQpO1xuICAgIGlmIChxdWV1ZSkge1xuICAgICAgcXVldWUuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gaGFuZGxlclt2YWwudHlwZV07XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY29udGV4dCwgdmFsLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJNZXNzYWdlUXVldWVTZXJ2aWNlIH0gZnJvbSAnLi9hYi1tZXNzYWdlLXF1ZXVlLnNlcnZpY2UnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBYk1lc3NhZ2VRdWV1ZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWJNZXNzYWdlUXVldWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtBYk1lc3NhZ2VRdWV1ZVNlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsdUJBR2EsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7Ozs7Ozs7Ozs7QUFXMUMsdUJBQWEsY0FBYyxHQUFHLFVBQVUsSUFBWTtJQUNsRCxPQUFPLFVBQVUsTUFBVyxFQUFFLEdBQVcsRUFBRSxVQUFlO1FBQ3hELElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1Qix1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixxQkFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDUixHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7YUFDbkM7WUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBUztnQkFDdEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoQztLQUNGLENBQUM7Q0FDSDs7Ozs7O0FDL0JEOzs7O0FBV0E7SUFFRSxpQkFBaUI7Ozs7Ozs7SUFPVixJQUFJLENBQUMsSUFBWSxFQUFFLEtBQVc7UUFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7O0lBT3pCLElBQUksQ0FBQyxPQUFZO1FBQ3RCLHVCQUFNLEtBQUsscUJBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFvQixDQUFBLENBQUM7UUFDNUUsdUJBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHO2dCQUNqQix1QkFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNuQzthQUNGLENBQUMsQ0FBQztTQUNKOzs7O1lBOUJKLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ1ZEOzs7O0lBU0UsT0FBTyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbkMsQ0FBQztLQUNIOzs7WUFaRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1o7Ozs7Ozs7Ozs7Ozs7OzsifQ==