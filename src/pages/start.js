import React, { useState } from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"

import PromoBanner from '../components/PromoBanner'
import NavBar from '../components/nav/NavBar2'
import {SystemProvider} from '../Context/systemContext'
import {PpwProvider} from '../Context/ppwContext'
import {ZipProvider} from '../Context/zipContext'


import BasicForm from '../components/form/BasicForm'
function Start(){
    
return (
    <Layout>
        <PpwProvider>
        <SystemProvider>
        <ZipProvider>
            <Seo title="Get Started" />
            <PromoBanner/>
            <NavBar/>
            <BasicForm/>
        </ZipProvider>
        </SystemProvider>
        </PpwProvider>
    </Layout>
)
}


export const Head = () => <Seo title="Get Started" />

export default Start;