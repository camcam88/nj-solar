import React, { useState } from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"

import Main from '../components/main/Main'
import PromoBanner from '../components/PromoBanner'
import NavBar from '../components/nav/NavBar'
import Footer from '../components/footer/Footer'


function IndexPage(){
  const [showForm, setShowForm ] = useState(false)

return (
  <Layout>
    <Seo title="Home" />
    <PromoBanner/>
    <NavBar/>
    <Main/>
    <Footer/>
  </Layout>
)
}


export const Head = () => <Seo title="Home" />

export default IndexPage
