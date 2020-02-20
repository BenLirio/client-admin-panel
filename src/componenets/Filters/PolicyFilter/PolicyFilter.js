import React from 'react'
import classes from './PolicyFilter.module.css'
import { Select, Typography } from 'antd'

const { Option } = Select
const { Text } = Typography

const PolicyFilter = () => {
  return (
    <div className={classes.Root}>
      <Text strong>Policy</Text>
      <Select></Select>
    </div>
  )
}

export default PolicyFilter
