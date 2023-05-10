import React from 'react';

import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import { Link } from "gatsby"

import {useZipUpdate} from '../../Context/zipContext'
function ZipCheck (){
    const [hidden, setHidden] = useState(false);
    const [value, setValue] = useState(false);
    const [error, setError] = useState();
    
    const updateZip = useZipUpdate();
    const handleClick = ()=>{
        if(njZipCodes.includes(value)){
            console.log('value: ', value)
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
    const njZipCodes = [
        "07001",
        "07002",
        "07003",
        "07004",
        "07005",
        "07006",
        "07008",
        "07009",
        "07010",
        "07011",
        "07012",
        "07013",
        "07014",
        "07016",
        "07017",
        "07018",
        "07020",
        "07021",
        "07022",
        "07023",
        "07024",
        "07026",
        "07027",
        "07028",
        "07029",
        "07030",
        "07031",
        "07032",
        "07033",
        "07034",
        "07035",
        "07036",
        "07039",
        "07040",
        "07041",
        "07042",
        "07043",
        "07044",
        "07045",
        "07046",
        "07047",
        "07050",
        "07052",
        "07054",
        "07055",
        "07057",
        "07058",
        "07059",
        "07060",
        "07062",
        "07063",
        "07064",
        "07065",
        "07066",
        "07067",
        "07068",
        "07069",
        "07070",
        "07071",
        "07072",
        "07073",
        "07074",
        "07075",
        "07076",
        "07077",
        "07078",
        "07079",
        "07080",
        "07081",
        "07082",
        "07083",
        "07086",
        "07087",
        "07088",
        "07090",
        "07092",
        "07093",
        "07094",
        "07095",
        "07102",
        "07103",
        "07104",
        "07105",
        "07106",
        "07107",
        "07108",
        "07109",
        "07110",
        "07111",
        "07112",
        "07114",
        "07201",
        "07202",
        "07203",
        "07204",
        "07205",
        "07206",
        "07208",
        "07302",
        "07304",
        "07305",
        "07306",
        "07307",
        "07310",
        "07311",
        "07401",
        "07403",
        "07405",
        "07407",
        "07410",
        "07416",
        "07417",
        "07418",
        "07419",
        "07420",
        "07421",
        "07422",
        "07423",
        "07424",
        "07430",
        "07432",
        "07436",
        "07438",
        "07439",
        "07440",
        "07442",
        "07444",
        "07446",
        "07450",
        "07452",
        "07456",
        "07457",
        "07458",
        "07460",
        "07461",
        "07462",
        "07463",
        "07465",
        "07470",
        "07474",
        "07480",
        "07481",
        "07495",
        "07501",
        "07502",
        "07503",
        "07504",
        "07505",
    ]      

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