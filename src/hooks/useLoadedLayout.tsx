import { useState, useEffect } from 'react'

// Hook
export const useLoadedLayout = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])
  return loaded
}
