import React from 'react'
import { Layout as AntLayout } from 'antd'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const { Content: AntContent } = AntLayout

const Layout = ({ children }) => {
  return (
    <AntLayout>
      <Header />
      <AntContent>{children}</AntContent>
      <Footer />
    </AntLayout>
  )
}

export default Layout
