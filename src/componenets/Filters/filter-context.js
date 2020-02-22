import React, { createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

const FilterContext = createContext()

const filterReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'date': {
      return { ...state, date: payload }
    }
    case 'policy': {
      return { ...state, policy: payload }
    }
    case 'search': {
      return { ...state, search: payload }
    }
    default: {
      throw new Error('Filter Reducer - not valid case')
    }
  }
}

export const FilterContextProvider = ({ children }) => {
  const [filters, dispatchFilters] = useReducer(filterReducer, {
    policy: 'all',
    search: '',
    date: ['', '']
  })
  return (
    <FilterContext.Provider value={[filters, dispatchFilters]}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContext
