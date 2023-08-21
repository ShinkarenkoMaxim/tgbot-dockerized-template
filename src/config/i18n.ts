import { I18n } from '@grammyjs/i18n';

const i18n = new I18n({
  defaultLanguageOnMissing: true,
  defaultLanguage: 'ru',
  directory: 'locales',
  useSession: true,
});

export default i18n;
