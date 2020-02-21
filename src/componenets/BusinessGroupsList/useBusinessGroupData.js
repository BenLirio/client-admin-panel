import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const useBusinessGroupData = () => {
  const [businessGroups, setBusinessGroups] = useState([])
  useEffect(() => {
    const getBusinessGroups = async () => {
      const res = await axios.get('http://localhost:4741/businessGroups/')
      setBusinessGroups(res.data.businessGroups)
    }
    getBusinessGroups()
  }, [])
  return [businessGroups, null]
}

export default useBusinessGroupData
