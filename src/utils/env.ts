import { baseEasiInfo } from '../constants';

// EASI系统环境
export type EnvType = {
  ua: string;
  isEasi: boolean;
  isMalaysia: boolean;
  isAndroid: boolean;
  isIos: boolean;
  version: number | null | string;
};

/**
 * 获取系统版本信息
 * @param {Object} parmes 配置数据
 * @param {string} parmes.ua 系统ua
 * @param {boolean} parmes.isMalaysia 是否是马来西亚
 */
const getVersion = (parmes: { ua: string; isMalaysia: boolean }): string | null => {
  const uaFragments = parmes.ua.split(' ');
  if (uaFragments.length > 0) {
    const easiMark = parmes.isMalaysia ? baseEasiInfo.easiMalaysiaAgent : baseEasiInfo.easiAgent;
    const easiUaStart = uaFragments[0].includes(easiMark);
    if (easiUaStart) {
      return uaFragments[0].replace(easiMark, '');
    }
  }
  return null;
};

/**
 * 获取系统环境
 * @returns {Object} ua, isEasi, isMalaysia, isAndroid, isIos, version 返回的数据
 */
export const getEnv = (): EnvType => {
  const ua = navigator.userAgent;
  const isEasi = ua.includes(baseEasiInfo.easiAgent);
  const isMalaysia = ua.includes(baseEasiInfo.easiMalaysiaAgent);
  const isAndroid = ua.includes('Android') || ua.includes('android') || ua.includes('Linux');
  const isIos = ua.includes('iPhone') || ua.includes('iOS');
  const version = getVersion({ ua, isMalaysia });
  return { ua, isEasi, isMalaysia, isAndroid, isIos, version };
};
