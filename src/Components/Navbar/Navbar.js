import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [open, SetOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 1, name: 'Deals', link: '/Deals' },
        { id: 1, name: 'Coupons', link: '/Coupons' },
        { id: 1, name: 'Contract', link: '/home' }

    ];
    return (
        <div>
            <nav>
                <div onClick={() => SetOpen(!open)} className='w-6 h-6 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`md:flex justify-center bg-indigo-200 w-full absolute md-static ${open ? 'top-6' : 'top-12'}`}>
                    {
                        routes.map(route => <Link key={route.id}
                            route={route}

                        ></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;