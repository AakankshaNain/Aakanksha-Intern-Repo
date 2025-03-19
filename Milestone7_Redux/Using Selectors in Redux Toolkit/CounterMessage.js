import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from '../redux/counterSlice'

const CounterMessage = () => {
  const count = useSelector(selectCount)
  let message = ''

  // Displaying messages based on the value of count
  if (count === 0) {
    message = 'Value of count is zero'
  } else if (count > 0 && count <= 10) {
    message = 'Value of count is between 0 and 10'
  } else {
    message = 'Value of count is greater than 10'
  }

  return (
    <div>
      <h1 className="font-bold"> {message}</h1>
    </div>
  )
}

export default CounterMessage
