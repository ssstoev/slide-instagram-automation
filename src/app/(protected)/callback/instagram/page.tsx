import { onIntegrate } from '@/actions/integrations'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = { searchParams: {
  code: string
}}

const Page = async ({ searchParams: { code } }: Props) => {

  if (code) {
    console.log('insta code: ', code)
    const user = await onIntegrate(code.split('#_')[0])
    if (user.status === 200) {
      // console.log('Insta Integration is successful')
      return redirect(`/dashboard/${user.data?.firstname}${user.data?.lastname}/integrations`)
    }
  }
  // console.log('Insta Integration WAS NOT successful')
  return (
    redirect('/sign-up')
  )
}

export default Page