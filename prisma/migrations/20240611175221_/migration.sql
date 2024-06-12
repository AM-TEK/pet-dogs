-- CreateTable
CREATE TABLE "Dog" (
    "id" SERIAL NOT NULL,
    "breed" TEXT,
    "image" TEXT,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);
