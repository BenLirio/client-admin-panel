import { Table, Select, Typography } from 'antd'
import React from 'react'
import useWorkspaceData from './useWorkspaceData'
import hash from './hash'
import { useState } from 'react'
import { useEffect } from 'react'
import usePolicies from './usePolicies'

const { Option } = Select
const { Text } = Typography

const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: 'Last Updated',
    dataIndex: 'lastUpdated'
  },
  {
    title: 'Dormancy Policy',
    dataIndex: 'policy',
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
  const [workspaces] = useWorkspaceData()
  const [policies, changePolicy] = usePolicies({ workspaces })
  const [selectedRows, setSelectedRows] = useState([])
  const changeMultiple = selected => {
    selectedRows.forEach(id => {
      changePolicy(id, selected)
    })
  }
  return (
    <Table
      tableLayout="auto"
      size="small"
      rowSelection={{ onChange: setSelectedRows }}
      columns={columns}
      dataSource={workspaces.map(({ _id, name, date_updated }) => {
        return {
          id: hash(_id),
          name,
          policy: policies[_id],
          changePolicy: policy => changePolicy(_id, policy),
          lastUpdated: date_updated,
          key: _id
        }
      })}
      footer={() => <Footer changeMultiple={changeMultiple} />}
      pagination={{ pageSize: 50 }}
    />
  )
}

export default WorkspacesTable
