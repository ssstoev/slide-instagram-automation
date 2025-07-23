import React from 'react'
import { Check } from 'lucide-react'
import { fetchActiveAutomations } from '@/actions/automations';
import CreateAutomation from '../create-automation';
import { useQueryAutomations } from '@/hooks/user-queries';
import { getMonth } from '@/lib/utils';

type Props = {}

const ActiveAutomations = (props: Props) => {
  
  // fetch user automations
  const { data } = useQueryAutomations()

  const liveAutomations = data.data.filter(automation => 
    automation.active === true
  )

  return (
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
          {liveAutomations.map((automation) => (
            <div key={automation.id} className='flex items-start justify-between'>
              <div className='flex flex-col'>
                <h3 className='font-medium'>
                  {automation.name}
                </h3>
                <p className='text-text-secondary text-sm'>
                  {getMonth(automation.createdAt.getUTCMonth() + 1)}{' '}
                  {automation.createdAt.getUTCDate() === 1
                    ? `${automation.createdAt.getUTCDate()}st`
                    : `${automation.createdAt.getUTCDate()}th`}{' '}
                  {automation.createdAt.getUTCFullYear()}
                </p>
              </div>
              <Check />
            </div>
          ))}
        </div>
        <CreateAutomation />
      </div>
  )
}

export default ActiveAutomations