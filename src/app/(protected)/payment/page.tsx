import { onSubscribe } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
  searchParams: { 
    session_id?: string; 
    cancel?: boolean 
  }
}

const Page = async ({ searchParams: { cancel, session_id } }: Props) => {
  // if we have the session id we can create the subscription/update it in the db & redirect user to dashboard page
  if (session_id){
    const customer = await onSubscribe(session_id)

    if (customer.status === 200) {
      return redirect('/dashboard')
    }

    return <div className='flex flex-col justify-center items-center h-screen w-full'>
      <h4 className='text-5xl font-bold'>404</h4>
      <p className='text-cl font-bold'>Oops! Something went wrong!</p>
    </div>
  }

  if (cancel){
    return <div className='flex flex-col justify-center items-center h-screen w-full'>
      <h4 className='text-5xl font-bold'>404</h4>
      <p className='text-cl font-bold'>Oops! Something went wrong!</p>
    </div>
  }
  return (
    <div>Page</div>
  )
}

export default Page