import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"

import PromoBanner from '../components/PromoBanner'
import NavBar from '../components/nav/NavBar'
import Footer from '../components/footer/Footer'
import CoverageContent from '../components/coverage/CoveragePage'

function CoveragePage(){


return (
<Layout>
    <Seo title="Coverage Area" />
    <PromoBanner/>
    <NavBar/>
    <CoverageContent/>
    <Footer/>
</Layout>
)
}


export const Head = () => <Seo title="Coverage Area" />

export default CoveragePage