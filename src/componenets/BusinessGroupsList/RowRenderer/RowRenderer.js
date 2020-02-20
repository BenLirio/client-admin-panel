import React from 'react'
import { Checkbox } from 'antd'

const text = 'asdf'
const maxLength = 17
const RowRenderer = ({ key, index, style }) => {
  return (
    <div key={key} style={style}>
      <Checkbox>
        {text.slice(0, maxLength)}
        {text.length > maxLength ? '...' : ''}
      </Checkbox>
    </div>
  )
}

export default RowRenderer
