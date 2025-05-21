'use client'
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePaths } from '@/hooks/use-nav'
import { Menu } from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'
import { LogoSmall } from '@/svgs/logo-small'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { HelpDuoToneWhite } from '@/icons'
import { SubscriptionPlan } from '../subscription-plan'
import Items from '../sidebar/items'
import UpgradeCard from '../sidebar/upgrade'
import CreateAutomation from '../create-automation'
import Search from '../search'
import Notifications from '../notifications'
import MainBreadCrumb from '../bread-crumb/main-bread-crumb'

type Props = {
  slug: string
}

const Navbar = ({ slug }: Props) => {
  const { page } = usePaths()

  // currentPage is a boolean which detects if we're at either any of the pages or slugs
  // we want to render the Navbar only when we're at one of the PAGE_BREAD_CRUMBS variable  
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug
  
  return currentPage && 
  <div className='flex flex-col'>
    <div className='flex gap-x-3 lg:gap-x-5 justify-end'>
      <span className='lg:hidden flex items-center gap-x-2'>
        <Sheet
          side='left' 
          trigger={<Menu />}
          className='lg:hidden'
          children={
            <div className="
            my-3
            flex flex-col 
            gap-y-5
             w-full 
             h-full 
             p-3 
             bg-[#0e0e0e] 
             bg-opacity-90 
             bg-clip-padding 
             backdrop-filter 
             backdrop--blur__safari 
             backdrop-blur-3xl
             rounded-xl
             "
            >
              <div className="flex gap-x-2 items-center p-5 justify-center">
                <LogoSmall />
              </div>
              <div className='flex flex-col py-3'>
                <Items page={page} slug={slug} />
              </div>
              <div className='px-16'>
                <Separator 
                  className='bg-[#5C5C5F]'/>
              </div>
              <div className='px-3 flex flex-col gap-y-5'>
                <div className='flex gap-x-2'>
                  <ClerkAuthState />
                  <p className='py-1.5 text-[#9B9CA0]'>Profile</p>
                </div>
                <div className='flex gap-x-3'>
                  <HelpDuoToneWhite />
                  <p className='text-[#9B9CA0]'>Help</p>
                </div>
              </div>
              <SubscriptionPlan 
                type='FREE'>
                  <div className='flex-1 flex flex-col justify-end'>
                    <UpgradeCard />
                  </div>
                </SubscriptionPlan>
            </div>
          }
          >
          </Sheet>
      </span>
      <Search />
      <CreateAutomation />
      <Notifications />
    </div>
    <MainBreadCrumb
      page={page === slug ? 'Home' : page} // This is to prevent from dispalyng e.g. 'user123' as a breadcrumb
      slug={slug} />
  </div>
}

export default Navbar