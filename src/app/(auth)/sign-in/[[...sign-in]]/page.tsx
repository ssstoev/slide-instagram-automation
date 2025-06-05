import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}

// WIP: Make it possible to sign out and sign in with new email
const Page = (props: Props) => {
  return (
    <SignIn />
  )
}

export default Page