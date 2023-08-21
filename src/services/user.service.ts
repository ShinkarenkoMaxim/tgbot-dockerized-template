import prisma from "../utils/connectors/pg_storage";

export class UserService {
  static async upsert({fromId, firstName, lastName}) {
    try {
      await prisma.user.upsert({
          where: {fromId},
          create: {fromId, firstName, lastName},
          update: {}
      })
    } catch(err) {
        console.log(err)
    }

    return
  }
}