-- CreateTable
CREATE TABLE "public"."Shelter" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "address" TEXT,
    "picture" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Shelter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shelter_userId_key" ON "public"."Shelter"("userId");

-- AddForeignKey
ALTER TABLE "public"."Shelter" ADD CONSTRAINT "Shelter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
