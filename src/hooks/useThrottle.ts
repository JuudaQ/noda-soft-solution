// Выведем в useThrottle не только задержку апдейта данных,
// но и состояние загрузки, хотя в данном случае, состояние loading
// можно было бы и обработать в блоке try/catch/finally в хуке
// загрузки данных

import { useEffect, useRef, useState } from 'react'

import isEqual from 'lodash/isEqual'

interface IThrottle<T> {
  throttled: T,
  loading: boolean,
}

function useThrottle<T>(value: T, delay: number = 500): IThrottle<T> {
  const [throttled, setThrottled] = useState<T>(value)
  const [loading, setLoading] = useState<boolean>(false)
  const lastUpdated = useRef<number>(Date.now())

  useEffect(() => {
    if (!isEqual(throttled, value)) {
      setLoading(true)
    }
  }, [throttled, value])

  useEffect(() => {
    if (Date.now() >= lastUpdated.current + delay) {
      lastUpdated.current = Date.now()
      setThrottled(value)
      setLoading(false)
    } else {
      const timer = setTimeout(() => {
        lastUpdated.current = Date.now()
        setThrottled(value)
        setLoading(false)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [delay, value])

  return { throttled, loading }
}

export default useThrottle
