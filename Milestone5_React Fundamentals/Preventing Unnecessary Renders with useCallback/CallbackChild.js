import React from 'react'

// memo here is used to memoize the component so that it renders when props change
const CallbackChild = React.memo(({ text, onTextChange }) => {
  console.log('CallbackChild re-rendered!')

  return (
    <div>
      <h2 className="font-bold">Text: {text}</h2>
      <input
        type="text"
        class="border p-4 bg-gray-100"
        placeholder="Enter text"
        value={text}
        onChange={onTextChange}
      />
    </div>
  )
})

export default CallbackChild
