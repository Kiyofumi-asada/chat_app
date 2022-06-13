import { Chats } from '@prisma/client';
import { errorHandler, prisma } from '..';

//GET
const read = async (): Promise<Chats[]> => {
  return await prisma.chats.findMany({});
};
//POST
const create = async (data: Chats): Promise<void> => {
  await prisma.chats.create({ data });
};
//PUT
const edit = async (data: Chats): Promise<void> => {
  const { id, message } = data;
  await prisma.chats.update({
    where: {
      id: id,
    },
    data: {
      message: message,
      updated_at: new Date(),
    },
  });
};
//DELETE
const logicalDelete = async (detailId: number): Promise<void> => {
  await prisma.chats.update({
    where: {
      id: detailId,
    },
    data: {
      updated_at: new Date(),
      isDelete: true,
    },
  });
};

export const prismaChat = {
  read: (): Promise<Chats[]> => errorHandler(read()),
  create: (data: Chats): Promise<void> => errorHandler(create(data)),
  edit: (data: Chats): Promise<void> => errorHandler(edit(data)),
  logicalDelete: (data: number): Promise<void> =>
    errorHandler(logicalDelete(data)),
};
