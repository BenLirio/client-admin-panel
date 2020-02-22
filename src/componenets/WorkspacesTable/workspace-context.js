import React, { createContext } from 'react'
import useWorkspaceData from './useWorkspaceData'

const WorkspaceContext = createContext()

export const WorkspaceContextProvider = ({ children }) => {
  const [workspaces] = useWorkspaceData()
  return (
    <WorkspaceContext.Provider value={workspaces}>
      {children}
    </WorkspaceContext.Provider>
  )
}

export default WorkspaceContext
