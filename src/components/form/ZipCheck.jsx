import React from 'react';

import { Field } from 'formik';
import { useState } from 'react';
import { Link } from "gatsby"

import {useZipUpdate} from '../../Context/zipContext'

import njZipCodes from '../utils/zipCodes';

function ZipCheck (){
    const [hidden, setHidden] = useState(false);
    const [value, setValue] = useState(false);
    const [error, setError] = useState();
    
    const updateZip = useZipUpdate();
    
    const handleClick = ()=>{
        if(njZipCodes.includes(value)){
            updateZip(value)
            setHidden(true);
        }else{
            setError(true);
        }

    }
    const handleChange = (e)=>{
        setValue(e.target.value)
        setError(false)
    }    

    return (
        <div className={hidden? 'zipDiv zipHidden' : 'zipDiv'}>
            <label className='zipLabel' htmlFor="zipCode">Zip Code</label>
            <p className='zipP'>Please provide your postal code.</p>
            <Field className='zipField' id="zipCode" name="zipCode" placeholder="0000000" disabled={false} onChange={handleChange}/>
            <button className='zipButton' type="button" onClick={handleClick} disabled={error}>Confirm</button>
            {error? <><p className='zipError'>Looks like you're not in our area.</p>
            <Link className='learnMore' to='../coverage'>Learn more.</Link></> : ''}
            
        </div>
    )
}

export default ZipCheck;