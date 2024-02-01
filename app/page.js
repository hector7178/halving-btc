'use client'
import Image from "next/image";
import { useMotionValueEvent,useScroll , motion} from 'framer-motion'
import { Suspense, lazy,  useEffect, useRef, useState } from "react";
import { Canvas} from "@react-three/fiber";
import {  Center, Environment, OrbitControls } from "@react-three/drei";

import { Html } from "@react-three/drei"
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Box, Flex } from "@react-three/flex";
import Twitter from "./components/svgs/twitter";
import Instagram from "./components/svgs/Instagram";
import Facebook from "./components/svgs/Facebook";
import Telegram from "./components/svgs/Telegram";


export default function Home(params) {
  const { scrollY } = useScroll()
  const [scroll,setScroll]=useState(0)
  const [modal, setModal]=useState(false)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest)
  })
  

  useEffect(()=>{
    if(params.searchParams.page ==='home' && typeof window != "undefined"){
      window.scrollTo(0,0)
    }else if(params.searchParams.page ==='about'  && typeof window != "undefined"){
      window.scrollTo(0,45)
    }else if(params.searchParams.page==='countdown'  && typeof window != "undefined"){
      window.scrollTo(0,2580)
    }
  },[params.searchParams.page])
      
const cameraRef=useRef()
const ref=useRef()


function Loader() {
    return (<Html center>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-amber-500 animate-spin">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>

       </Html>)
}

