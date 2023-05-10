import { graphql } from 'gatsby';
import React from 'react';
import FaqText from './FaqText'
import GetStartedBtn from '../utils/GetStartedButton'
function FAQContent(){

    const solarPanelFAQs = {
        howSolarPanelsWork: {
        question: "How do solar panels work?",
        answer: "Solar panels work by allowing photons, or particles of light, to knock electrons free from atoms, which generates a flow of electricity. This process is called the photovoltaic effect.",
        },
        canSolarPanelsPowerHome: {
        question: "Can solar panels power my entire home?",
        answer: "Yes, solar panels can power your entire home, depending on how many panels you install and how much energy you use. You can also choose to use solar power in conjunction with grid power if you need more energy than your panels can provide.",
        },
        determiningNumberOfPanels: {
        question: "How many solar panels I need?",
        answer: "The number of solar panels you need depends on your energy usage and the amount of sunlight your location receives. A solar installer can help you determine the right number of panels for your needs.",
        },
        solarPanelCost: {
        question: "How much do solar panels cost?",
        answer: "The cost of solar panels depends on several factors, including the size of your system, the type of panels you choose, and the cost of installation. The cost of a residential solar system can range from $15,000 to $35,000.",
        },
        increasingHomeValue: {
        question: "Will my home's value increase?",
        answer: "Yes, installing solar panels can increase the value of your home. According to studies, homes with solar panels sell for more than homes without them.",
        },
        netMetering: {
        question: "What is net metering?",
        answer: "Net metering is a program offered by many utility companies that allows you to earn credits for excess solar energy you generate and send back to the grid. You can then use those credits to offset the cost of energy you use from the grid.",
        },
        solarPanelLifespan: {
        question: "How long do solar panels last?",
        answer: "Solar panels typically have a lifespan of 40-45 years, although some can last up to 40 years with proper maintenance.",
        },
        ppwImportance: {
        question: "What is PPW?",
        answer: "Price per watt (PPW) is a common metric used in the solar industry to compare the cost of different solar panel systems. PPW represents the cost of a solar panel system per watt of power it produces. It is calculated by dividing the total cost of the system by its total power output in watts. For example, if a solar panel system costs $10,000 and has a total power output of 5,000 watts, the PPW would be $2 ($10,000 ÷ 5,000 watts).",
        },
        energyBillSavings: {
        question: "How much can I expect to save?",
        answer: "The amount you can save on your energy bills by installing solar panels depends on several factors, including the size of your system, your energy usage, and the amount of sunlight your location receives. On average, homeowners can expect to save between 10-30% on their energy bills after installing solar panels.",
        },
        ppAgreement: {
        question: "What is PPA?",
        answer: "PPA stands for 'power purchase agreement.' A PPA is a financing option where a third party owns and maintains the solar panel system on your property, and you purchase the energy the system produces at a fixed rate. This can be a good option for homeowners who want to install solar panels but don't want to pay for the system upfront.",
        },
        sellBack: {
            question: "Can I sell excess energy I generate back to the grid?",
            answer: "Yes, in many cases you can sell excess energy you generate back to the grid through a process called net metering. This can help you offset the cost of energy you use from the grid, and in some cases, you may even be able to earn money for the excess energy you produce."
        },        
        incentivesAvailable: {
            question: "What incentives are available?",
            answer: "There are several incentives available for installing solar panels, including federal tax credits, state and local rebates, and net metering programs. "
            },
    }

    return (
    <div className='flex flex-col w-screen items-center align-center pb-8'>
        <h1 className='text-center text-5xl pt-12'>FAQs</h1>
        <div className='faqDiv max-w-5xl mx-auto'>
        {Object.keys(solarPanelFAQs).map(function (faq, i) {
                // console.log("faq.toString()", solarPanelFAQs[faq.toString()].question)
                return(
                <>
                    <FaqText key={i} question={solarPanelFAQs[faq.toString()].question} answer={solarPanelFAQs[faq.toString()].answer}/>
                </>
                )
            })}
            <p className='faqAnswer'>We understand that switching to solar energy can seem like a daunting task. That's why we take care of everything for you, from permitting to zoning, and even incentives. Our team of experienced professionals has the knowledge and expertise to handle every aspect of your solar panel installation, so you can sit back and relax knowing that your transition to solar energy is in good hands. We'll work closely with you to ensure that you receive all available incentives and rebates, making your switch to solar energy as cost-effective as possible. </p>
        </div>
            <GetStartedBtn/>
    </div>
    )
    }
    
    export default FAQContent