import DoubleGradientCard from '@/components/global/double-gradient-card'
import { DASHBOARD_CARDS, monthOrder } from '@/constants/dashboard'
import { BarDuoToneBlue } from '@/icons'
import React from 'react'
import Chart from './_components/chart'
import MetricsCard from './_components/metrics-card'
import { fetchCountAllUserMessages } from '@/actions/analytics'

type Props = {}

type DateCount = {
  month: string
  desktop: number
}

const Page = async (props: Props) => {

  // fetch the user messages
  const data = await fetchCountAllUserMessages();

  // aggregate the message data to get count of messages p/month
  const aggregatedArray = Object.entries(
    data.data.reduce((acc: Record<string, number>, current) => {
      const monthName = new Date(current.createdAt).toLocaleString('en-US', { month: 'short' });
      acc[monthName] = (acc[monthName] || 0) + 1;
      return acc;
    }, {})
  ).map(([month, count]) => ({
    month,
    desktop: count.toString()
  }));

  const sortedAggregatedArray = aggregatedArray.sort(
    (a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month)
  );

  console.log(`aggregated data: \n ${JSON.stringify(sortedAggregatedArray)}`)
  // console.log(`aggregated data: \n ${aggregatedArray}`)

  return (
    <div className='flex flex-col gp-y-10'>
      <div className='flex gap-5 lg:flex-row flex-col'>
        {
          DASHBOARD_CARDS.map((card) => 
            <DoubleGradientCard 
            key={card.id}
            {...card}/>
          )
        }
      </div>
      <div className='border-[1px] relative border-in-active/50 p-5 rounded-xl'>
        <span className='flex gap-x-1 z-50 items-center'>
          <BarDuoToneBlue />
          <div className='z-50'>
            <h2 className='text-2xl font-medium text-white'>
              Automated Activity
            </h2>
            <p className='text-text-secondary text-sm'>
              Automated 0 out of 1 interactions.
            </p>
          </div>
        </span>
        <div className='w-full flex lg:flex-row flex-col gap-5'>
          <div className='lg:w-6/12'>
          <Chart data={sortedAggregatedArray}/>
        </div>
        <div className='lg:w-6/12'>
          <MetricsCard />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Page