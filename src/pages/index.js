import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"

import Main from '../components/main/Main'
import PromoBanner from '../components/PromoBanner'
import NavBar from '../components/nav/NavBar'


function IndexPage(){

return (
  <Layout>
    <Seo title="Home" />
    <PromoBanner/>
    <NavBar/>
    <Main/>
  </Layout>
)
}


export const Head = () => <Seo title="Home" />

export default IndexPage
