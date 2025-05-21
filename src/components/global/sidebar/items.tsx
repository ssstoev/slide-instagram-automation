import { SIDEBAR_MENU } from '@/constants/menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  page: string
  slug: string
}

// compare the item label and the current page to highlight on the sidebar where you're at
// all will be highlighted except for the Home
const Items = ({ page, slug }: Props) => {

  console.log('current page', page)
  console.log('current slug', slug)

  return SIDEBAR_MENU.map((item) => (
    <Link 
      key={item.id} 
      href={`/dashboard/${slug}/${item.label === 'home' ? '/' : item.label}`}
      className={cn("capitalize flex gap-x-2 rounded-full p-3",
        page === item.label 
          && 'bg-[#303030]',
          page === slug 
            && item.label === 'home' 
            ? 'bg-[#303030]' 
            : 'text-[9B9CA0]'
    )}   
    >
      {item.icon}
      {item.label}
    </Link> 
  ))
}

export default Items