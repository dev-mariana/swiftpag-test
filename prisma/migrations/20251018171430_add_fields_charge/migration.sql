/*
  Warnings:

  - A unique constraint covering the columns `[pix_key]` on the table `charge` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expiration_date` to the `charge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pix_key` to the `charge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "charge" ADD COLUMN     "expiration_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "pix_key" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "charge_pix_key_key" ON "charge"("pix_key");
