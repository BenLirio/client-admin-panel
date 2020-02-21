import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import SelectedContext from './selected-context'

const useSelected = () => {
  const [selected, setSelected] = useContext(SelectedContext)
  const toggleSelected = (id, state) => {
    setSelected(selected => {
      if (!state) {
        delete selected[id]
      } else {
        selected[id] = true
      }
      return { ...selected }
    })
  }
  return [selected, toggleSelected]
}

export default useSelected
