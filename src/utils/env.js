import { baseInfo } from '../constants';
const getVersion = (parmes) => {
    const uaFragments = parmes.ua.split(' ');
    if (uaFragments.length > 0) {
        const easiMark = parmes.isMalaysia ? baseInfo.easiMalaysiaAgent : baseInfo.easiAgent;
        const easiUaStart = uaFragments[0].includes(easiMark);
        if (easiUaStart) {
            return uaFragments[0].replace(easiMark, '');
        }
    }
    return null;
};
export const getEnv = () => {
    const ua = navigator.userAgent;
    const isEasi = ua.includes(baseInfo.easiAgent);
    const isMalaysia = ua.includes(baseInfo.easiMalaysiaAgent);
    const isAndroid = ua.includes('Android') || ua.includes('android') || ua.includes('Linux');
    const isIos = ua.includes('iPhone') || ua.includes('iOS');
    const version = getVersion({ ua, isMalaysia });
    return { ua, isEasi, isMalaysia, isAndroid, isIos, version };
};
//# sourceMappingURL=env.js.map