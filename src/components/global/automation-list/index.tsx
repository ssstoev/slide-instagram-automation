'use client'
import { usePaths } from '@/hooks/use-nav'
import React, { useMemo } from 'react'
import { useQueryAutomations } from '@/hooks/user-queries'
import CreateAutomation from '../create-automation'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import AutomationCard from './automation-card'

const AutomationList = () => {
  // fetch all automations from DB and put them in cache
  const { data } = useQueryAutomations()
  console.log('AUTOMATIONS in DB: \n', data?.data)

  // save the latest created automation to latestVariable
  const { latestVariable } = useMutationDataState(['create-automation'])
  console.log(latestVariable)
  const { pathname } = usePaths()

  const optimisticUiData = useMemo(() => {
    if ((latestVariable && latestVariable?.variables &&  data)) {
      console.log('ADDED A NEW AUTOMATION')
      const test = [latestVariable.variables, ...data.data]
      return { data: test }
    }
    return data || { data: [] }
  }, [latestVariable, data])

  console.log('AUTOMATIONS in OPTIMISTIC UI: \n', optimisticUiData?.data)

  // const optimisticUiData = useMemo(() => {
  //   if (!data) return { data: [] }

  //   // If there’s a newly created automation, check if it's already in the list
  //   if (latestVariable?.variables) {
  //     const alreadyExists = data.data.find(
  //       (a) => a.id === latestVariable.variables.id
  //     )

  //     if (!alreadyExists) {
  //       return { data: [latestVariable.variables, ...data.data] }
  //     }
  //   }

  //   return data
  // }, [latestVariable, data])


  if (data?.status !== 200 || data.data.length <= 0 && optimisticUiData.data.length <= 0) {
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
        <h3 className="text-lg text-gray-400">No Automations </h3>
        <CreateAutomation />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-3">
      {optimisticUiData.data!.map((automation) => (
        <AutomationCard
          key={automation.id}
          automation={automation}
          pathname={pathname}
          />
              ))}
    </div>
  )
 }

export default AutomationList

