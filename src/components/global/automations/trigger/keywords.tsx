import { Input } from '@/components/ui/input'
import { useKeywords } from '@/hooks/use-automations'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import { useQueryAutomation } from '@/hooks/user-queries'
import { X } from 'lucide-react'
import React from 'react'

// From this component you can add/delete keywords

type Props = {
  id: string
}

function Keywords({ id }: Props) {

  // useKeywords hook to handle keyword mutations
  const { keyword, onValueChange, onKeyPress, deleteMutation } = useKeywords(id)

  // used for optimistic UI
  const { latestVariable } = useMutationDataState(['add-keyword'])

  // fetch already existing data for automation
  const { data } = useQueryAutomation(id)

  return (
    <div className='bg-background-80 flex flex-col gap-y-3 p-3 rounded-xl'>
      <p className='text-sm text-text-secondary'>
        Add words that trigger automations
      </p>
      <div className='flex flex-wrap justify-start gap-2 items-center'>
        {/* Render the confirmed keywords on the server and if an ID matches with 
            one in latestVariable do not render it. This avoids duplicte rendering.*/}
        {data?.data?.keywords 
        && data?.data?.keywords.length > 0 
        && data?.data?.keywords.map((word) => 
          word.id !== latestVariable.variables.id 
          && <div 
            key={word.id}
            className='bg-background-90 flex items-center gap-x-2 capitalize
            text-text-secondary py-1 px-4 rounded-full'>
              <p>{word.word}</p>
              <X
              size={20}
              onClick={() => deleteMutation({ id: word.id })}></X>
          </div>
        )}

        {/* Here we optimistically render the newly added keyword using latestVariable */}
        {latestVariable && latestVariable.status === 'pending' && (
          <div className='bg-background-90 flex items-center gap-x-2 capitalize
          text-text-secondary py-1 px-4 rounded-full'>
            {latestVariable.variables.keyword}
          </div>
        )}

        <Input 
          placeholder='Add keyword...'
          style={{
            width: Math.min(Math.max(keyword.length || 10, 2), 50) + 'ch'
          }}
          value={keyword}
          className='p-0 bg-transparent ring-0 border-none outline-none'
          onChange={onValueChange}
          onKeyUp={onKeyPress}
          />

      </div>
    </div>
  )
}

export default Keywords