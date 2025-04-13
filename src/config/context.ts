import type { I18nFlavor } from "@grammyjs/i18n";
import { Context as BaseContext, type SessionFlavor } from "grammy";
import type { SessionData } from "./session";

export type Context = BaseContext & SessionFlavor<SessionData> & I18nFlavor;
