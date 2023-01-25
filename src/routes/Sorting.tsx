import { Route, Routes, useParams } from 'react-router-dom'
import SortingAlgorithm from './SortingAlgorithm'
import SortingNav from './Nav'
import { useState } from 'react'

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

  const [options, setOptions] = useState()

  return (
    <main className="flex">
      <SortingNav isFormVisible={avaibleAlgorithms.includes(path)} />
      <section className=" ml-4 rounded-md w-full flex justify-center items-center font-bold text-2xl">
        <Routes>
          <Route
            path="bubble_sort"
            element={<SortingAlgorithm name="bubble" />}
          />
          <Route
            path="insertion_sort"
            element={<SortingAlgorithm name="insertion" />}
          />
          <Route
            path="selection_sort"
            element={<SortingAlgorithm name="selection" />}
          />
          <Route
            path="quick_sort"
            element={<SortingAlgorithm name="quick" />}
          />
          <Route
            path="merge_sort"
            element={<SortingAlgorithm name="merge" />}
          />
          <Route
            path="counting_sort"
            element={<SortingAlgorithm name="merge" />}
          />
          <Route
            path="radix_sort"
            element={<SortingAlgorithm name="merge" />}
          />
          <Route
            path="bucket_sort"
            element={<SortingAlgorithm name="merge" />}
          />
        </Routes>
      </section>
    </main>
  )
}

export default Sorting
