'use client'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  addOne,
  initCounterState,
  substractOne,
} from '@/store/counter/CounterSlice'
import { useEffect } from 'react'

interface Props {
  value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {
  // const [counter, setCounter] = useState(value);

  const counter = useAppSelector((state) => state.counter.counter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initCounterState(value))
  }, [dispatch, value])

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}>
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(substractOne())}>
          -1
        </button>
      </div>
    </>
  )
}
