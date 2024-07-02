'use client'

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppDispatch, useAppSelector } from '@/store'
import { IoCartOutline } from 'react-icons/io5'

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter.counter)
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Counter"
        subtitle="Porducts for counter"
        href="/dashboard/counter"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        title={counter}
      />
      {/* <SimpleWidget /> */}
    </div>
  )
}
