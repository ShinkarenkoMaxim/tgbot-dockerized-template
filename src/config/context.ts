import { I18nContextFlavor } from '@grammyjs/i18n/dist/source';
import { Context as BaseContext, SessionFlavor } from 'grammy';
import { Session } from './session';

export type Context = BaseContext & I18nContextFlavor & SessionFlavor<Session>;
