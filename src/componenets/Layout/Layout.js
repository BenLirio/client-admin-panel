import React from 'react'
import { Layout as AntLayout } from 'antd'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import classes from './Layout.module.css'
import Content from './Content/Content'

const Layout = ({ children }) => {
  return (
    <AntLayout className={classes.Layout}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </AntLayout>
  )
}

export default Layout
