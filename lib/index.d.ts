declare type EASI = {
    config: Function;
    checkJsApi: Function;
    ready: Function;
    error: Function;
    getEnv: Function;
    [key: string]: Function;
};
declare const easi: EASI;
export default easi;
