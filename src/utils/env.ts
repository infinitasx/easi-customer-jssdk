import { baseInfo } from '../constants';

export type EnvType = {
  ua: string;
  isEasi: boolean;
  isMalaysia: boolean;
  isAndroid: boolean;
  isIos: boolean;
  version: number | null | string;
};

const getVersion = (parmes: { ua: string; isMalaysia: boolean }): string | null => {
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

export const getEnv = (): EnvType => {
  const ua = navigator.userAgent;
  const isEasi = ua.includes(baseInfo.easiAgent);
  const isMalaysia = ua.includes(baseInfo.easiMalaysiaAgent);
  const isAndroid = ua.includes('Android') || ua.includes('android') || ua.includes('Linux');
  const isIos = ua.includes('iPhone') || ua.includes('iOS');
  const version = getVersion({ ua, isMalaysia });
  return { ua, isEasi, isMalaysia, isAndroid, isIos, version };
};
