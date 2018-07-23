/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import 'reflect-metadata';
import { Subject } from 'rxjs';
export var /** @type {?} */ subject = new Subject();
/**
 *
 * @param type 消息类型，多个类型以,分隔
 * \@example
 * \@MessageHandler('test')
 *      handlerTest(value: any) {
 *        // ...
 *      }
 */
export var /** @type {?} */ MessageHandler = function (type) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWItbWVzc2FnZS1xdWV1ZS8iLCJzb3VyY2VzIjpbImxpYi9kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixNQUFNLENBQUMscUJBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7Ozs7Ozs7Ozs7QUFXMUMsTUFBTSxDQUFDLHFCQUFNLGNBQWMsR0FBRyxVQUFVLElBQVk7SUFDbEQsTUFBTSxDQUFDLFVBQVUsTUFBVyxFQUFFLEdBQVcsRUFBRSxVQUFlO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLHFCQUFJLEtBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsS0FBRyxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO2FBQ25DO1lBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQVM7Z0JBQ3RCLEtBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2FBQzNCLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNyRSxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxLQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkQ7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEM7S0FDRixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gdHlwZSDmtojmga/nsbvlnovvvIzlpJrkuKrnsbvlnovku6Us5YiG6ZqUXG4gKiBAZXhhbXBsZVxuICogICAgICBATWVzc2FnZUhhbmRsZXIoJ3Rlc3QnKVxuICogICAgICBoYW5kbGVyVGVzdCh2YWx1ZTogYW55KSB7XG4gKiAgICAgICAgLy8gLi4uXG4gKiAgICAgIH1cbiAqL1xuZXhwb3J0IGNvbnN0IE1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKHR5cGU6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KSB7XG4gICAgaWYgKC8oXFx3K1xcLCkqXFx3Ky8udGVzdCh0eXBlKSkge1xuICAgICAgY29uc3QgdHlwZXMgPSB0eXBlLnNwbGl0KCcsJyk7XG4gICAgICBsZXQgbWFwID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnYWI6aGFuZGxlcicsIHRhcmdldCk7XG4gICAgICBpZiAoIW1hcCkge1xuICAgICAgICBtYXAgPSBuZXcgTWFwPFN0cmluZywgRnVuY3Rpb24+KCk7XG4gICAgICB9XG4gICAgICB0eXBlcy5mb3JFYWNoKCh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgbWFwW3RdID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSgnYWI6bWVzc2FnZScsIHN1YmplY3QuYXNPYnNlcnZhYmxlKCksIHRhcmdldCk7XG4gICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKCdhYjpoYW5kbGVyJywgbWFwLCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+exu+Wei+S7hemZkOWtl+avjeaVsOWtl+S4i+WIkue6vycpO1xuICAgIH1cbiAgfTtcbn07XG5cbiJdfQ==