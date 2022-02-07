import prismaClient from '../db/prisma';

class GetLast5MessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 5,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    });

    return messages;
  }
}

export { GetLast5MessagesService };
