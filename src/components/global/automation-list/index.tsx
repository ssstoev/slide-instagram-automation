'use client'

import { usePaths } from '@/hooks/use-nav'
import { cn, getMonth } from '@/lib/utils'
import Link from 'next/link'
import React, { useMemo } from 'react'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'
import { useQueryAutomations } from '@/hooks/user-queries'
import CreateAutomation from '../create-automation'
import { useMutationDataState } from '@/hooks/use-mutation-data'

type Props = {}

const AutomationList = (props: Props) => {
  // fetch all existing automations
  const { data } = useQueryAutomations()

  // console.log("AutomationList - data", data)
  // the latest variable displays what is the status of the mutation (pending/completed, etc.)
  const { latestVariable } = useMutationDataState(['create-automation'])
  // console.log('latest variable', latestVariable)

  const { pathname } = usePaths()
  
  // if no automations exist show 'no automations'
  if (data?.status !== 200 || data.data.length <= 0){
    return <div className='h-[70v] flex jusitfy-center items-center flex-col gap-y-3'>
      <h3 className='text-lg text-gry-400'>No Automations</h3>
      <CreateAutomation/>
    </div>
  }
  // we use the latestVariable to be able to instantly render changes (even before request is send to server)
  // useMemo hook tracks if there are any changes to the latestVariable or the data itself and only re-renders if there're such changes
  // this way we don't need to wait for the server response => optimisticUI 
  const optimisticUiData = useMemo(() => {
    if (latestVariable?.variables) {
      const test = [latestVariable.variables, ...data.data]

      return { data: test }
    }

    return data
  }, [latestVariable, data])
  
  // if (latestVariable?.status !== 'success' || latestVariable.variables.length <= 0){
  //   return <div className='h-[70v] flex jusitfy-center items-center flex-col gap-y-3'>
  //     <h3 className='text-lg text-gry-400'>No Automations</h3>
  //     <CreateAutomation/>
  //   </div>
  // }

  // WIP: add Delete Automation Option
  return (
    <div className='flex flex-col gap-y-3'>
      {optimisticUiData.data!.map((automation) => (
                <Link 
                key={automation.id} 
                href={`${pathname}/${automation.id}`}
                className='bg-[#1d1d1d] hover:opacity-80 transition duration-100 rounded-xl
                  p-5 border-[1px] radial--gradient--automations flex border-[#545454]'>
                  <div className='flex flex-col flex-1 items-start'>
                    <h2 className='text-xl font-semibold'>{automation.name}</h2>
                    <p className='text-[#9B9CA0] text-sm font-light mb-2'>Automation description ...</p>
                      {automation.keywords.length > 0 ? (
                      <div className='flex gap-x-2 flex-wrap mt-3'>
                                  {/* the numbers will be replaced with key */}
                          {/* @ts-ignore */}
                          {automation.keywords.map((keyword, key) => (
                              <div 
                                key={keyword.id}
                                className={cn(
                                  'rounded-full px-4 py-1 capitalize',
                                  (key + 1) % 1 == 0 &&
                                    'bg-keyword-green/15 border-2 border-keyword-green',
                                  (key + 1) % 2 == 0 &&
                                    'bg-keyword-purple/15 border-2 border-keyword-purple',
                                  (key + 1) % 3 == 0 &&
                                    'bg-keyword-yellow/15 border-2 border-keyword-yellow',
                                  (key + 1) % 4 == 0 &&
                                    'bg-keyword-red/15 border-2 border-keyword-red'
                                )}
                                >{keyword.word}</div>
                            ))}
                        </div>
                        ) : (
                          <div className='rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1'>
                          <p className='text-sm text-[#bfc0c3]'>No keywords</p>
                          </div>
                        )}                    
                  </div>
                  <div className='flex flex-col justify-between'>
                    <p className='capitalize text-sm font-light text-[#9b9ca0]'>
                      {getMonth(automation.createdAt.getUTCMonth() + 1)}{' '}
                      {automation.createdAt.getUTCDate() === 1 ? `${automation.createdAt.getUTCDate()}st` : 
                      `${automation.createdAt.getUTCDate()}th`}{' '}
                      {automation.createdAt.getUTCFullYear()}
                    </p>
                    
                    {automation.listener?.listener === 'SMARTAI' ? (
                      <GradientButton type='BUTTON' className='w-full bg-background-80 text-white hover:bg-background-80'>
                          Smart AI
                      </GradientButton>
                    ) : (
                      <Button className='bg-background-80 hover:bg-background-80 text-white'>Standard</Button>
                    )}
        
                  </div>
                </Link>
              ))
      }

    </div>
  )
}

export default AutomationList