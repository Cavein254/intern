/*
  Warnings:

  - You are about to drop the column `positions` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `roles` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "positions",
DROP COLUMN "roles",
ADD COLUMN     "position" "Position" NOT NULL DEFAULT 'INTERN',
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
