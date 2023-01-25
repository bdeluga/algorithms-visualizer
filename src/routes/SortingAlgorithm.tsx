import React from 'react'
import { useWindowSize } from '../hooks/useWindowSize'

type Props = {
  name: string
}

const SortingAlgorithm = ({ name }: Props) => {
  const { height } = useWindowSize()

  const random_data = Array.from({ length: 50 }, () =>
    Math.floor(Math.random() * (height! - 200) + 50)
  )

  return (
    <div className="w-full h-full  flex gap-2 rotate-180">
      {random_data.map(el => (
        <div
          style={{ height: el }}
          className={`text-xs  w-full bg-slate-700 rotate-180 flex justify-center items-start p-0.5`}
        >
          {el}
        </div>
      ))}
    </div>
  )
}

export default SortingAlgorithm
