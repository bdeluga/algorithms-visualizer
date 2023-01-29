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
    const VisualizeSwap = async (i: number, j: number) => {
      setData(prev => {
        let newArray = [...prev]
        let temp = newArray[i]
        newArray[i] = newArray[j]
        newArray[j] = temp
        return newArray
      })

      //pause execution and visualize swap
      await new Promise(resolve => setTimeout(resolve, options.delay_ms || 350))
    }

    setIsSorting(true)
    setIterations(0)
    let arr = [...data]
    switch (algorithm) {
      case 'bubble_sort':
        setSwaps(0)
        // copy
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
        setSwaps(0)
        for (let i = 1; i < arr.length; i++) {
          setIterations(prev => prev + 1)
          let key = arr[i]
          let j = i - 1
          while (j >= 0 && arr[j] > key) {
            // Visualize the swap
            await VisualizeSwap(j, j + 1)
            setSwaps(prev => prev + 1)
            // Perform the swap
            arr[j + 1] = arr[j]
            j = j - 1
          }
          arr[j + 1] = key
        }
        setData(arr)
        // code for insertion sort
        break
      case 'selection_sort':
        setSwaps(0)
        for (let i = 0; i < arr.length - 1; i++) {
          setIterations(prev => prev + 1)
          let minIndex = i
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
              minIndex = j
            }
          }
          if (minIndex !== i) {
            // Visualize the swap
            await VisualizeSwap(i, minIndex)
            setSwaps(prev => prev + 1)
            // Perform the swap
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
          }
        }
        setData(arr)
        break

      default:
        console.log('Invalid sort type')
    }
    setIsSorting(false)
  }

  return { run, generate, data, ref, isSorting, misc: { iterations, swaps } }
}

export default useVisualizedAlgorithm
