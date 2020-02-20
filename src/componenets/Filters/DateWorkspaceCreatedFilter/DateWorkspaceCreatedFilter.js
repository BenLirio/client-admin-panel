import React from 'react'
import classes from './DateWorkspaceCreatedFilter.module.css'
import { DatePicker, Typography } from 'antd'

const { RangePicker } = DatePicker
const { Text } = Typography

const DateWorkspaceCreatedFilter = () => {
  return (
    <div className={classes.Root}>
      <Text strong>Date Created</Text>
      <RangePicker />
    </div>
  )
}

export default DateWorkspaceCreatedFilter
