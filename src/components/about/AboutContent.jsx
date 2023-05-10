import React from 'react';

import GetStartedBtn from '../utils/GetStartedButton'
import './about.css'

function AboutContent(){

return (
    <div className='aboutSection items-center align-center pb-8'>
        <h1 className='text-5xl'>About NJ Solar</h1>
        <p>
            We are your trusted partner for all your solar panel needs. At NJ Solar, we are dedicated to helping homeowners and businesses transition to clean, renewable energy by providing high-quality solar panel systems and expert installation services.
        </p>
        <p>
            Our team of experienced professionals has the knowledge and expertise to handle every aspect of your solar panel installation, from design and permitting to installation and maintenance. We use only the highest-quality equipment and materials to ensure that your solar panel system is reliable, efficient, and long-lasting.
        </p>
        <p>
            At NJ Solar, we understand that switching to solar energy can seem like a daunting task. That's why we take care of everything for you, including permitting, zoning, and incentives. We'll work closely with you to ensure that you receive all available incentives and rebates, making your switch to solar energy as cost-effective as possible.
        </p>
        <p>
            We are proud to be a part of the renewable energy revolution, and we are committed to helping our customers reduce their carbon footprint and save money on their energy bills. With NJ Solar, you can trust that you're getting the best service and support for your solar panel installation needs.
        </p>
        <p>
            Contact us today to learn more about how we can help you make the switch to clean, renewable energy with a high-quality solar panel system from NJ Solar.
        </p>
        <GetStartedBtn/>
    </div>
)
}

export default AboutContent;