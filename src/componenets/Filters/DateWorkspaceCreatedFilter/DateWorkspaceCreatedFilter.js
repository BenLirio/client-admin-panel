import React from 'react'
import classes from './DateWorkspaceCreatedFilter.module.css'
import { DatePicker, Typography } from 'antd'
import { useContext } from 'react'
import FilterContext from '../filter-context'

const { RangePicker } = DatePicker
const { Text } = Typography

const DateWorkspaceCreatedFilter = () => {
  const dispatchFilters = useContext(FilterContext)[1]
  return (
    <div className={classes.Root}>
      <Text strong>Date Created</Text>
      <RangePicker
        onChange={(_, data) => dispatchFilters({ type: 'date', payload: data })}
      />
    </div>
  )
}

export default DateWorkspaceCreatedFilter
