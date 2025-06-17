// server actions file
// authenticate/authorize the user for any type of server actions

// We create a user at the end to ensure that new users are properly onboarded into our system.
// Without this step, first-time users wouldn't be recognized, 
// and we wouldn't be able to store necessary details for future interactions.
"use server"

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { createUser, findUser, updateSubscription } from "./queries"
import { refreshToken } from "@/lib/fetch"
import { updateIntegration } from "../integrations/queries"
import { stripe } from "@/lib/stripe"

// use the currentUser function from nextJS and returns the curent user data
// if there isn't such a user it redirects to the sign-in page
export const onCurrentUser = async () => {
  const user = await currentUser()
  if (!user) return redirect('/sign-in')

  return user
}

export const onBoardUser = async () => {
  const user = await onCurrentUser()
  
  // in case the user already exists and it logs you in we call the findUser function which queries your db
  try {
    const found = await findUser(user.id)
    if (found) {

      console.log('User already exists')

      // we need to check for refresh tokens if the user exists
      if (found.integrations.length > 0) {       //check if we have integrations for the user
        const today = new Date()
        const time_left = found.integrations[0].expiresAt?.getTime()! - today.getTime()
        const days = Math.round(time_left / (1000 * 3600 * 24))
        
        // if we have less than 5 days to the expiry date of the token, we refresh and update the integrations in the db with a new one
        if (days < 5) {
          console.log('refresh')

          const refresh = await refreshToken(
            found.integrations[0].token
          )

          const today = new Date()
          const expire_date = today.setDate(today.getDate() + 60)

          const updateToken = await updateIntegration(
            refresh.access_token,
            new Date(expire_date),
            found.integrations[0].id
          )
          
          // in case the update of the token fails
          if (!updateToken) {
            console.log('Update token failed')
          }
        }
      }
      return {
        status: 200,
        data: {
          firstname: found.firstname,
          lastname: found.lastname
        }
      }
    }
    
    console.log('User does not exists thus, we create a new one...')

    // in case we don't find an existing user after logging in we will create one
    const created = await createUser(
      user.id, 
      user.firstName!, 
      user.lastName!, 
      user.emailAddresses[0].emailAddress
    )
    
    console.log('User created!')

    return { status: 201, data: created}
  }  
  
  catch (error) {
    console.log(error)
    return { status: 500 }
  }
}

export const onUserInfo = async () => {
  const user = await onCurrentUser()

  try {
    const profile = await findUser(user.id)
    if (profile) return {status: 200, data: profile}

    return { status: 404 }
  } catch (error) {
    // status 500 if we have a server problem
      return { status: 500 }
  }
}


export const onSubscribe = async(session_id: string) => {
  const user = await onCurrentUser()
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id)
    if (session){
      const subscribed = await updateSubscription(user.id,  {
        customerId: session.customer as string,
        plan: 'PRO'
      })

      if (subscribed) return { status: 200 }
      return { status: 401 }
    }
    return { status: 404 }
  } catch (error) {
    return { status: 500 }
  }
}