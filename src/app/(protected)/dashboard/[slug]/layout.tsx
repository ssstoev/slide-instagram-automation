import Navbar from '@/components/global/navbar'
import Sidebar from '@/components/global/sidebar'
import React from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { PrefetchUserAutomations, PrefetchUserProfile } from '@/react-query/prefetch'

type Props = {
  children: React.ReactNode
  params: { slug: string }
}

const Layout = async ({ children, params }: Props) => {

  // Query Client - fetch user info and pass it into components
  const query = new QueryClient()

  // create helper function which prefetches all data for different server actions

  await PrefetchUserProfile(query)
  await PrefetchUserAutomations(query)

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className='p-5'>
        <Sidebar slug={params.slug}/>
        <div className='
          lg:ml-[250px]
          lg:pl-10
          lg:py-5
          flex
          flex-col
          overflow-auto
          '>
            <Navbar slug={params.slug}/>
              {children}
        </div>
      </div>
    </HydrationBoundary>
  )
}

export default Layout