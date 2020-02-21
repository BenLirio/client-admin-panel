import { Typography } from 'antd'
import React from 'react'
import classes from './BusinessGroupHeader.module.css'

const { Text } = Typography

const BusinessGroupHeader = () => {
  return (
    <div className={classes.Container}>
      <Text>Filter By:</Text>
      <Text strong>Business Group</Text>
    </div>
  )
}

export default BusinessGroupHeader
