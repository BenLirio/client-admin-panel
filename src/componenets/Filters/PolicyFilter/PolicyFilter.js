import React from 'react'
import classes from './PolicyFilter.module.css'
import { Select, Typography } from 'antd'
import { useContext } from 'react'
import FilterContext from '../filter-context'

const { Option } = Select
const { Text } = Typography

const PolicyFilter = () => {
  const dispatchPolicies = useContext(FilterContext)[1]
  return (
    <div className={classes.Root}>
      <Text strong>Policy</Text>
      <Select
        defaultValue="all"
        onChange={v => dispatchPolicies({ type: 'policy', payload: v })}
      >
        <Option value="all">all</Option>
        <Option value="90 days">90 days</Option>
        <Option value="180 days">180 days</Option>
        <Option value="365 days">365 days</Option>
      </Select>
    </div>
  )
}

export default PolicyFilter
