import { useEffect, useRef } from 'react'

// Dan Abramov's awesome custom hook for setInterval
const useInterval = (callback, delay = 1000) => {
  const cachedCallback = useRef()
  useEffect(() => {
    cachedCallback.current = callback
  }, [callback])
  useEffect(() => {
    const tick = () => {
      cachedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => {
        clearInterval(id)
      }
    }
  }, [callback, delay])
}

export default useInterval
