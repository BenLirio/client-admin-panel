import { Layout as AntLayout, Typography } from 'antd'
import React from 'react'
import BusinessGroupsList from '../../componenets/BusinessGroupsList/BusinessGroupsList'
import Filters from '../../componenets/Filters/Filters'
import WorkspacesTable from '../../componenets/WorkspacesTable/WorkspacesTable'
import classes from './PolicyEditor.module.css'
import BusinessGroupHeader from '../../componenets/BusinessGroupHeader/BusinessGroupHeader'

const { Sider: AntSider, Content: AntContent } = AntLayout
const { Text } = Typography

const PolicyEditor = () => {
  return (
    <div className={classes.Root}>
      <Filters />
      <AntLayout className={classes.Layout}>
        <AntSider className={classes.Sider}>
          <div className={classes.BusinessGroups}>
            <BusinessGroupHeader />
            <div className={classes.ListContainer}>
              <BusinessGroupsList />
            </div>
          </div>
        </AntSider>
        <AntContent className={classes.Content}>
          <WorkspacesTable />
        </AntContent>
      </AntLayout>
    </div>
  )
}

export default PolicyEditor
