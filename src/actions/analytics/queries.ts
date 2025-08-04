import { client } from "@/lib/prisma"


export const getAllUserMessages = async (clerkId: string) => {
  return client.dms.findMany({
   where: {
      Automation: {
        User: {
          clerkId: clerkId
        }
      }
    },
    select: {
      automationId: true,
      createdAt: true,
      Automation: {
        select: {
          User: {
            select: {
              id: true,        // use `userId` if your model uses that
              clerkId: true,
            },
          },
        },
      },
    },
  })
}; 
