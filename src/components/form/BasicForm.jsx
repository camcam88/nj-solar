import React from 'react';

import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

import PanleRow from './PanleRow'
import PannelCard from './PanelCard'
import Swiper from './Swiper'

import {useForm} from '../../Context/systemContext'
import {useExposure, useMinKUpdate, useMinWat, usePPW, usePrice} from '../../Context/ppwContext'
import ZipCheck from './ZipCheck'

import './form.css'

export default function BasicForm(props){
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [unitSize, setUnitSize] = useState(0);
    const [untitSizeSet, setUntitSizeSet] = useState(false)
    const [zipState, setZipState] = useState(true);
    const system = useForm()
    const exposure = useExposure()
    const changeMinK = useMinKUpdate()
    const minWat =useMinWat();
    const ppw = usePPW();
    const price = usePrice();
    
    const handleChange = (e)=>{
        const kWatts = e.target.value
        console.log('CHANGED', kWatts)
        setUnitSize(kWatts * exposure)
    }
    const handleClick = ()=>{
        changeMinK(unitSize)
        setUntitSizeSet(true)
    }
    const handleSubmit = async (values) => {
        setLoading(true);
        const formData = values
        formData.exposure = exposure
        formData.minWat = minWat
        formData.system = system
        formData.ppw = ppw
        formData.priceEst = price
        console.log("formData: ", formData)
        const response = await fetch('http://localhost:8888/.netlify/functions/submitRequest', {
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
                untitSizeSet ?
                <>
                    <label className='label max-w-5xl mt-8 pl-1.5' htmlFor="Panel">Panel</label>
                    <p className='text-left mb-6 text-slate-500 font-light' >Choose a system.</p>
                    <PanleRow> 
                        <PannelCard lable='QCELL 365' tag='qcell'/>
                        <PannelCard lable='SOLARIA 370' tag='solaria'/>
                        <PannelCard lable='TRINA 390' tag='trina'/>
                        <PannelCard lable='REC 405' tag='rec'/>
                    </PanleRow>
                    <label className='label max-w-5xl mt-8 mb-6' htmlFor="firstName">First Name</label>
                    <Field className='Field max-w-5xl' id="firstName" name="firstName" placeholder="Jane" disabled={loading}/>

                    <label className='label max-w-5xl mb-6' htmlFor="lastName">Last Name</label>
                    <Field className='Field max-w-5xl' id="lastName" name="lastName" placeholder="Doe" disabled={loading}/>

                    <label className='label max-w-5xl mb-6' htmlFor="email" disabled={loading}>Email</label>
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
                    <button className='Field submit mt-6 max-w-5xl' type="submit" disabled={loading}>{loading? 'Placing Order...' : 'Submit Order'}</button>
                </>    
                :
                <>
                <label className='label max-w-5xl mt-6 pl-1.5' htmlFor="exposure">Sun Exposure</label>
                <p className='text-left mb-6 text-slate-500 font-light' >How much sun exposure does your house have?</p>
                <Swiper/>
                <label className='label max-w-5xl mt-12 pl-1.5' htmlFor="unitSize">Unit Size</label>
                <p className='text-left mb-6 text-slate-500 font-light' >How much energy does your house need?</p>
                <Field className='Field max-w-5xl mt-4 mb-8' id="unitSize" name="unitSize" type='number' placeholder="0" onChange={handleChange} disabled={untitSizeSet} />
                <button className='Field submit mt-6 max-w-5xl' type="button" onClick={handleClick} disabled={loading}>Continue</button>
                </>
                }
            </Form>
        </Formik>
        {error? error : ''}
        {message? message: ''}
        </div>
    )
}