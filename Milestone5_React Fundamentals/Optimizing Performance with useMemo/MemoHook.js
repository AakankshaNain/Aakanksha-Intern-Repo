import React, { useMemo, useState } from 'react'

// Implements an expensive calculation
const factorial = (n) => {
  console.log('Calculating factorial of ${n}')
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

const MemoHook = () => {
  // State to store the number
  const [num, setNum] = useState(10)
  // Unrelated state count
  const [count, setCount] = useState(0)

  // Memoizes the factorial function to prevent re-computation
  const numFactorial = useMemo(() => factorial(num), [num])

  const largeList = useMemo(() => {
    const list = []
    for (let i = 0; i < 500; i += 1) {
      list.push(i)
    }
    return list
  }, [])

  return (
    <div>
      <h2 className="font-bold">
        Factorial of {num}: {numFactorial}
      </h2>
      <button
        className="bg-blue-900 text-white py-2 px-5 rounded-md text-center border inline-block"
        onClick={() => setNum(num + 1)}
      >
        Increase
      </button>
      <button
        className="bg-blue-900 text-white py-2 px-5 rounded-md text-center border inline-block"
        onClick={() => setNum(num - 1)}
      >
        Decrease
      </button>
      <br />
      <button
        className="bg-blue-900 text-white py-2 px-5 rounded-md text-center border"
        onClick={() => setCount(count + 1)}
      >
        Unrelated Count : {count}
      </button>
      {/* Renders a large list of numbers */}
      <ul>
        {largeList.map((item) => (
          <li key={item} className="text-lg text-grey-500">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MemoHook
