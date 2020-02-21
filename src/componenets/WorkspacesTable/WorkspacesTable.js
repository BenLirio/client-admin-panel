import { Table } from 'antd'
import React from 'react'

const data = []
for (let i = 0; i < 1000; i++) {
  data.push({
    key: i,
    name: 'Row: ' + i,
    id: 2,
    lastUpdated: '123',
    policy: '90day'
  })
}

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
    dataIndex: 'policy'
  }
]

const rowSelection = {
  onChange: () => {}
}

const WorkspacesTable = () => {
  return (
    <Table
      tableLayout="auto"
      size="small"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
    />
  )
}

export default WorkspacesTable
