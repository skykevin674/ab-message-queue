/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import 'reflect-metadata';
import { Subject } from 'rxjs';
export const /** @type {?} */ subject = new Subject();
/**
 *
 * @param type 消息类型，多个类型以,分隔
 * \@example
 * \@MessageHandler('test')
 *      handlerTest(value: any) {
 *        // ...
 *      }
 */
export const /** @type {?} */ MessageHandler = function (type) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWItbWVzc2FnZS1xdWV1ZS8iLCJzb3VyY2VzIjpbImxpYi9kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixNQUFNLENBQUMsdUJBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7Ozs7Ozs7Ozs7QUFXMUMsTUFBTSxDQUFDLHVCQUFNLGNBQWMsR0FBRyxVQUFVLElBQVk7SUFDbEQsTUFBTSxDQUFDLFVBQVUsTUFBVyxFQUFFLEdBQVcsRUFBRSxVQUFlO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLHVCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLHFCQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO2FBQ25DO1lBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO2dCQUMxQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzthQUMzQixDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDckUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hDO0tBQ0YsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHR5cGUg5raI5oGv57G75Z6L77yM5aSa5Liq57G75Z6L5LulLOWIhumalFxuICogQGV4YW1wbGVcbiAqICAgICAgQE1lc3NhZ2VIYW5kbGVyKCd0ZXN0JylcbiAqICAgICAgaGFuZGxlclRlc3QodmFsdWU6IGFueSkge1xuICogICAgICAgIC8vIC4uLlxuICogICAgICB9XG4gKi9cbmV4cG9ydCBjb25zdCBNZXNzYWdlSGFuZGxlciA9IGZ1bmN0aW9uICh0eXBlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IGFueSkge1xuICAgIGlmICgvKFxcdytcXCwpKlxcdysvLnRlc3QodHlwZSkpIHtcbiAgICAgIGNvbnN0IHR5cGVzID0gdHlwZS5zcGxpdCgnLCcpO1xuICAgICAgbGV0IG1hcCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2FiOmhhbmRsZXInLCB0YXJnZXQpO1xuICAgICAgaWYgKCFtYXApIHtcbiAgICAgICAgbWFwID0gbmV3IE1hcDxTdHJpbmcsIEZ1bmN0aW9uPigpO1xuICAgICAgfVxuICAgICAgdHlwZXMuZm9yRWFjaCgodDogc3RyaW5nKSA9PiB7XG4gICAgICAgIG1hcFt0XSA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICB9KTtcbiAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoJ2FiOm1lc3NhZ2UnLCBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLCB0YXJnZXQpO1xuICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSgnYWI6aGFuZGxlcicsIG1hcCwgdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfnsbvlnovku4XpmZDlrZfmr43mlbDlrZfkuIvliJLnur8nKTtcbiAgICB9XG4gIH07XG59O1xuXG4iXX0=