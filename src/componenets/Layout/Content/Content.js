import React from 'react'
import { Layout as AntLayout } from 'antd'
import classes from './Content.module.css'

const { Content: AntContent } = AntLayout

const Content = ({ children }) => {
  console.log(classes.Content)
  return <AntContent className={classes.Content}>{children}</AntContent>
}

export default Content
