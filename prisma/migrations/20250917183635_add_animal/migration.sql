-- CreateTable
CREATE TABLE "public"."Animal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT,
    "age" INTEGER,
    "sex" TEXT NOT NULL,
    "size" TEXT,
    "weight" DOUBLE PRECISION,
    "color" TEXT,
    "description" TEXT,
    "photos" TEXT[],
    "status" TEXT NOT NULL,
    "vaccinated" BOOLEAN,
    "identified" BOOLEAN,
    "chipNumber" TEXT,
    "sterilized" BOOLEAN,
    "compatibility" TEXT,
    "specialNeeds" TEXT,
    "shelterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Animal" ADD CONSTRAINT "Animal_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "public"."Shelter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
