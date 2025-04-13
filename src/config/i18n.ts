import { I18n } from "@grammyjs/i18n";
import { type Context } from "./context";

const i18n = new I18n<Context>({
  defaultLocale: "ru",
  directory: "locales",
  useSession: true,
  globalTranslationContext(ctx) {
    return { first_name: ctx.from?.first_name ?? "" };
  },
});

export default i18n;
