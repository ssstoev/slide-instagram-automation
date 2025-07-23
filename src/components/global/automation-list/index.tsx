'use client'
import { usePaths } from '@/hooks/use-nav'
import React, { useMemo, useState } from 'react'
import { useQueryAutomations } from '@/hooks/user-queries'
import CreateAutomation from '../create-automation'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import AutomationCard from './automation-card'
import { useAppSelector } from '@/redux/store'

const AutomationList = () => {
  // fetch all automations from DB and put them in cache
  const { data } = useQueryAutomations()
  // console.log('AUTOMATIONS in DB: \n', data?.data)

  // save the latest created automation to latestVariable
  const { data: createMutationData } = useMutationDataState(['create-automation'])
  const { data: deleteMutationData } = useMutationDataState(['delete-automation'])

  // console.log('CREATE MUTATION DATA: \n', createMutationData)
  const { pathname } = usePaths()

  const optimisticUiData = useMemo(() => {
    if (createMutationData && Array.isArray(createMutationData) && data) {
      // Get all new automations from mutationData
      const newAutomations = createMutationData
        .map(m => m.variables)
        // Filter out any undefined/null
        .filter(Boolean)
        // Filter out automations that already exist in data.data (by id)
        .filter(
          (newAuto) => !data.data.some(existing => existing.id === newAuto.id)
        );

      // Collect all IDs to delete
      const idsToDelete = deleteMutationData
        .map(m => m.variables)
        .filter(Boolean);
      // Combine: prepend new automations, then add server automations not in delete list or newAutomations
      const combined = [
        ...newAutomations,
        ...data.data.filter(
          automation =>
            !idsToDelete.includes(automation.id) &&
            !newAutomations.some(newAuto => newAuto.id === automation.id)
        ),
      ];
      
      return { data: combined };
    }

    return data || { data: [] };
  }, [createMutationData, deleteMutationData, data]);

  // console.log('AUTOMATIONS in OPTIMISTIC UI: \n', optimisticUiData?.data)
  
  // import the state of searchTerm using useAppSelector
  const searchTerm = useAppSelector(state => state.searchTerm.searchTerm);

  // Filter automations based on search term
  const filteredAutomations = useMemo(() => {
    const allAutomations = optimisticUiData.data || [];
    // Remove leading spaces from searchTerm
    const trimmedSearchTerm = searchTerm.trimStart();
    if (!trimmedSearchTerm) return allAutomations;
    const lower = trimmedSearchTerm.toLowerCase();    
    return allAutomations.filter(auto =>
      (auto.name && auto.name.toLowerCase().includes(lower)) ||
      (auto.keywords && auto.keywords.some(keyword => typeof keyword.word === 'string' && keyword.word.toLowerCase().includes(lower)))
    );
      // (auto.status && auto.status.toLowerCase().includes(lower))
  }, [optimisticUiData.data, searchTerm]);

  if (data?.status !== 200 || data.data.length <= 0 && filteredAutomations.length === 0) {
    console.log('no automations found')
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
        <h3 className="text-lg text-gray-400">No Automations </h3>
        <CreateAutomation/>
      </div>
    )
  }

  if (data?.status === 200 && data.data.length > 0 && filteredAutomations.length === 0) {
    // Automations exist, but none match the search
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
        <h3 className="text-lg text-gray-400">No Automations Found</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-3">
      {filteredAutomations.map((automation) => (
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

