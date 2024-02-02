'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'

function Navbar(prop) {
  
  const [open , setOPen ]=useState(false)
  const { scrollY } = useScroll()
  const [scroll,setScroll]=useState(0)
  const [change,setChange]=useState(true)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest)
    if(change){
      setChange(false)
    }
   
  })

  useEffect(()=>{
      setTimeout(()=>{
        setChange(true)
      },7000)
  },[change])


  return (
  <>
   
    <header className={(scroll>65?(!change?' fixed translate-y-0 origin-top transition-all duration-1000 ease-out ':' origin-top transition-all duration-1000 ease-out fixed md:-translate-y-full hover:translate-y-0 '):' bg-transparent md:bg-orange-50 fixed md:relative ')+'  w-full h-[11vh] grid grid-cols-5 z-20'}>
      <div className='col-span-2 p-4'>
        <Image src={'/logo.svg'} alt='logo' width={100} height={100} className=' w-[220px] h-[60px] md:h-[80px] lg:h-[120px] '></Image>

      </div>
      <div className='col-span-3 flex justify-end '>
        <ul className={(open?'flex flex-col md:flex-row  pt-6  absolute md:static z-20 right-0 scale-100':'flex  flex-col absolute  md:static top-0 right-0 md:flex-row gap-2 scale-0 md:scale-100')+' rounded-bl-lg bg-orange-50 md:bg-transparent h-fit w-fit md:justify-end origin-top-right transition-all duration-300 ease-in-out gap-6 p-4'}>
          <li className='w-full flex items-end justify-end md:hidden' onClick={()=>setOPen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-950 hover:scale-105 hover:text-red-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

          </li>
          <li>
            <Link href={'/?page=home'}  className=' text-yellow-950 text-lg flex-row flex items-center gap-2 hover:border-b-2 rounded-lg hover:border-amber-500  p-2 ease-in-out duration-150 transition-all'>
              
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href={'/?page=about'} className=' text-yellow-950 text-lg flex-row flex items-center gap-2 hover:border-b-2 rounded-lg hover:border-amber-500  p-2 ease-in-out duration-150 transition-all'>
           
              <span>How It Works?</span>
            </Link>
          </li>
        
        </ul> 
        
        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setOPen(true)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={(open?"flex scale-0 opacity-0 w-8 h-8 absolute right-6 top-6":"scale-100 opacity-1 flex md:hidden w-8 h-8 absolute right-6 top-6")+' transition-all duration-300 ease-in-out text-yellow-950'}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    
    </header>
   
  </>
 
  )
}

export default Navbar