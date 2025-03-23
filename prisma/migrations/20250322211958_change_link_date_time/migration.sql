-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EncurtedLink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "link" TEXT NOT NULL,
    "shortLink" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_EncurtedLink" ("createdAt", "id", "link", "shortLink", "updatedAt") SELECT "createdAt", "id", "link", "shortLink", "updatedAt" FROM "EncurtedLink";
DROP TABLE "EncurtedLink";
ALTER TABLE "new_EncurtedLink" RENAME TO "EncurtedLink";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
