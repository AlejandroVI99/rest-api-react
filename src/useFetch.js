import { useState, useEffect } from 'react'

export function useFetch(url){
    const [data, setData] = useState(null)
    useEffect(() => {
      fetch('https://rest-api-test-7511.fly.dev/api/v1/bonds/')
      .then((res) => res.json())
      .then((data) => setData(data))
    }, [])
     return {data}
}
