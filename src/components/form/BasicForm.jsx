import React from 'react';

import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

import UnitSize from './UnitSize';

import PanleRow from './PanleRow'
import PannelCard from './PanelCard'

import {useForm} from '../../Context/systemContext'
import {useExposure, useMinWat, usePPW, usePrice, useSetUsage} from '../../Context/ppwContext'
import ZipCheck from './ZipCheck'

import './form.css'

export default function BasicForm(props){
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [untitSizeSet, setUntitSizeSet] = useState(false)

    const [zipState, setZipState] = useState(true);
    const system = useForm()
    const exposure = useExposure()

    const minWat =useMinWat();
    const ppw = usePPW();
    const price = usePrice();
    const setannualUsage = useSetUsage()

    let domainName
    if (typeof window !== 'undefined') {
        domainName = window.location.hostname;
        }

    // https://build-c30756c0-e33a-42e8-a5d9-d3c2f5c36572.gatsbyjs.io/start
    // https://njsolar.gatsbyjs.io/.netlify/functions/submitRequest

    const handleSubmit = async (values) => {
        setLoading(true);
        const formData = values
        formData.exposure = exposure
        formData.minWat = minWat
        formData.system = system
        formData.ppw = ppw
        formData.priceEst = price
        console.log("formData: ", formData)
        const response = await fetch(`https://njsolar.gatsbyjs.io/.netlify/functions/submitRequest`, {
        method: 'POST',
        body: JSON.stringify(formData),
        });
        const text = JSON.parse(await response.text());
        
        if (response.ok) {
            // handle success
            setMessage(text.message)
            setLoading(false);
            console.log('Succes:', text.message)
        } else {
            // handle error
            setLoading(false);
            setMessage(text.message)
            setError("Error!");
            console.log('ERR:', text.message)
        }
    };

    const handleChange = (set)=>{
        setUntitSizeSet(set)
    }

    return(
        <div className='text-black'>
            <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                potHead:'',
                exposure: exposure,
                minWat: minWat,
                system: system,
                ppw: ppw,
                priceEst: price,
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                // alert(JSON.stringify(values, null, 2));
                handleSubmit(values)
            }}
            >
            <Form className='solarForm flex flex-col items-center'>
                {zipState? <ZipCheck/> : ''}
                {
                    // only show the unit size if the untitSizeSet is true  
                    // otherwise show the panel selection
                !untitSizeSet? <UnitSize onSetUntitSizeSet={handleChange}/> :
                <>
                    <label 
                        className='label max-w-5xl mt-8 pl-1.5' 
                        htmlFor="Panel">Panel</label>
                    <p 
                        className='text-left mb-6 text-slate-500 font-light' 
                        >Choose a system.</p>
                    <PanleRow> 
                        <PannelCard lable='QCELL 365' tag='qcell'/>
                        <PannelCard lable='SOLARIA 370' tag='solaria'/>
                        <PannelCard lable='TRINA 390' tag='trina'/>
                        <PannelCard lable='REC 405' tag='rec'/>
                    </PanleRow>
                    <h1>Cost: {price}</h1>
                    <label 
                        className='label max-w-5xl mt-8 mb-6' 
                        htmlFor="firstName">First Name</label>
                    <Field 
                        className='Field max-w-5xl' 
                        id="firstName" name="firstName" 
                        placeholder="Jane" disabled={loading}/>
                    <label 
                        className='label max-w-5xl mb-6' 
                        htmlFor="lastName">Last Name</label>
                    <Field 
                        className='Field max-w-5xl' 
                        id="lastName" 
                        name="lastName" 
                        placeholder="Doe" 
                        disabled={loading}/>
                    <label 
                        className='label max-w-5xl mb-6' 
                        htmlFor="email" 
                        disabled={loading}>Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        className='Field max-w-5xl' 
                    />
                    <Field
                        id="potHead"
                        name="potHead"
                        type="potHead"
                        className="hidden"
                    />
                    <button 
                        className='Field submit mt-6 max-w-5xl' 
                        type="submit" 
                        disabled={loading}>{loading? 'Placing Order...' : 'Submit Order'}</button>
                </>    
                }
            </Form>
        </Formik>
        {error? error : ''}
        {message? message: ''}
        </div>
    )
}

