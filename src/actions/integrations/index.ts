'use server'

import { redirect } from "next/navigation"
import { onCurrentUser } from "../user";
import { createIntegration, getIntegration } from "./queries";
import { generateTokens } from "@/lib/fetch";
import axios from "axios";

export const onOAuthInstagram = (strategy: 'INSTAGRAM' | 'CRM') => {
  if (strategy==='INSTAGRAM') {
    console.log('INSTAGRAM_EMBEDDED_OAUTH_URL: ', process.env.INSTAGRAM_EMBEDDED_OAUTH_URL)
    return redirect(process.env.INSTAGRAM_EMBEDDED_OAUTH_URL as string)
  }
};

export const onIntegrate = async (code: string) => {
  const user = await onCurrentUser()

  try {
    // console.log('fetching integration...')
    const integration = await getIntegration(user.id)
    // console.log('Integration fetched: ', integration)

    if (integration && integration.integrations.length === 0) {
      const token = await generateTokens(code)
      console.log('onIntegrate token: ', token)

      if (token) {
        const insta_id = await axios.get(
          `${process.env.INSTAGRAM_BASE_URL}/me?fields=user_id&access_token=${token.access_token}`
        )

        // set 60 days expiration date for the token
        const today = new Date()
        const expire_date = today.setDate(today.getDate() + 60)
        const create = await createIntegration(
          user.id,
          token.access_token,
          new Date(expire_date),
          insta_id.data.user_id
        )

        return { status: 200, data: create }
      }
      console.log('🔴 401')
      return { status: 401 }
    }
    
    console.log('🔴 404')
    return { status: 404 }

  } catch (error) {
    console.log('🔴 500', error)
    return { status: 500 }
  }
};