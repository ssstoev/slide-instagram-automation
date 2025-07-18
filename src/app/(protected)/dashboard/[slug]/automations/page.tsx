'use client'
import AutomationList from '@/components/global/automation-list'
import CreateAutomation from '@/components/global/create-automation'
import { Check } from 'lucide-react'
import React from 'react'
import { usePathname } from 'next/navigation'

type Props = {}

const Page = (props: Props) => {
  const pathname = usePathname()

  return (
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 overflow-y-auto'>
      <div className='lg:col-span-4'>
        <AutomationList key={pathname}/>
      </div>
      <div className='lg:col-span-2'>
        <div className='flex flex-col rounded-xl bg-background-80 gap-y-6
          p-5 border-[1px] overflow-hidden border-in-active'>
            <div>
              <h2 className='text-xl'>Automations</h2>
              <p className='text-text-secondary'>
                Your live automations will show here.
              </p>
            </div>
            {/* WIP: Display the live/active automations below (Title and date) */}
            <div className='flex flex-col gap-y-3'>
              {[1, 2, 3].map((i) => (
                <div key={i} className='flex items-start justify-between'>
                  <div className='flex flex-col'>
                    <h3 className='font-medium'>
                      Direct traffic towards website
                    </h3>
                    <p className='text-text-secondary text-sm'>October 5th</p>
                  </div>
                  <Check />
                </div>
              ))}
            </div>
            <CreateAutomation />
          </div>
      </div>
    </div>
  )
}

export default Page