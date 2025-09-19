/*
  Warnings:

  - You are about to drop the column `chipNumber` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `compatibility` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `specialNeeds` on the `Animal` table. All the data in the column will be lost.
  - The `size` column on the `Animal` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `description` on the `Animal` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.
  - Made the column `description` on table `Animal` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Animal" DROP COLUMN "chipNumber",
DROP COLUMN "color",
DROP COLUMN "compatibility",
DROP COLUMN "specialNeeds",
ADD COLUMN     "compatibleWithCats" BOOLEAN,
ADD COLUMN     "compatibleWithDogs" BOOLEAN,
ADD COLUMN     "compatibleWithKids" BOOLEAN,
DROP COLUMN "size",
ADD COLUMN     "size" DOUBLE PRECISION,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(1000);
