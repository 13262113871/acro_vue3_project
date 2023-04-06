import { createI18n } from 'vue-i18n';
import en from './en-US';
import cn from './zh-CN';
import hk from './zh-HK';

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: '繁体中文', value: 'zh-HK' },
  { label: 'English', value: 'en-US' },
];
const defaultLocale = localStorage.getItem('arco-locale') || 'zh-CN';

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  allowComposition: true,
  messages: {
    'en-US': en,
    'zh-CN': cn,
    'zh-HK': hk,
  },
});

export default i18n;
