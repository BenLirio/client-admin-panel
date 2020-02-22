import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import SelectedContext from '../BusinessGroupsList/selected-context'
import { useCallback } from 'react'
import FilterContext from '../Filters/filter-context'

const useWorkspaceData = () => {
  const [workspaces, setWorkspaces] = useState([])
  const [cache, setCache] = useState({})
  const [selected] = useContext(SelectedContext)
  const [filters] = useContext(FilterContext)

  const filterWorkspaces = useCallback(
    workspace => {
      const dateCreated = Date.parse(workspace.date_created)
      const after = Date.parse(filters.date[0]) || 0
      const before = Date.parse(filters.date[1]) || Infinity
      const validPolicy =
        filters.policy === workspace.policy || filters.policy === 'all'
      const validSearch = workspace.name
        .toLowerCase()
        .includes(filters.search.toLowerCase())
      const validDate = after < dateCreated && dateCreated < before
      return validDate && validPolicy && validSearch
    },
    [filters]
  )

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
      setWorkspaces(workspaceData.filter(filterWorkspaces))
    }
    getData()
  }, [selected, filterWorkspaces])
  return [workspaces, setWorkspaces]
}

export default useWorkspaceData
