import React from 'react'
import classes from './Filters.module.css'
import DateWorkspaceCreatedFilter from './DateWorkspaceCreatedFilter/DateWorkspaceCreatedFilter'
import PolicyFilter from './PolicyFilter/PolicyFilter'
import SearchNameWorkspaceFilter from './SearchNameWorkspaceFilter/SearchNameWorkspaceFilter'

const Filters = () => {
  return (
    <div className={classes.Root}>
      <DateWorkspaceCreatedFilter />
      <PolicyFilter />
      <SearchNameWorkspaceFilter />
    </div>
  )
}

export default Filters
