import React from 'react'
import classes from './SearchNameWorkspaceFilter.module.css'
import { AutoComplete, Typography } from 'antd'
import { useContext } from 'react'
import FilterContext from '../filter-context'
import WorkspaceContext from '../../WorkspacesTable/workspace-context'
import { useState } from 'react'
import { useEffect } from 'react'

const { Text } = Typography

const SearchNameWorkspaceFilter = () => {
  const dispatchFilters = useContext(FilterContext)[1]
  const workspaces = useContext(WorkspaceContext)
  const [names, setNames] = useState([])
  useEffect(() => {
    setNames(workspaces.map(workspace => workspace.name))
  }, [workspaces])
  return (
    <div className={classes.Root}>
      <Text strong>Search</Text>
      <AutoComplete
        dataSource={names}
        filterOption={(inputValue, option) => {
          return (
            option.props.children
              .toUpperCase()
              .includes(inputValue.toUpperCase()) === true
          )
        }}
        onChange={v => dispatchFilters({ type: 'search', payload: v })}
      />
    </div>
  )
}

export default SearchNameWorkspaceFilter
