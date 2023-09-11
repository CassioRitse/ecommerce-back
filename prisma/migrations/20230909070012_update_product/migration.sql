/*
  Warnings:

  - You are about to drop the column `qtn` on the `Products` table. All the data in the column will be lost.
  - Added the required column `flag` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qnt` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "qnt" INTEGER NOT NULL,
    "flag" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "purchaseId" TEXT,
    CONSTRAINT "Products_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("id", "name", "price", "purchaseId") SELECT "id", "name", "price", "purchaseId" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
