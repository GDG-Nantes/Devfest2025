import { Config } from 'next-i18n-router/dist/types';

const i18nConfig: Config = {
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  serverSetCookie: 'if-empty',
};
export default i18nConfig;
