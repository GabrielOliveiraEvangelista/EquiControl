/*
  Warnings:

  - Changed the type of `acesso_laboratorio` on the `animals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "animals" DROP COLUMN "acesso_laboratorio",
ADD COLUMN     "acesso_laboratorio" BOOLEAN NOT NULL;
