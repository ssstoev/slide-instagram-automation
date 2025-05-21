'use client'
import { Card, CardContent } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis } from 'recharts'

type Props = {}

const chartData = [
  {month: 'Jan', desktop: '44'},
  {month: 'Feb', desktop: '32'},
  {month: 'Mar', desktop: '66'},
  {month: 'Apr', desktop: '73'},
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))'
  }
}
const Chart = (props: Props) => {
  return (
    <Card className='border-none p-0'>
      <CardContent className='p-0'>
        <ResponsiveContainer height={'300'} width={'100'}>
          <ChartContainer config={chartConfig}>
            <AreaChart 
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}>
              <CartesianGrid vertical={false}/>
              <XAxis 
                dataKey='month'
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
                />
              <ChartTooltip 
                cursor={false}
                content={<ChartTooltipContent indicator='line' />}
              />
              <Area 
                dataKey='desktop'
                type='natural'
                fill='var(--color-desktop)'
                fillOpacity={0.4}
                stroke='var(--color-dektop)'
              />
            </AreaChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default Chart