import React from 'react'
import { Checkbox } from 'antd'

const text = 'laksdjfklasdjflkajsdfkljdsaklfjlkd'
const maxLength = 20

const BusinessGroup = ({ key, style }) => {
  return (
    <div key={key} style={style}>
      <Checkbox>
        {text.slice(0, maxLength)}
        {text.length > maxLength ? '...' : ''}
      </Checkbox>
    </div>
  )
}

export default BusinessGroup
