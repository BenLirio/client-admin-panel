import React from 'react'
import Filters from '../../componenets/Filters/Filters'
import { Layout as AntLayout } from 'antd'
import BusinessGroupsList from '../../componenets/BusinessGroupsList/BusinessGroupsList'
import WorkspacesTable from '../../componenets/WorkspacesTable/WorkspacesTable'
import classes from './PolicyEditor.module.css'

const { Sider: AntSider, Content: AntContent } = AntLayout

const PolicyEditor = () => {
  return (
    <div className={classes.Root}>
      <Filters />
      <AntLayout className={classes.Layout}>
        <AntSider className={classes.Sider}>
          <BusinessGroupsList />
        </AntSider>
        <AntContent className={classes.Content}>
          <WorkspacesTable />
        </AntContent>
      </AntLayout>
    </div>
  )
}

export default PolicyEditor
