import easi from '../src/index';

test('测试getEnv', () => {
  const result = easi.getEnv();
  expect(result).toEqual({
    isAndroid: false,
    isEasi: false,
    isIos: false,
    isMalaysia: false,
    ua: 'Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/16.4.0',
    version: null,
  });
});
