import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"

import PromoBanner from '../components/PromoBanner'
import NavBar from '../components/nav/NavBar'
import Footer from '../components/footer/Footer'
import AboutContent from '../components/about/AboutContent'

function AboutPage(){


return (
<Layout>
    <Seo title="About" />
    <PromoBanner/>
    <NavBar/>
    <AboutContent/>
    <Footer/>
</Layout>
)
}


export const Head = () => <Seo title="About" />

export default AboutPage