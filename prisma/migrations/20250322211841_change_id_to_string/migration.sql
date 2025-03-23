/*
  Warnings:

  - The primary key for the `EncurtedLink` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EncurtedLink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "link" TEXT NOT NULL,
    "shortLink" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_EncurtedLink" ("createdAt", "id", "link", "shortLink", "updatedAt") SELECT "createdAt", "id", "link", "shortLink", "updatedAt" FROM "EncurtedLink";
DROP TABLE "EncurtedLink";
ALTER TABLE "new_EncurtedLink" RENAME TO "EncurtedLink";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
