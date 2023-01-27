import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

type Props = {
  algorithm: string
  options: {
    n_elements: number
    delay_ms: number
  }
}

const useVisualizedAlgorithm = ({ algorithm, options }: Props) => {
  const [isSorting, setIsSorting] = useState(false)
  const [data, setData] = useState(
    Array.from({ length: options.n_elements || 10 }, () => 0)
  )
  const [swaps, setSwaps] = useState(0)
  const [iterations, setIterations] = useState(0)

  //observe n_elements change
  useEffect(() => {
    setData(Array.from({ length: options.n_elements }, () => 0))
  }, [options.n_elements])

  //get bounds of elements so divs wont overflow its parent
  const [ref, bounds] = useMeasure()

  const generate = () =>
    setData(
      Array.from({ length: options.n_elements }, () =>
        Math.round(Math.random() * bounds.height + 10)
      )
    )

  const run = async () => {
    setIsSorting(true)
    setIterations(0)
    switch (algorithm) {
      case 'bubble_sort':
        setSwaps(0)
        const VisualizeSwap = async (i: number, j: number) => {
          setData(prev => {
            let newArray = [...prev]
            let temp = newArray[i]
            newArray[i] = newArray[j]
            newArray[j] = temp
            return newArray
          })

          //pause execution and visualize swap
          await new Promise(resolve =>
            setTimeout(resolve, options.delay_ms || 350)
          )
        }

        // copy
        let arr = [...data]
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length - i - 1; j++) {
            setIterations(prev => prev + 1)
            if (arr[j] > arr[j + 1]) {
              //main array is swapping so we can visualize it
              await VisualizeSwap(j, j + 1)
              setSwaps(prev => prev + 1)
              //perform swap on arr, which is a copy
              let temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] = temp
            }
          }
        }
        setData(arr)
        break
      case 'insertion_sort':
        // code for insertion sort
        break
      case 'selection_sort':
        // code for selection sort
        break
      default:
        console.log('Invalid sort type')
    }
    setIsSorting(false)
  }

  return { run, generate, data, ref, isSorting, misc: { iterations, swaps } }
}

export default useVisualizedAlgorithm
