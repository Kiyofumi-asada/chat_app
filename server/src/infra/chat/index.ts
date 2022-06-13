import { Chats } from '@prisma/client';
import { errorHandler, prisma } from '..';

const read = async (): Promise<Chats[]> => {
  return await prisma.chats.findMany({});
};

const create = async (data: Chats): Promise<any> => {
  return await prisma.chats.create({ data });
};

export const prismaChat = {
  read: (): Promise<Chats[]> => errorHandler(read()),
  create: (chat: Chats): Promise<void> => errorHandler(create(chat)),
};
