import { SignUp } from '@clerk/nextjs'
import React from 'react'

type Props = {}

// WIP: Handle case when firstName exists already (maybe drop requirement)
// WIP: Add more Sign-up options except gmail

const Page = (props: Props) => {
  return (
    <SignUp />
  )
}

export default Page