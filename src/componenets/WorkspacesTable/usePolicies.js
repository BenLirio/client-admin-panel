import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const usePolicies = ({ workspaces }) => {
  const [policies, setPolicies] = useState({})
  useEffect(() => {
    if (workspaces.length) {
      const obj = workspaces.reduce((state, { _id, policy }) => {
        state[_id] = policy
        return state
      }, {})
      setPolicies(obj)
    } else {
      setPolicies({})
    }
  }, [workspaces])
  const changePolicy = (id, policy) => {
    setPolicies(policies => {
      policies[id] = policy
      return { ...policies }
    })
  }
  return [policies, changePolicy]
}

export default usePolicies
