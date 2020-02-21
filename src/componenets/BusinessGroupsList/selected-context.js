import React, { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const SelectedContext = createContext()
export const SelectedContextProvider = ({ children }) => {
  const [selected, setSelected] = useState({})

  useEffect(() => {
    console.log('selected', selected)
  }, [selected])
  return (
    <SelectedContext.Provider value={[selected, setSelected]}>
      {children}
    </SelectedContext.Provider>
  )
}

export default SelectedContext
