import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = globalForPrisma.prisma || new PrismaClient();

export const db = prisma;
