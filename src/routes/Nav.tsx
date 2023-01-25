import { NavLink } from 'react-router-dom'

type Props = {
  isFormVisible: boolean
}

const SortingNav = ({ isFormVisible }: Props) => {
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
      {isFormVisible && <div className="mt-10">siema</div>}
    </nav>
  )
}

export default SortingNav
