import { Button } from '@/components/ui/button'
import { PLANS } from '@/constants/pages'
import {cn} from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import React from 'react'

type Props = {
  label: string
  current: 'PRO' | 'FREE'
  landing?: boolean       // whether they're landing from the landing page or not
}

const PaymentCard = ({ label, current, landing }: Props) => {
  return (
    <div className={cn(
      label !== current ? 'bg-in-active'
      : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
      'p-[2px] rounded-xl overflow-hidden'
    )}>
      <div className={cn(
        landing && 'radial--gradient--pink',
        'flex flex-col rounded-xl pl-5 py-5 pr-10 bg-background-90'
      )}>
        {landing ? (
          <h2 className='text-2xl'>
            {label === 'PRO' && 'Premium Plan'}
            {label === 'FREE' && 'Free Plan'}
          </h2>
        ) : (
          <h2 className='text-2xl'>
            {label === current
            ? 'Your current plan'
            : current === 'PRO'
            ? 'Downgrade'
            : 'Upgrade'}
          </h2>
        )}
        <p className='text-text-secondary text-sm mb-2'>
          Focus on the content creation and let us take care of the rest!
        </p>
        {label === 'PRO' ? (
          <span className='bg-gradient-to-r 
            from-[#CC3BD4]
            font-bold
            to-[#D064AC]
            bg-clip-text
            text-transparent'>
              Smart AI
          </span>
        ) : (
          <span className='font-bold text-3xl text-text-secondary'>Standard</span>
        )}
        {label === 'PRO' ? (
          <p className='mb-2'>
            <b className='text-xl'>$99</b>/month
          </p>
        ) : (
          <p className='mb-2 text-xl'>
            Free
          </p>
        )}
        {PLANS[label === 'PRO' ? 1 : 0].features.map((item) => (
          <p key={item}
            className='mt-2 text-muted-foreground flex gap-4'>
              <CircleCheck className='text-indigo-500 w-7 h-7 flex-shrink-0' />
            {item}
          </p>
        ))}
        {landing ? (
          <Button className={cn(
            'rounded-full mt-5',
            label === 'PRO' 
            ? 'bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500'
            : 'bg-background-80 text-white hover:text-background-80'
          )}>
            {label === current 
              ? 'Get Started'
              : current === 'PRO'
              ? 'Free'
              : 'Get Started'}
          </Button>
        ) : (
          <Button 
            className='rounded-full mt-5 bg-background-80 text-white hover:text-background-80'
            disabled={label === current}>
              {label === current
                ? 'Active'
                : current === 'PRO'
                ? 'Downgrade'
                : 'Upgrade'}
          </Button>
        )}
      </div>
    </div>
  )
}

export default PaymentCard