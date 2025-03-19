import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, selectCount } from '../redux/counterSlice'

const EffectHook = () => {
  const [data, setData] = useState(null)
  const [fetchData, setFetchData] = useState(false)
  // useSelector used to get current value of the counter from redux
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  //Logs a message when the component is mounted and unmounted
  useEffect(() => {
    console.log('Component mounted')

    return () => {
      console.log('Component unmounted')
    }
  }, [])

  //Fetches data from API and implements cleanup function
  useEffect(() => {
    if (fetchData) {
      const fetchDataFromAPI = async () => {
        try {
          const response = await fetch('http://localhost:5000/tasks')
          const result = await response.json()
          setData(result)
          console.log('fetchDataFromAPI called')
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }

      fetchDataFromAPI()

      return () => {
        console.log('Cleanup function called')
      }
    }
  }, [fetchData])

  return (
    <div>
      {/* Button to fetch data from API */}
      <button
        className="bg-blue-900 text-white py-2 px-5 rounded-md text-center"
        onClick={() => setFetchData((fetchFlag) => !fetchFlag)}
      >
        Fetch Data
      </button>
      {data && <div>{JSON.stringify(data)}</div>}
      {/* Button Counter to check the useEffect functionality when toggled Counter button */}
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

export default EffectHook
