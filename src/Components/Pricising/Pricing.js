import React from 'react';
import PricingOption from '../PrisingOption/PricingOption';




const Pricing = () => {

    const PrisingOptions = [
        {
            id: 1, name: 'free', price: 0, benefits: [
                'lifetime free',
                'unlimited deals',
                'fantastic deals',
                'creagy deals'
            ]
        },
        {
            id: 2, name: 'regular', price: 9.99, benefits: [
                'lifetime free',
                'unlimited deals',
                'fantastic deals',
                'creagy deals'
            ]
        },
        {
            id: 3, name: 'premium', price: 19.99, benefits: [
                'lifetime free',
                'unlimited deals',
                'fantastic deals',
                'creagy deals'
            ]
        }
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, optio sed? Fu
                ga rem rerum pariatur aliquid, nemo obcaecati provident aspernatur.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    PrisingOptions.map(Option => <PricingOption key={Option.id}
                        Option={Option}


                    ></PricingOption>




                    )
                }
            </div>

        </div>
    );
};

export default Pricing;