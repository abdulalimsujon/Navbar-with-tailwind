import React from 'react';
import { CheckCircleIcon, MenuIcon, XIcon } from '@heroicons/react/solid';

const Benefit = (props) => {
    return (
        <p className='flex item-center mr-2'><CheckCircleIcon className='w-4 h-4 text-green-500'></CheckCircleIcon>

            {props.benefit}


        </p>


    );
};

export default Benefit;