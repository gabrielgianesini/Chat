import prismaClient from '../db/prisma';

class ProfileUserService {
  async execute(user_id) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    });

    return user;
  }
}

export { ProfileUserService };
