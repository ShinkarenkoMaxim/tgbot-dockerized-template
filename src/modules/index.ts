import { Composer } from "grammy"
import { Context } from "../config/context"
import { UserService } from "../services"

const composer = new Composer<Context>()

composer.command('start', async (ctx) => {
    await UserService.upsert({
        fromId: ctx.from.id, 
        firstName: ctx.from.first_name ?? '',
        lastName: ctx.from.last_name ?? ''
    })

    return ctx.reply(ctx.i18n.t('greeting'))
})

export default composer