import { Composer } from "grammy";
import { type Context } from "../config/context";
import { UserService } from "../services";

const composer = new Composer<Context>();

composer.command("start", async (ctx: Context) => {
  await UserService.upsert({
    fromId: ctx.from?.id,
    firstName: ctx.from?.first_name ?? "",
    lastName: ctx.from?.last_name ?? "",
  });

  return ctx.reply(ctx.t("greeting"));
});

export default composer;
