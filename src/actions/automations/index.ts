'use server'

import { onCurrentUser } from "../user"
import { findUser } from "../user/queries"
import { addKeyword, addListener, addPost, addTrigger, 
        createAutomation, deleteAutomation, deleteKeywordQuery, findAutomation, 
        getAutomations, updateAutomation } from "./queries"

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser()
  // console.log('current user is: ', user)

  try {
    // console.log(`creating automation with id ${id}...`)
    const create = await createAutomation(user.id, id)
    // console.log('created automation', create)

    if (create) return { status: 200, data: 'Automation created'}
    return { status: 404, data: 'Oops! Something went wrong' }

  } catch (error) {
    console.log(error)
    return { status: 500, data: 'Internal server error' }
  }
}

export const deleteAutomations = async(id?: string) => {
  console.log('deleting the automation...')
  const user = await onCurrentUser();

  try {
    const deleted = await deleteAutomation(user.id, id)

    if (deleted) return { status: 200, data: 'Automation deleted'}
    return { status: 404, data: 'Oops! Something went wrong' }

  } catch (error) {
    return { status: 500, data: 'Internal server error' }
  }
};

export const getAllAutomations = async () => {
  const user = await onCurrentUser()

  try {
    const automations = await getAutomations(user.id)
    if (automations) return { status: 200, data: automations.automations }
    
    return { status: 404, data: [] }

  } catch (error) {
      return { status: 500, data: [] }

  }
}

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser()

  try {
    const automation = await findAutomation(id)
    if (automation) return { status: 200, data: automation }
    return { status: 404 }
  } catch (error) {
    return { status: 500 }
  }
}

export const updateAutomationName = async (
  automationId: string,
  data:{
    name?: string,
    active?: boolean,
    automation?: string
  }) => {
  await onCurrentUser()

  try {
    const update = await updateAutomation(automationId, data)
    if (update) {
      return { status: 200, data: 'Automation succesfully updated'}
    }
    return { status: 404, data: 'Oops! Cannot find automation'}

  } catch (error) {
    return { status: 500, data: 'Oops! Something went wrong'}
  }
}

export const saveListener = async (
  automationId: string,
  listener: 'SMARTAI' | 'MESSAGE',
  prompt: string,
  reply?: string
) => {
  await onCurrentUser()
  try {
    const create = await addListener(automationId, listener, prompt, reply)
    if (create) return { status: 200, data: 'Listener created'}
    return { status: 404, data: 'Cannot save listener'}
  } catch (error) {
    return { status: 500, data: 'Oops! There was a server error'}

  }
}

export const saveTrigger = async (automationId: string, trigger: string[]) => {
  await onCurrentUser()

  try {
    const create = await addTrigger(automationId, trigger)
    if (create) return { status: 200, data: 'Trigger saved'}
    return { status: 404, data: 'Cannot save tigger'}
  } catch (error) {
    return { status: 500, data: 'Oops! There was a server error'}

  }
}

// server actions to save/delete a keyword
export const saveKeyword = async (id: string, keyword: string) => {
  await onCurrentUser()
  try {
    const create = await addKeyword(id, keyword)
    if (create) return { status: 200, data: 'Keyword saved'}
    return { status: 404, data: 'Cannot save keyword'}
  } catch (error) {
    return { status: 500, data: 'Oops! There was a server error'}

  }
}

export const deleteKeyword = async (id: string) => {
  await onCurrentUser()
  try {
    const deleted = await deleteKeywordQuery(id)
    if (deleted) return { status: 200, data: 'Keyword deleted'}
    return { status: 404, data: 'Cannot delete keyword'}
  } catch (error) {
    return { status: 500, data: 'Oops! There was a server error'}

  }
}

// FETCH INSTA POSTS for user
export const getProfilePosts = async () => {
  const user = await onCurrentUser()
  try {
    const profile = await findUser(user.id)
    const posts = await fetch(
      `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,
      timestamp&limit=10&access_token=${profile?.integrations[0].token}`
    )
    const parsed = await posts.json()
    if (parsed) return { status: 200, data: parsed }
    console.log('🔴 Error in getting posts')
    return { status: 404 }
  } catch (error) {
    console.log('🔴 server side Error in getting posts ', error)
    return { status: 500 }
  }
}

// add selected posts to db
export const savePosts = async (
  automationId: string,
  posts: {
    postid: string,
    caption?: string,
    media: string
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
  }[]
) => {
  await onCurrentUser()
  try {
    const create = await addPost(automationId, posts)

    if (create) return { status: 200, data: 'Posts attached' }
    return { status: 404, data: 'Automation not found' }
  } catch (error) {
    return { status: 500, data: 'Oops.. Something went wrong' }
  }
}

export const activateAutomation = async (id: string, state: boolean) => {
  await onCurrentUser()
  try {
    const update = await updateAutomation(id, { active: state })
    if (update)
      return {
        status: 200,
        data: `Automation ${state ? 'activated' : 'disabled'}`
      }
    return { status: 404, data: 'Automation not found' }
  } catch (error) {
    return { status: 500, data: 'Oops.. Something went wrong' }
  }
}