'use client'
import AutomationList from '@/components/global/automation-list'
import CreateAutomation from '@/components/global/create-automation'
// import { Check } from 'lucide-react'
import React from 'react'
import { usePathname } from 'next/navigation'
import ActiveAutomations from '@/components/global/active-automations'

type Props = {}

const Page = (props: Props) => {
  const pathname = usePathname()

  return (
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 overflow-y-auto'>
      <div className='lg:col-span-4'>
        <AutomationList key={pathname}/>
      </div>
      <div className='lg:col-span-2'>
        <ActiveAutomations />
      </div>
    </div>
  )
}

export default Page