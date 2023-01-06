import { useEffect, useReducer, useRef } from 'react'

interface State<T> {
  data?: T
  error?: T
  loading?: boolean
}

type Cache<T> = { [url: string]: T }

type Action<T> =
  | { type: 'loading'; payload?: boolean }
  | { type: 'data'; payload: T }
  | { type: 'error'; payload: T | any}

function useFetch<T = unknown>(url?: string, options?: RequestInit): State<T> {
  const cache = useRef<Cache<T>>({})

  const cancelRequest = useRef<boolean>(false)

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: false
  }

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        if(!action.payload) {
          return { ...initialState, loading: !initialState.loading }
        }
        return { ...initialState, loading: action.payload }
      case 'data':
        return { ...initialState, data: action.payload }
      case 'error':
        return { ...initialState, error: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) return

    cancelRequest.current = false

    const fetchData = async () => {
      dispatch({ type: 'loading' })

      if (cache.current[url]) {
        dispatch({ type: 'data', payload: cache.current[url] })
        return
      }

      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = (await response.json()) as T
        cache.current[url] = data
        if (cancelRequest.current) return

        dispatch({ type: 'data', payload: data })
      } catch (error) {
        if (cancelRequest.current) return

        dispatch({ type: 'error', payload: error as Error })
      }
    }

    fetchData()

    return () => {
      cancelRequest.current = true
    }
  }, [url])

  return state
}

export default useFetch
