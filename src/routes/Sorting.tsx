import { Route, Routes, useParams } from 'react-router-dom'
import SortingAlgorithm from './SortingAlgorithm'
import SortingNav from './Nav'
import { useState } from 'react'
import useVisualizedAlgorithm from '../hooks/useVisualizedAlgorithm'

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

  const { data, run, generate, ref, isSorting, misc } = useVisualizedAlgorithm({
    algorithm: path,
    options,
  })

  return (
    <main className="flex">
      <SortingNav
        isFormVisible={avaibleAlgorithms.includes(path)}
        options={options}
        setOptions={setOptions}
        run={run}
        generate={generate}
        isSorting={isSorting}
        data={data}
        misc={misc}
      />
      <section
        className=" ml-10 rounded-md w-full  flex justify-center items-center font-bold text-2xl"
        ref={ref}
      >
        <Routes>
          {avaibleAlgorithms.map((name, idx) => (
            <Route
              path={name}
              element={<SortingAlgorithm data={data} />}
              key={idx}
            />
          ))}
        </Routes>
      </section>
    </main>
  )
}

export default Sorting
