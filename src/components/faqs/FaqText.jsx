import React from 'react';

import './faq.css'

function FaqText({question, answer}){
    return (
        <>
        <h3 className='faqQeustion'>{question}</h3>
        <p className='faqAnswer'>{answer}</p>
        </>
    )
}

export default FaqText;