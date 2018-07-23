import 'reflect-metadata';
import { Subject } from 'rxjs';
export declare const subject: Subject<any>;
/**
 *
 * @param type 消息类型，多个类型以,分隔
 * @example
 *      @MessageHandler('test')
 *      handlerTest(value: any) {
 *        // ...
 *      }
 */
export declare const MessageHandler: (type: string) => (target: any, key: string, descriptor: any) => void;
