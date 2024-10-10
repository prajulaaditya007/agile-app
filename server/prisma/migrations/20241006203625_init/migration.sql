/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `TaskAssignment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "TaskAssignment" DROP COLUMN "createdAt";
