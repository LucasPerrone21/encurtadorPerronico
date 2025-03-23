-- CreateTable
CREATE TABLE "EncurtedLink" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "shortLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EncurtedLink_pkey" PRIMARY KEY ("id")
);
