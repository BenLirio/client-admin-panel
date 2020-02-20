import React from 'react'
import { AutoSizer, List } from 'react-virtualized'
import classes from './BusinessGroupsList.module.css'
import RowRenderer from './RowRenderer/RowRenderer'

const BusinessGroupsList = () => {
  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <List
            className={classes.List}
            rowCount={100}
            height={height}
            width={width}
            rowHeight={25}
            rowRenderer={RowRenderer}
          />
        )
      }}
    </AutoSizer>
  )
}

export default BusinessGroupsList
