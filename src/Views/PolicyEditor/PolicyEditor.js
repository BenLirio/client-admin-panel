import { Layout as AntLayout, Typography } from 'antd'
import React from 'react'
import BusinessGroupsList from '../../componenets/BusinessGroupsList/BusinessGroupsList'
import Filters from '../../componenets/Filters/Filters'
import WorkspacesTable from '../../componenets/WorkspacesTable/WorkspacesTable'
import classes from './PolicyEditor.module.css'
import BusinessGroupHeader from '../../componenets/BusinessGroupHeader/BusinessGroupHeader'
import { SelectedContextProvider } from '../../componenets/BusinessGroupsList/selected-context'

const { Sider: AntSider, Content: AntContent } = AntLayout
const { Text } = Typography

const PolicyEditor = () => {
  return (
    <div className={classes.Root}>
      <Filters />
      <AntLayout className={classes.Layout}>
        <SelectedContextProvider>
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
        </SelectedContextProvider>
      </AntLayout>
    </div>
  )
}

export default PolicyEditor
