import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, selectCount } from '../redux/counterSlice'

const Counter = () => {
  // useSelector used to get current value of the counter from redux
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className="font-bold"> Count: {count}</h1>
      <button
        className="bg-blue-900 text-white py-2 px-5 rounded-md text-center"
        onClick={() => dispatch(increment())}
      >
        Counter
      </button>
    </div>
  )
}

export default Counter
