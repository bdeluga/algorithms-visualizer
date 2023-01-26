import React, { useEffect, useState } from 'react'
import { useLoadedLayout } from '../hooks/useLoadedLayout'
import { useWindowSize } from '../hooks/useWindowSize'

type Props = {
  name: string
}

const SortingAlgorithm = ({ name }: Props) => {
  //! useMeasure should do the job
  const [screenHeight, setScreenHeight] = useState(window.innerHeight)
  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [data, setData] = useState(
    Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * (screenHeight - 200) + 50)
    )
  )
  const loaded = useLoadedLayout()

  return (
    <div className="w-full h-full  flex gap-2 rotate-180">
      {loaded && (
        <>
          {data.map((el, idx) => (
            <div
              key={idx}
              style={{ height: el }}
              className={`text-xs  w-full bg-slate-700 rotate-180 flex justify-center items-start p-0.5`}
            >
              {el}
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default SortingAlgorithm
