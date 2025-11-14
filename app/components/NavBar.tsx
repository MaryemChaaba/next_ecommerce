"use client"
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links =[
    {name:"Home",href:"/"},
    {name:"Men",href:"/men"},
    {name:"Women",href:"/women"},
    {name:"Teans",href:"/teans"}
]

function NavBar() {
    const pathname= usePathname()
    console.log(pathname)
  return (
    <div className='mb-8 border-b'>
      <div className='flex justify-between items-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
        <Link href="/" >
        <h1 className='text-2xl font-bold'>Neww <span className='text-primary'>One</span></h1>
        </Link>
        <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
            {links.map((link,index)=>(
                <div key={index}>
                    {pathname === link.href
                    ?(
                        <Link className='text-lg font-semibold text-primary' href={link.href}>{link.name}</Link>
                    )
                    :(
                        <Link href={link.href} className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'>{link.name}</Link>

                    )
                    }
                </div>
            ))}
        </nav>
        <div className='fex divide-x border-r sm:border-l '>
            <Button variant={'outline'} className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none'>
            <ShoppingBag/>
            <span className='hidden text-semibod text-xs text-gray-500 sm:block'>Cart</span>
            </Button>
        </div>
      </div> 
    </div>
  )
}

export default NavBar
