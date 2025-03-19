import React, { useState, useCallback } from 'react'
import CallbackChild from './CallbackChild'

const CallbackHook = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // useCallback is used to memoize the function so that it does not re-create the function
  // every time the parent component re-renders
  const handleTextChange = useCallback(
    (e) => {
      setText(e.target.value)
    },
    [setText],
  )

  return (
    <div>
      <h1 className="font-bold">Count: {count}</h1>
      <button
        className="bg-blue-900 text-white py-2 px-5 rounded-md text-center"
        onClick={() => setCount(count + 1)}
      >
        Counter
      </button>
      {/* function handleTextChange passed as a prop in CallbackChild */}
      <CallbackChild text={text} onTextChange={handleTextChange} />
    </div>
  )
}

export default CallbackHook
