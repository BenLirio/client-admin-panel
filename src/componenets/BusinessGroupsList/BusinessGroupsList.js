import React from 'react'
import { AutoSizer, List } from 'react-virtualized'
import BusinessGroup from './BusinessGroup/BusinessGroup'
import classes from './BusinessGroupsList.module.css'

const ROW_HEIGHT = 25
const ROW_COUNT = 100

const BusinessGroupsList = () => {
  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <List
            className={classes.List}
            rowCount={ROW_COUNT}
            height={height}
            width={width}
            rowHeight={ROW_HEIGHT}
            rowRenderer={BusinessGroup}
          />
        )
      }}
    </AutoSizer>
  )
}

export default BusinessGroupsList
