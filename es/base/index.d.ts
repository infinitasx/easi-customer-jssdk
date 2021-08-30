import { baseParames } from '../setup';
interface Result {
    state: number;
    data: any;
    completes?: Function;
    fail?: Function;
}
export declare const initResult: Result;
export declare const config: (userOption: baseParames) => void;
export declare const checkJsApi: () => void;
export declare const ready: (callback: Function) => void;
export declare const error: (callback: Function) => void;
export declare const test: (userOption: baseParames) => void;
export {};
