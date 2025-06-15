'use client'
import { PencilDuoToneBlack } from '@/icons'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import ActivateAutomationButton from '../../activate-automation-button'
import { useQueryAutomation } from '@/hooks/user-queries'
import { useEditAutomation } from '@/hooks/use-automations'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import { Input } from '@/components/ui/input'

type Props = {
  id: string
}

const AutomationBreadCrumb = ({ id }: Props) => {
  // get the automation data
  const { data } = useQueryAutomation(id)

  // use mutation to update automations
  const { edit, enableEdit, inputRef, isPending} = useEditAutomation(id)

  // use latestVariable to display the mutated data instantly
  const { latestVariable } = useMutationDataState(['update-automation'])

  return (
    <div className='rounded-full w-full p-5 bg-[#18181B1a] flex justify-between items-center'>
      <div className='flex items-center gap-x-3 min-w-0 flex-1'>
        <p className='text-[#9b9ca0] truncate'>Automations</p>
        <ChevronRight className = 'flex-shrink-0' color='#9b9ca0' />
        <span className='flex gap-x-3 items-center'>
          {edit ? (
            <Input 
              ref={inputRef}
              placeholder={isPending ? latestVariable.variables : 'Add a new name'}
              className='w-80 bg-transparent h-8 outline-none text-base border-none p-0 placeholder:text-base' 
              />
          ) : (
            // <p className='cursor-pointer hover:opacity-75 duration-100 transition'>{data?.data?.name}</p>
            <p className='text-[#9b9c9e] truncate font-bold text-2xl'>
              {/* if we have an update put the new name using optimistic UI else put the old name */}
              {latestVariable?.variables 
              ? latestVariable?.variables.name
              : data?.data?.name}
            </p>
          )}
          {edit ? (
            <></>
            ) : (
              <span 
                onClick = {enableEdit} 
                className='cursor-pointer hover:opacity-75 duration-100'>
                  <PencilDuoToneBlack />
              </span>
            )}
        </span>
      </div>
      {/* <div className='flex gap-x-5'>
        <p className='text-text-secondary/60 text-sm truncate'>
          All updates are automatically saved
        </p>
        <div className='flex gap-x-5'>
          <p className='text-text-secondary text-sm'>Changes saved</p>
        </div>
      </div> */}
      <div className='flex-shrink-0'> 
        <ActivateAutomationButton id={id}/>
      </div>
    </div>
  )
}

export default AutomationBreadCrumb