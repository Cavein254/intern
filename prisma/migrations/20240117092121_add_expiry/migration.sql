/*
  Warnings:

  - Added the required column `expiry` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "expiry" TIMESTAMP(3) NOT NULL;
