import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"

import Main from '../components/main/Main'
import PromoBanner from '../components/PromoBanner'
import NavBar from '../components/nav/NavBar'


function IndexPage(){

return (
  <Layout>
    <Seo title="NJ Solar" />
    <PromoBanner/>
    <NavBar/>
    <Main/>
  </Layout>
)
}


export const Head = () => <Seo title="NJ Solar" />

export default IndexPage
