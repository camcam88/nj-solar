import React from 'react';

import RadioBtn from './RadioBtn'
import PannelCard from './PanelCard'
import RadioRow from './RadioRow'
import PanleRow from './PanleRow'
import CloseBtn from './CloseBtn'

function PopForm(){
    const FormText = ({text})=> <h2 className='text-black text-3xl font-light mb-12'>{text}</h2>

    const API_KEY = "EVBEBAY4hCcqM1LXRM1emLRKEeMp54lg4dyC55or";
    const EMAIL = "camcam88@gmail.com";
    const BASE_URL = "https://developer.nrel.gov/api/nsrdb/v2/solar/psm3-2-2-tmy-download.json?";
    const POINTS = [
        '1011026'
        ];
        
        async function main() {
        const input_data = {
            'attributes': 'dhi,dni,ghi,air_temperature',
            'interval': '60',
            'to_utc': 'false',
            'api_key': API_KEY,
            'email': 'camcam88@gmail.com'
        };
        
        for (const name of ['tdy-2021', 'tgy-2021']) {
            console.log(`Processing name: ${name}`);
            for (let id = 0; id < POINTS.length; id++) {
            const location_ids = POINTS[id];
            input_data['names'] = [name];
            input_data['location_ids'] = location_ids;
            console.log(`Making request for point group ${id + 1} of ${POINTS.length}...`);
        
            const headers = {
                'x-api-key': API_KEY
            };
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(input_data)
            });
            const data = await get_response_json_and_handle_errors(response);
            const download_url = data['outputs']['downloadUrl'];
            console.log(data['outputs']['message']);
            console.log(`Data can be downloaded from this url when ready: ${download_url}`);
        
            // Delay for 1 second to prevent rate limiting
            await new Promise(resolve => setTimeout(resolve, 1000));
        
            console.log('Processed');
            }
        }
        }
        
        async function get_response_json_and_handle_errors(response) {
        if (response.status != 200) {
            console.log(`An error has occurred with the server or the request. The request response code/status: ${response.status} ${response.statusText}`);
            console.log(`The response body: ${await response.text()}`);
            throw new Error('Request error');
        }
        
        const response_json = await response.json();
        if (response_json['errors'].length > 0) {
            const errors = response_json['errors'].join('\n');
            console.log(`The request errored out, here are the errors: ${errors}`);
            throw new Error('Request error');
        }
        return response_json;
        }
    
    main().catch(error => console.error(error));

    return(
        <div className='w-[100vw] h-[100vh] bg-slate-300/[.86] top-0 left-0'>
        <div className='
            h-100
            bg-white
            rounded
            shadow-md
            shadow-slate-400
            '>
            <form className='
                flex
                flex-col
                items-center
                pt-12
                '>
                <FormText text='WHAT IS THE SYSTEM SIZE?'/>
                <input className='
                h-8
                rounded
                shadow-md
                shadow-slate-400
                text-black
                text-center
                text-lg
                mb-8
                ' type="number" name="systemSize" id="systemSize"/>
                <FormText text='HOW MUCH SUN DOES YOUR ROOF GET?'/>
                <RadioRow>
                    <RadioBtn lable='Poor' />
                    <RadioBtn lable='Average'/>
                    <RadioBtn lable='Perfect'/>
                </RadioRow>
                    <h2
                        className='text-black'
                    >Data</h2>
                <FormText text='CHOOSE A SYSTEM TYPE.'/>
                <PanleRow>
                    <PannelCard lable='QCELL 365'/>
                    <PannelCard lable='SOLARIA 370'/>
                    <PannelCard lable='TRINA 390'/>
                    <PannelCard lable='REC 405'/>
                </PanleRow>
            </form>
            <CloseBtn/>
            </div>
        </div>
    )
}

export default PopForm;