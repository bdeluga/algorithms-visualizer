import { useLoadedLayout } from '../hooks/useLoadedLayout'

type Props = {
  data: number[]
}

const SortingAlgorithm = ({ data }: Props) => {
  const loaded = useLoadedLayout()

  if (!loaded) return null

  return (
    <div
      className="w-full h-full flex gap-2   relative"
      style={{
        transform: 'rotateX(180deg)',
      }}
    >
      {data.map((el, idx) => (
        <div
          key={idx}
          style={{ height: el }}
          className={`w-full bg-slate-700 flex justify-center items-start p-0.5 transition-[height] duration-300`}
        />
      ))}
    </div>
  )
}

export default SortingAlgorithm
