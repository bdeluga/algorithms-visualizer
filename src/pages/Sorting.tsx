const Sorting = () => {
  return (
    <main className="flex">
      <nav>
        <input
          type={'text'}
          className="bg-slate-700 p-2 mb-8 rounded-lg placeholder:font-bold"
          placeholder="Quick search..."
        />
        <ul className="space-y-4">
          <h5 className="font-bold">Comparision sorting</h5>
          <ul className="pl-2 space-y-3 border-l border-slate-600 ">
            <li>
              <h6 className="font-semibold">Iterative approach</h6>
              <ul className="pl-2">
                <li>
                  <button className="action">Bubble sort</button>
                </li>
                <li>
                  <button className="action">Insertion sort</button>
                </li>
                <li>
                  <button className="action">Selection sort</button>
                </li>
              </ul>
            </li>
            <li>
              <h6 className="font-semibold">Divide and conquere</h6>
              <ul className="pl-2">
                <li>
                  <button className="action">Bubble sort</button>
                </li>
                <li>
                  <button className="action">Insertion sort</button>
                </li>
                <li>
                  <button className="action">Selection sort</button>
                </li>
              </ul>
            </li>
          </ul>

          <li>
            <h5 className="font-bold mb-3">Non-comparision sorting</h5>
            <ul className="pl-4 border-l border-slate-600 ">
              <li>
                <button className="action">Counting sort</button>
              </li>
              <li>
                <button className="action">Radix sort</button>
              </li>
              <li>
                <button className="action">Bucket sort</button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <section className=" ml-4 rounded-md w-full"></section>
    </main>
  )
}

export default Sorting
