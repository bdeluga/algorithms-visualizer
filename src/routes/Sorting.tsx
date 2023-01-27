import { Route, Routes, useParams } from 'react-router-dom'
import SortingAlgorithm from './SortingAlgorithm'
import SortingNav from './Nav'
import { useState } from 'react'
import useMeasure from 'react-use-measure'

const Sorting = () => {
  const avaibleAlgorithms = [
    'bubble_sort',
    'insertion_sort',
    'selection_sort',
    'quick_sort',
    'merge_sort',
    'counting_sort',
    'radix_sort',
    'bucket_sort',
  ]

  const path = useParams()['*'] || ''

  const [options, setOptions] = useState({
    n_elements: 10,
    delay_ms: 0,
  })

  const [ref, bounds] = useMeasure()

  const [data, setData] = useState(Array.from({ length: 10 }, () => 0))

  return (
    <main className="flex">
      <SortingNav
        isFormVisible={avaibleAlgorithms.includes(path)}
        options={options}
        setOptions={setOptions}
        setData={setData}
        bounds={bounds}
        data={data}
      />
      <section
        className=" ml-10 rounded-md w-full  flex justify-center items-center font-bold text-2xl"
        ref={ref}
      >
        <Routes>
          <Route
            path="bubble_sort"
            element={<SortingAlgorithm name={path} data={data} />}
          />
        </Routes>
      </section>
    </main>
  )
}

export default Sorting
