import { call, callBackOperation } from '../setup';
export const initResult = {
    state: 0,
    data: {},
};
export const config = (userOption) => {
    if (userOption.debug) {
        console.log(`debug:${JSON.stringify(userOption)}`);
    }
    call('login', {}, (response) => {
        if (response.code === -1) {
            initResult.data = userOption;
            return initResult.fail && initResult.fail();
        }
        initResult.state = 1;
        initResult.completes && initResult.completes();
    }, userOption);
};
export const checkJsApi = () => { };
export const ready = (callback) => {
    initResult.state !== 0 ? callback && callback() : (initResult.completes = callback);
};
export const error = (callback) => {
    initResult.state === -1 ? callback && callback(initResult.data) : (initResult.fail = callback);
};
export const test = (userOption) => {
    call('login', {}, callBackOperation, userOption);
};
//# sourceMappingURL=index.js.map