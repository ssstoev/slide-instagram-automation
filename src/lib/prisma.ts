import { PrismaClient } from '@prisma/client';

declare global{
  var prisma: PrismaClient | undefined
}

export const client = globalThis.prisma || new PrismaClient()

// If we're not in prod env we're gonna use the client var
// This way when we hot reload we're not creating a new prisma instance every single time
if(process.env.NODE_ENV !== "production") globalThis.prisma = client