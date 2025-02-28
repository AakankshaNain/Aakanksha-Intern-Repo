import React from 'react';

//name prop used to pass the name dynamically
const HelloWorld = ({name}) => {
  return (
    <div className='font-bold text-center text-blue-500'>{/**tailwindcss has this format of text-colorname-number */}
      Hello, {name}!
    </div>
  )
}

export default HelloWorld;