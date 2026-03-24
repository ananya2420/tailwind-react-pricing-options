import React, { useState } from 'react'
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
  { id: 1, 
    title: "Home", 
    href: "/"
 },
  { id: 2, 
    title: "About", 
    href: "/about" 
},
  { id: 3, 
    title: "Services", 
    href: "/services" 
},
  { id: 4, 
    title: "Contact", 
    href: "/contact"
 },
];


const NavBar = () => {
    const [open,setOpen]=useState(false)

     
        const links=navigationData.map(route=><Link key={route.id} route={route}></Link>)
      
  return (
    <nav className='flex justify-between mx-10 mt-10'>
        <span className='flex' onClick={()=>setOpen(!open)}>
            {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'/>}
            <ul className={`md:hidden absolute duration-1000 ${open ? 'top-8':'-top-40'} bg-amber-200`}>
                {
                    links
                }
            </ul>
           
            <h3 className='ml-4'>My Navbar</h3>
        </span>
        
        <ul className='md:flex hidden'>
         {
            links
         }
        </ul>
      
   
    
       {/* <ul className='flex'>
            {
                navigationData.map(route=><li className='mr-10'><a href={route.path}>{route.name}</a></li>)
            } 
             </ul>*/}
        
    {/*}  <ul className='flex'>
        <li className='mt-10'><a href="/">Home</a></li>
        <li className='mt-10'><a href="/about">About </a></li>
        <li className='mt-10'><a href="/blog">Blog</a></li>
      </ul> */}

      <button>Sign In</button>
    </nav>
  )
}

export default NavBar
