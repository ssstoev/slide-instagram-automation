'use client'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

// redux is a global state management tool
// it stores a global state and passes it to our components via a hook

type Props = {
  children: React.ReactNode
}

function ReduxProvider({ children }: Props) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReduxProvider