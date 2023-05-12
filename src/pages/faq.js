import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"

import PromoBanner from '../components/PromoBanner'
import NavBar from '../components/nav/NavBar'
import Footer from '../components/footer/Footer'
import FaqContent from '../components/faqs/FAQContent'

function FAQPage(){


return (
<Layout>
    <Seo title="FAQ's" />
    <PromoBanner/>
    <NavBar/>
    <FaqContent/>
</Layout>
)
}


export const Head = () => <Seo title="FAQ's" />

export default FAQPage