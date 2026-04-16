import { createContext, useContext } from 'react'

export const PracticeContext = createContext(null)

export function usePractice() {
  const value = useContext(PracticeContext)
  if (!value) {
    throw new Error('usePractice must be used within a practice route')
  }
  return value
}
