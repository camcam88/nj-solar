import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PannelCard from './PanelCard'

import 'swiper/css';
import 'swiper/css/navigation';

import q from '../../images/qcell.svg'
import s from '../../images/solaria.svg'
import t from '../../images/trina.svg'
import r from '../../images/rec.svg'
function panleRow(){

    return(
        <div className='flex flex-col  w-full justify-center items-center'>
            <div className='flex mb-4 w-full max-w-5xl justify-center items-center'>
                <PannelCard lable='QCELL 365' pannelImag={q}/>
                <PannelCard lable='SOLARIA 370' pannelImag={s}/>
                </div>
                <div className='flex w-full max-w-5xl justify-center items-center'>
                <PannelCard lable='TRINA 390' pannelImag={t}/>
                <PannelCard lable='REC 405' pannelImag={r}/>
            </div>
        </div>
    )
}

export default panleRow;