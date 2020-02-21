import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import SelectedContext from '../BusinessGroupsList/selected-context'

const workspaceFilter = () => {
  return true
}

const useWorkspaceData = () => {
  const [workspaces, setWorkspaces] = useState([])
  const [cache, setCache] = useState({})
  const [selected] = useContext(SelectedContext)
  useEffect(() => {
    const getData = async () => {
      const keys = Object.keys(selected)
      let workspaceData = []
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        let data = null
        if (cache[key]) {
          data = cache[key]
        } else {
          try {
            const res = await axios.get(
              'http://localhost:4741/workspaces/' + key
            )
            data = res.data
            setCache(prevCache => {
              prevCache[key] = data
              return { ...prevCache }
            })
          } catch (err) {
            data = null
          }
        }
        workspaceData = [...workspaceData, ...data.workspaces]
      }
      setWorkspaces(workspaceData.filter(workspaceFilter))
    }
    getData()
  }, [selected])
  return [workspaces, setWorkspaces]
}

export default useWorkspaceData
