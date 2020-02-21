import React from 'react'
import { Checkbox } from 'antd'

const maxLength = 15

const BusinessGroup = ({ name, onSelect, defaultSelected }) => {
  return (
    <div>
      <Checkbox
        defaultChecked={defaultSelected}
        onChange={e => onSelect(e.target.checked)}
      >
        {name.slice(0, maxLength)}
        {name.length > maxLength ? '...' : ''}
      </Checkbox>
    </div>
  )
}

export default BusinessGroup
