import React from 'react';
import {useState} from 'react';

const Counter = () => {
  const[count,setCount] = useState(0);//count used as the counter and setCount used to update the count

  return (
    <div>
      <h1 className='font-bold'> Count: {count}</h1>
      <button className="bg-blue-900 text-white py-2 px-5 rounded-md text-center" onClick={() => setCount(count+1)}>Counter</button>
    </div>
  )
}

export default Counter;