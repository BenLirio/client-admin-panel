import React from 'react'
import { AutoSizer, List } from 'react-virtualized'
import BusinessGroup from './BusinessGroup/BusinessGroup'
import classes from './BusinessGroupsList.module.css'
import useBusinessGroupData from './useBusinessGroupData'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import useSelected from './useSelected'

const ROW_HEIGHT = 25

const BusinessGroupsList = () => {
  const [businessGroups] = useBusinessGroupData()
  const [rowCount, setRowCount] = useState(0)
  const [selected, toggleSelected] = useSelected()

  useEffect(() => {
    setRowCount(businessGroups.length)
  }, [businessGroups])

  const renderRow = useCallback(
    ({ key, style, index }) => {
      const { _id, name } = businessGroups[index]
      const onSelect = state => {
        toggleSelected(_id, state)
      }
      const defaultSelected = selected[_id]
      return (
        <div key={key} style={style}>
          <BusinessGroup
            name={name}
            onSelect={onSelect}
            defaultSelected={defaultSelected}
          />
        </div>
      )
    },
    [businessGroups, selected]
  )
  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <List
            className={classes.List}
            rowCount={rowCount}
            height={height}
            width={width}
            rowHeight={ROW_HEIGHT}
            rowRenderer={renderRow}
          />
        )
      }}
    </AutoSizer>
  )
}

export default BusinessGroupsList
