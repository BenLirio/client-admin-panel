import React from 'react'
import classes from './SearchNameWorkspaceFilter.module.css'
import { AutoComplete, Typography } from 'antd'

const { Text } = Typography

const SearchNameWorkspaceFilter = () => {
  return (
    <div className={classes.Root}>
      <Text strong>Search</Text>
      <AutoComplete />
    </div>
  )
}

export default SearchNameWorkspaceFilter
