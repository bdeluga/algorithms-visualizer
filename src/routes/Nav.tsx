//@ts-nocheck
import { faPlay, faRefresh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

type Props = {
  isFormVisible: boolean
  options: any
  setOptions: any
  run: any
  generate: any
  isSorting: boolean
  data: number[]
  misc: any
}

const SortingNav = ({
  isFormVisible,
  options,
  setOptions,
  run,
  generate,
  isSorting,
  data,
  misc,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'iteration') {
      return setOptions((prevState: any) => ({
        ...prevState,
        delay_ms: e.target.value,
      }))
    }
    setOptions((prevState: any) => ({
      ...prevState,
      n_elements: e.target.value,
    }))
  }

  const isSorted = (arr: number[]) => {
    return arr.every((val, idx, arr) => !idx || val >= arr[idx - 1])
  }

  const isEmpty = (arr: number[]) => {
    return arr.every(val => val === 0)
  }

  return (
    <nav className="h-fit">
      <ul className="space-y-2">
        <h5 className="font-bold text-slate-300">Comparision sorting</h5>
        <ul className="font-semibold border-l-2 border-slate-500">
          <li>
            <NavLink
              to={'bubble_sort'}
              className="action"
              style={({ isActive }) => ({
                color: isActive && 'rgb(226 232 240)',
              })}
            >
              Bubble sort
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'insertion_sort'}
              className="action"
              style={({ isActive }) => ({
                color: isActive && 'rgb(226 232 240)',
              })}
            >
              Insertion sort
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'selection_sort'}
              className="action"
              style={({ isActive }) => ({
                color: isActive && 'rgb(226 232 240)',
              })}
            >
              Selection sort
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'quick_sort'}
              className="action"
              style={({ isActive }) => ({
                color: isActive && 'rgb(226 232 240)',
              })}
            >
              Quick sort
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'merge_sort'}
              className="action"
              style={({ isActive }) => ({
                color: isActive && 'rgb(226 232 240)',
              })}
            >
              Merge sort
            </NavLink>
          </li>
        </ul>

        <li>
          <h5 className="font-bold text-slate-300 mb-3">
            Non-comparision sorting
          </h5>
          <ul className="font-semibold">
            <li>
              <NavLink
                to={'counting_sort'}
                className="action"
                style={({ isActive }) => ({
                  color: isActive && 'rgb(226 232 240)',
                })}
              >
                Counting sort
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'radix_sort'}
                className="action"
                style={({ isActive }) => ({
                  color: isActive && 'rgb(226 232 240)',
                })}
              >
                Radix sort
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'bucket_sort'}
                className="action"
                style={({ isActive }) => ({
                  color: isActive && 'rgb(226 232 240)',
                })}
              >
                Bucket sort
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      {isFormVisible && (
        <>
          <div
            className={`mt-10 flex-grow  ${
              isSorting && 'pointer-events-none opacity-30'
            }`}
          >
            <div>
              <label
                htmlFor="medium-range"
                className="block mb-2 text-sm font-medium text-white"
              >
                N elements
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
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="iteration"
                className="block mb-3 text-sm font-medium text-white "
              >
                Iteration (ms)
              </label>
              <input
                type="number"
                id="iteration"
                className="border text-sm rounded-lg  block w-20 p-2.5 bg-gray-700 border-gray-600  text-white placeholder:text-gray-300 placeholder:font-semibold"
                placeholder="350"
                onChange={handleChange}
              />
            </div>
            <div className="flex mt-10 flex-col ">
              <span className="text-sm font-medium">Generate</span>
              <button
                className="rounded-md p-3 w-3/4 bg-white text-gray-900 font-bold mb-4 mt-1"
                onClick={generate}
              >
                <FontAwesomeIcon icon={faRefresh} />
              </button>
              <span className="text-sm font-medium ">Run</span>

              <button
                className="rounded-md p-3 w-3/4 bg-green-400 text-gray-900 font-bold disabled:bg-green-400/30"
                onClick={run}
                disabled={isEmpty(data) || isSorted(data)}
              >
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </div>
          </div>
          <div>Iterations: {misc.iterations}</div>
          <div>Swaps: {misc.swaps}</div>
        </>
      )}
    </nav>
  )
}

export default SortingNav
