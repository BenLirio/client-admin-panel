import { Table, Select, Typography } from 'antd'
import React from 'react'
import useWorkspaceData from './useWorkspaceData'
import hash from './hash'
import { useState } from 'react'
import { useEffect } from 'react'
import usePolicies from './usePolicies'
import { useContext } from 'react'
import WorkspaceContext from './workspace-context'
import { AutoSizer } from 'react-virtualized'
import classes from './WorkspacesTable.module.css'

const { Option } = Select
const { Text } = Typography

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 300,
    sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: 'ID',
    dataIndex: 'id',
    width: 250,
    sorter: (a, b) => b.id - a.id
  },
  {
    title: 'Last Updated',
    dataIndex: 'lastUpdated',
    width: 250,
    sorter: (a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated)
  },
  {
    title: 'Dormancy Policy',
    dataIndex: 'policy',
    sorter: (a, b) => {
      return (
        parseInt(/^[0-9]+/.exec(b.policy) || 0) -
        parseInt(/^[0-9]+/.exec(a.policy) || 0)
      )
    },
    render: (policy, row) => {
      return (
        <Select value={policy} onChange={row.changePolicy}>
          <Option value="90 days">90 days</Option>
          <Option value="180 days">180 days</Option>
          <Option value="360 days">360 days</Option>
        </Select>
      )
    }
  }
]

const Footer = ({ changeMultiple }) => {
  return (
    <>
      <Text>Change Multiple: </Text>
      <Select defaultValue="90 days" onChange={changeMultiple}>
        <Option value="90 days">90 days</Option>
        <Option value="180 days">180 days</Option>
        <Option value="360 days">360 days</Option>
      </Select>
    </>
  )
}

const WorkspacesTable = () => {
  const workspaces = useContext(WorkspaceContext)
  const [policies, changePolicy] = usePolicies({ workspaces })
  const [selectedRows, setSelectedRows] = useState([])
  const changeMultiple = selected => {
    selectedRows.forEach(id => {
      changePolicy(id, selected)
    })
  }
  return (
    <AutoSizer>
      {({ width, height }) => {
        console.log('height', height)
        console.log('width', width)
        return (
          <Table
            expandedRowRender={record => {
              console.log('record', record)
              return <Text>{record.description}</Text>
            }}
            className={classes.Table}
            tableLayout="auto"
            size="small"
            rowSelection={{ onChange: setSelectedRows }}
            columns={columns}
            dataSource={workspaces.map(
              ({ _id, name, date_updated, description }) => {
                return {
                  id: hash(_id),
                  name,
                  policy: policies[_id],
                  changePolicy: policy => changePolicy(_id, policy),
                  lastUpdated: date_updated,
                  description,
                  key: _id
                }
              }
            )}
            footer={() => <Footer changeMultiple={changeMultiple} />}
            pagination={{ pageSize: 50 }}
            scroll={{ y: height - 161, x: width }}
            style={{ height, width }}
          />
        )
      }}
    </AutoSizer>
  )
}

export default WorkspacesTable
