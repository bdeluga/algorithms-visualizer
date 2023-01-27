//@ts-nocheck
import { faPlay, faRefresh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { RectReadOnly } from 'react-use-measure'

type Props = {
  isFormVisible: boolean
  options: any
  setOptions: any
  setData: any
  bounds: RectReadOnly
  data: number[]
}

const SortingNav = ({
  isFormVisible,
  options,
  setOptions,
  setData,
  bounds,
  data,
}: Props) => {
  const handleChanhge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptions((prevState: any) => ({
      ...prevState,
      n_elements: e.target.value,
    }))

    setData(Array.from({ length: Number(e.target.value) }, () => 0))
  }

  const sort = async () => {
    //copy
    let arr = [...data]
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          //main array is swapping so we can visualize it
          await VisualizeSwap(j, j + 1)

          //perform swap on arr, which is a copy
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    setData(arr)
  }

  const VisualizeSwap = async (i, j) => {
    setData(prev => {
      let newArray = [...prev]
      let temp = newArray[i]
      newArray[i] = newArray[j]
      newArray[j] = temp
      return newArray
    })

    //pause execution and visualize swap
    await new Promise(resolve => setTimeout(resolve, 10))
  }

  console.log(options)

  return (
    <nav className="h-fit">
      <ul className="space-y-2">
        <h5 className="font-bold text-slate-200">Comparision sorting</h5>
        <ul className="font-semibold border-l-2 border-slate-500">
          <li>
            <NavLink to={'bubble_sort'} className="action">
              Bubble sort
            </NavLink>
          </li>
          <li>
            <NavLink to={'insertion_sort'} className="action">
              Insertion sort
            </NavLink>
          </li>
          <li>
            <NavLink to={'selection_sort'} className="action">
              Selection sort
            </NavLink>
          </li>
          <li>
            <NavLink to={'quick_sort'} className="action">
              Quick sort
            </NavLink>
          </li>
          <li>
            <NavLink to={'merge_sort'} className="action">
              Merge sort
            </NavLink>
          </li>
        </ul>

        <li>
          <h5 className="font-bold text-slate-200 mb-3">
            Non-comparision sorting
          </h5>
          <ul className="font-semibold">
            <li>
              <NavLink to={'counting_sort'} className="action">
                Counting sort
              </NavLink>
            </li>
            <li>
              <NavLink to={'radix_sort'} className="action">
                Radix sort
              </NavLink>
            </li>
            <li>
              <NavLink to={'bucket_sort'} className="action">
                Bucket sort
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      {isFormVisible && (
        <div className="mt-10 flex-grow ">
          <div>
            <label
              htmlFor="medium-range"
              className="block mb-2 text-sm font-medium text-white"
            >
              Ilość elementów
            </label>
            <input
              type={'number'}
              className="border text-sm rounded-lg  block w-20 p-2.5 mb-2 bg-gray-700 border-gray-600  text-white  pointer-events-none"
              value={options.n_elements}
              readOnly
            />
            <input
              id="medium-range"
              type="range"
              min={10}
              max={100}
              className="w-3/4 h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              value={options.n_elements}
              step={1}
              onChange={handleChanhge}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="iteration"
              className="block mb-3 text-sm font-medium text-white "
            >
              Długość iteracji (ms)
            </label>
            <input
              type="number"
              id="iteration"
              className="border text-sm rounded-lg  block w-20 p-2.5 bg-gray-700 border-gray-600  text-white"
            />
          </div>
          <div className="flex mt-10 flex-col ">
            <span className="text-sm font-medium mb-2">Generate & Run</span>
            <button
              className="rounded-md p-3 w-3/4 bg-white text-gray-900 font-bold mb-4 mt-1"
              onClick={() => {
                setData(
                  Array.from({ length: options.n_elements }, () =>
                    Math.round(Math.random() * bounds.height + 10)
                  )
                )
              }}
            >
              <FontAwesomeIcon icon={faRefresh} />
            </button>
            <button
              className="rounded-md p-3 w-3/4 bg-green-400 text-gray-900 font-bold"
              onClick={sort}
            >
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default SortingNav
