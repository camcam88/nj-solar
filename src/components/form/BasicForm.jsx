import React from 'react';

import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

import UnitSize from './UnitSize';

import PanleRow from './PanleRow'
import PannelCard from './PanelCard'
import Install from './Install'
import Payment from './Payment'

import {useForm} from '../../Context/systemContext'
import {useExposure, useMinWat, usePPW, usePrice, useSetUsage, useInstallPrice, useBatteryPrice, useNumberOfPanels, useRoofType} from '../../Context/ppwContext'
import {useZip} from '../../Context/zipContext'
import ZipCheck from './ZipCheck'

import SuccessPage from '../succes/Success'

import './form.css'

export default function BasicForm(props){
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [untitSizeSet, setUntitSizeSet] = useState(false)
    const [payChoice, setPayChoice] = useState('')

    const [zipState, setZipState] = useState(true);
    const system = useForm()
    const exposure = useExposure()

    const minWat =useMinWat();
    const ppw = usePPW();
    const price = usePrice();
    const setannualUsage = useSetUsage()
    const installPrice = useInstallPrice()
    const batteryPrice = useBatteryPrice()
    const numberOfPanels = useNumberOfPanels()
    const roofType = useRoofType()
    const zip = useZip()

    let domainName
    if (typeof window !== 'undefined') {
        domainName = window.location.hostname;
        }

    // https://build-c30756c0-e33a-42e8-a5d9-d3c2f5c36572.gatsbyjs.io/start
    // https://njsolar.gatsbyjs.io/.netlify/functions/submitRequest

    const handleSubmit = async (values) => {
        setLoading(true);
        const formData = values
        formData.system = system
        formData.priceEst = price
        formData.payChoice = payChoice
        formData.exposure = exposure
        formData.installPrice = installPrice
        formData.batteryPrice = batteryPrice
        formData.minWat = minWat
        formData.ppw = ppw
        formData.numberOfPanels = numberOfPanels
        formData.roofType = roofType
        formData.zip = zip

        const response = await fetch(`/.netlify/functions/request`, {
        method: 'POST',
        body: JSON.stringify(formData),
        });
        const text = JSON.parse(await response.text());

        if (response.ok) {
            // handle success
            setMessage(text.message)
            setLoading(false);
        } else {
            // handle error
            setLoading(false);
            setMessage(text.message)
            setError("Error!");
        }
    };

    const handleChange = (set)=>{
        setUntitSizeSet(set)
    }

    const handlePayChange = (choice)=>{
        setPayChoice(choice)
    }

    return(
        <div className='text-black'>
            
            <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                zip: zip,
                potHead:'',
                system: system,
                priceEst: price,
                payChoice: payChoice,
                exposure: exposure,
                installPrice: installPrice,
                batteryPrice: batteryPrice,
                minWat: minWat,
                ppw: ppw,
                numberOfPanels: numberOfPanels,
                roofType: roofType,
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                // alert(JSON.stringify(values, null, 2));
                handleSubmit(values)
            }}
            >
            <Form className='solarForm flex flex-col items-center'>
                {zipState? <ZipCheck/> : ''}
                {message? <SuccessPage 
                    system={system} 
                    priceEst={price} 
                    installCost={installPrice} 
                    batteryCost={batteryPrice} 
                    panelCount={numberOfPanels}
                    roofType={roofType}
                    />:
                <>
                
                {
                    // only show the unit size if the untitSizeSet is true  
                    // otherwise show the panel selection
                !untitSizeSet? <UnitSize onSetUntitSizeSet={handleChange}/> :
                <>
                    <label 
                        className='label max-w-5xl mt-8' 
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
                    <label 
                        className='label max-w-5xl mt-40' 
                        htmlFor="Panel">Extras</label>
                    <p 
                        className='text-center sm:text-left sm:px-8 mb-6 mt-2 text-slate-500 font-light' 
                        >Choose to add extras like a full installation from our partners, or a Ephases home battery.</p>
                    <Install/>
                    <label 
                        className='label max-w-5xl mt-28' 
                        htmlFor="Panel">Payment Option</label>
                    <p 
                        className='text-left mb-6 text-slate-500 font-light' 
                        >Select a payment option.</p>
                    <Payment postPrice={price + installPrice + batteryPrice} onPayButtonClick={handlePayChange}/>

                    <label 
                        className='label max-w-5xl mt-28 mb-6'
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
                        disabled={loading}>Email Address</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        className='Field max-w-5xl' 
                    />
                    <label 
                        className='label max-w-5xl mb-6' 
                        htmlFor="address" 
                        disabled={loading}>Home Address</label>
                    <Field
                        id="address"
                        name="address"
                        placeholder="1234 Main St"
                        type="address"
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
                </>
                }
                
            </Form>
        </Formik>
        {error? error : ''}
        </div>
    )
}

