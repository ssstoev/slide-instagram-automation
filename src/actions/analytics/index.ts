import { onCurrentUser } from "../user";
import { getAllUserMessages } from "./queries";


export const fetchCountAllUserMessages = async () => {
  const user = await onCurrentUser();

    try {
      console.log('Fetching User messages...')
      const allMessages = await getAllUserMessages(user.id);
      if (allMessages) { 

        const allMessagesFixedDate = allMessages.map((msg) => ({
          ...msg, 
          createdAt: msg.createdAt.toISOString().slice(0, 10)
        }))
        // console.log(`ALL MESSAGES for user ${user.id}: \n, ${JSON.stringify(allMessagesFixedDate, null, 2)}`)

        // const countAllMessages = allMessages.length
        return { status: 200, data: allMessagesFixedDate };
    }
      console.log('ERROR FINDING MESSAGES')
      return { status: 404, data: [] }
  
    } catch (error) {
        console.log(error)
        return { status: 500, data: [] }
    }
};