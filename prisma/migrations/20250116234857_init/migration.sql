-- CreateTable
CREATE TABLE "PetApplication" (
    "id" SERIAL NOT NULL,
    "ownerName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "petName" TEXT NOT NULL,
    "petType" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "travelDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PetApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestrictedBreed" (
    "id" SERIAL NOT NULL,
    "breed" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "RestrictedBreed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requirement" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Requirement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PetApplication_email_key" ON "PetApplication"("email");

-- CreateIndex
CREATE UNIQUE INDEX "RestrictedBreed_breed_key" ON "RestrictedBreed"("breed");
