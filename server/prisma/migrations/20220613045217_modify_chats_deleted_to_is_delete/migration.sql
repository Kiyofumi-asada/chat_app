/*
  Warnings:

  - You are about to drop the column `deleted` on the `Chats` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Chats` DROP COLUMN `deleted`,
    ADD COLUMN `isDelete` BOOLEAN NULL DEFAULT false;