const HalvingBoy=lazy(()=>import('./components/models/Littleboy'),{ ssr:false})
const TextCrono=lazy(()=>import('./components/models/Letters'),{ ssr:false})
const HalvingBoyCorte=lazy(()=>import('./components/models/LittleBoyCorte'),{ ssr:false})





  return (
    <motion.main className="cover min-h-[3500px] h-[380vh] md:h-[500vh] flex flex-col w-full bg-gradient-to-t from-amber-500 via-orange-50 to-orange-50 to-80%">
      <motion.section className={(scroll<65?"h-[90vh] ":"h-[100vh] ")+"fixed grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 h-[90vh] w-full z-10"}>
        <div className="order-last w-full h-full relative ">
            

            <div className={(scroll>40 && scroll<1400?"opacity-100 translate-y-0 translate-x-0 w-full h-full ":"absoluteReq  opacity-0 -translate-y-full -translate-x-full w-[50vw] h-[100vh]")+" duration-500 transition-all ease-in-out bg-amber-500 md:shadow-lg md:backdrop-blur-xl md:bg-white/30 order-last cursor-grab flex justify-center items-center p-8 "}>
              <Image src={'./btc.svg'} alt='btc' width={100} height={100} className={(scroll>40 && scroll<700?"opacity-100 translate-y-0 translate-x-0 ":"absoluteReq opacity-0 translate-y-full -translate-x-full ")+ " hidden md:flex bg-cover md:w-[390px] md:h-[270px] lg:w-[500px] lg:h-[350px] duration-500 transition-all ease-in-out"} ></Image>
              <Image  src={'./hold.svg'} alt='btc' width={100} height={100} className={(scroll>700 && scroll<1400?"opacity-100 translate-y-0 translate-x-0 ":"absoluteReq opacity-0 -translate-y-full -translate-x-full ")+ " hidden md:flex bg-cover md:w-[390px] md:h-[270px] lg:w-[500px] lg:h-[350px] duration-500 transition-all ease-in-out"}></Image>
            
            </div>
            
        </div> 
            
        <div className="md:order-last size-full bg-transparent py-20 md:py-20 p-6 relative z-30">
          
           
          <div id={'home'} className={(scroll>40 && scroll<1400?"opacity-100 translate-y-0  ":"absoluteReq  opacity-0 translate-y-full translate-x-full ")+"  duration-500 transition-all ease-in-out backdrop-blur-xl bg-white/30 shadow-lg order-last cursor-grab w-full h-[100vh] flex flex-col justify-start items-center p-8"}>
              <div className={(scroll>40 && scroll<400?"opacity-100 translate-y-0  ":"absoluteReq  opacity-0 translate-y-full translate-x-full ")+"  duration-700 transition-all ease-in-out bg-white rounded-lg shadow-lg order-last cursor-grab w-fit h-fit p-4 md:p-8 flex flex-col gap-2 md:gap-6 "}>
                <h4 className="text-amber-500 font-bold text-2xl sm:text-3xl">What is the Bitcoin halving?</h4>
                <p className="text-yellow-950 text-md md:text-sm lg:text-xl">The Bitcoin halving is a recurring event that occurs every four years and reduces the rate at which new Bitcoin are created and introduced into the market by 50%. It is an essential part of Bitcoin&apos;s built-in monetary policy, designed to control inflation.</p>
              </div>
              <div className={(scroll>400 && scroll<800?"opacity-100 translate-y-0  ":"absoluteReq  opacity-0 translate-y-full translate-x-full ")+"  duration-700 transition-all ease-in-out bg-white rounded-lg shadow-lg order-last cursor-grab w-fit h-fit p-6 md:p-8 flex flex-col gap-4 md:gap-6  "}>
                <h4 className="text-amber-500 font-bold text-2xl sm:text-3xl">Why does the halving happen?</h4>
                <p className="text-yellow-950 text-md md:text-sm lg:text-xl">The concept of halving Bitcoin at its core stems from its deflationary nature. It is designed to mimic the mining of gold from the earth: the more that is extracted, the harder it becomes to find and mine. As a result, the Bitcoin halving decreases the rate at which new Bitcoin are created, slowing down the overall &apos;production&apos; rate. This event is significant because it not only reduces the supply of new coins entering the market, but it also has the potential to drive up the value of Bitcoin if demand remains steady or increases.</p>
              </div>
              <div className={(scroll>800 && scroll<1400?"opacity-100 translate-y-0  ":"absoluteReq  opacity-0 translate-y-full translate-x-full ")+"  duration-700 transition-all ease-in-out bg-white rounded-lg shadow-lg order-last cursor-grab w-fit h-fit p-4 md:p-8 flex flex-col gap-2 md:gap-6  "}>
                <h4 className="text-amber-500 font-bold text-2xl sm:text-3xl" >What is the impact of the halving?</h4>
                <p  className="text-yellow-950 text-md md:text-sm lg:text-xl">The halving can have a significant impact on the price of Bitcoin. Historically, halvings have been followed by bull markets. This is because the decreased supply of new Bitcoin created each year makes Bitcoin more scarce, increasing its value.<br/><br/> <span className="text-amber-500">The next Bitcoin halving is expected to occur in april 2024.</span></p>
              </div>
          </div>
          
          
        </div>
      
      
      </motion.section>
      <section className={(scroll>1400 && scroll<2350?"opacity-100 translate-y-0  ":" opacity-0 translate-y-full translate-x-full ")+" fixed duration-500 transition-all ease-in-out backdrop-blur-lg bg-white/30order-last cursor-grab w-full h-[100vh] m-0 z-10 flex flex-col justify-center gap-8 p-8"}>
          <h4 className="text-amber-500 font-bold text-4xl ">Halving <span className={(scroll>1975?"opacity-100":"opacity-0")+" duration-300 transition-all ease-in-out"}>prices</span> </h4>
          <div className="flex flex-row w-fit">
            <div className="w-[800px] h-[355px] bg-cover" style={{backgroundImage:"url('./etapas.svg')",transform:`translateX(${(100*(1450-scroll))/475}%)`}}></div>  
            <div className="w-[800px] h-[355px] bg-cover" style={{backgroundImage:"url('./graficas.svg')",transform:`translateX(${(100*(1575-scroll))/475}%)`}}></div>  
        
          </div>
          
      
      </section>


  <section className={(scroll<40?"opacity-100 translate-y-0  ":" opacity-0 translate-y-full translate-x-full ")+" fixed duration-500 transition-all ease-in-out backdrop-blur-lg bg-white/30order-last cursor-grab w-full h-[100vh] m-0 z-10 flex flex-col justify-center "}>
        <buttom onClick={()=>setModal(true)} className={(scroll<40? (modal?'opacity-0 ':'opacity-100 ')+"translate-y-0 translate-x-0 ":" opacity-0 translate-y-full -translate-x-full ")+' shadow-xl rotate-[35deg] md:-rotate-[35deg] top-[45%] left-[70%] md:left-[32%] leading-4 flex rounded-full w-fit h-fit p-2 px-6 text-white bg-amber-600 font-bold hover:scale-110 transition-all duration-500 fixed z-30 cursor-pointer text-2xl'}>Sup<br/>yo</buttom>
            
        <Canvas className="w-full h-full"  camera={{ position: [-13, 7, 15], fov: 25 }}>
             <OrbitControls ref={cameraRef}
                  enableZoom={false}
                  autoRotate={false}
                  enablePan={true}
                  dampingFactor={0.05}
                  enableRotate={true} 
                  maxAzimuthAngle={0.5}
                  minAzimuthAngle={-1.5}
                  maxPolarAngle={1.5}
                  minPolarAngle={0.5}/>
             

                <Suspense fallback={<Loader/>}>
                <Flex>
                  <Center><HalvingBoyCorte /></Center>
                  <TextCrono/>
                </Flex>
                
                </Suspense>
                <Environment preset="sunset"/>
              
                
              
        </Canvas>
        <div className="absolute bottom-12 flex flex-col items-center justify-center w-3/4 h-fit left-[12.5%] gap-4" >
            <h4 className="text-2xl text-white font-bold">17 April 2024, 14:14 UTC</h4>
            
        </div>
      
  </section>

  <section  className={(modal?'opacity-100 translate-y-0 bottom-0  ':' opacity-0 translate-y-100 -bottom-full')+" transition-all duration-500 fixed  z-30 rounded-t-[4rem] shadow-xl bg-gradient-to-b from-amber-200 via-amber-400 to-amber-700 h-[50vh] w-full grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 p-6 gap-6"}>
    <div className="w-full h-full flex flex-col p-6">
      <h5 className="text-white font-bold text-4xl md:text-6xl lg:text-7xl">Follow Us</h5>
      <h5 className="text-white font-bold text-2xl">SOCIAL MEDIAS</h5>
    </div>  
    <div className="md:relative w-full h-full  grid grid-cols-4 grid-rows-2 gap-2 items-center">
      <span className="w-full h-fit flex justify-center col-span-1">
        <Link href={'https://x.com/HalvingOnSol'} className="w-full h-full flex justify-center">
        <Twitter className='w-full h-1/4 max-w-[100px] max-h-[100px] text-white opacity-70 hover:scale-110 hover:opacity-100 transition-all duration-300'/>
        </Link>
       </span>
      <span className="w-full h-fit flex justify-center col-span-1">
        <Link href={'https://t.me/HalvingOnSol'} className="w-full h-full flex justify-center">
        <Telegram className='w-full h-1/4 max-w-[100px] max-h-[100px] text-white opacity-70 hover:scale-110 hover:opacity-100 transition-all duration-300'/>
        </Link>
      </span>
      <div className="w-full h-full col-span-4 flex flex-col">
        <span className="text-white font-bold text-xl">Contact us</span>
        <span className="text-white font-bold text-lg">Email: Team@HalvingOnSol.com</span>
      </div>
      
      <button className="absolute top-6 right-6  md:top-2 md:right-2" onClick={()=>setModal(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white hover:scale-105 hover:text-red-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      </button>
    </div> 
  </section>
      

      <div className="absolute h-[250vh] md:h-[400vh] w-full bg-cover opacity-70" style={{backgroundImage:"url('./fondo.svg')"}}></div>
      <span className={(scroll>2350 || modal?"hidden ": "text-white animate-bounce w-[5%] h-fit fixed z-30 bottom-8 left-[47.5%]")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-amber-500 w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </span>
    </motion.main>
  );
}
