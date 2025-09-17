/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Shelter" DROP CONSTRAINT "Shelter_userId_fkey";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "emailVerified";

-- AddForeignKey
ALTER TABLE "public"."Shelter" ADD CONSTRAINT "Shelter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
