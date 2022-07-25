/*
  Warnings:

  - You are about to alter the column `userIcon` on the `Chats` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(1000)`.

*/
-- AlterTable
ALTER TABLE `Chats` MODIFY `userIcon` VARCHAR(1000) NULL;
