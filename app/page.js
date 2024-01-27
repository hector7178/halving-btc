'use client'
import Image from "next/image";
import { useMotionValueEvent,useScroll , motion, useSpring} from 'framer-motion'
import * as THREE from 'three'
import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Text3D, useProgress } from "@react-three/drei";
import CountdownTimer from "./components/Crono";

import { Html } from "@react-three/drei"
import { useParams, useRouter } from "next/navigation";


export default function Home(params) {
  const { scrollY } = useScroll()
  const [scroll,setScroll]=useState(0)
  const [link,setlink]=useState('')
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest)
    if(latest<500){
      setlink('home')
    }
  })
  console.log(params.searchParams.page)
  useMemo(()=>{
    if(link==='home'){
      window.scrollTo(0,0)
    }else if(link==='countdown'){
      window.scrollTo(0,2580)
    }
  },[link])

  useEffect(()=>{
    if(params.searchParams.page ==='home'){
      window.scrollTo(0,0)
    }else if(params.searchParams.page ==='about'){
      window.scrollTo(0,45)
    }else if(params.searchParams.page==='countdown'){
      window.scrollTo(0,2580)
    }
  },[params.searchParams.page])
 

function Loader() {
    return (<Html center>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-amber-500 animate-spin">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>

       </Html>)
}

const HalvingBoy=lazy(()=>import('./components/models/Littleboy'),{ ssr:false})


  return (
    <motion.main className="cover min-h-[3000px] h-[380vh] md:h-[500vh] flex flex-col w-full bg-gradient-to-t from-amber-500 via-orange-50 to-orange-50 to-80%">
      <motion.section className={(scroll<65?"h-[90vh] ":"h-[100vh] ")+"fixed grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 h-[90vh] w-full z-10"}>
        <div className="order-last w-full h-full">
            <Canvas 
            
            className={(scroll<40?"opacity-100 translate-y-0 translate-x-0 ":"absoluteReq bottom-0 opacity-0 translate-y-full -translate-x-full ")+" duration-500 transition-all ease-in-out h-full order-last w-full h-full cursor-grab"} camera={{ position: [-10, 35, 100], fov: 15 }}>
                
              <OrbitControls dampingFactor={0.05} maxAzimuthAngle={0.8} minAzimuthAngle={-1} maxPolarAngle={1.8}  enableRotate={true} minPolarAngle={1.2} enableZoom={false} />
              <directionalLight color={'#ffffff'}  position={[100,0,100]} intensity={2}/>
              <directionalLight color={'#ffffff'}  position={[0,100,0]} intensity={4}/>
              <directionalLight color={'#ffffff'}  position={[-100,0,100]} intensity={4}/>
              <Suspense fallback={<Loader/>}>
                    <HalvingBoy 
                      
                      scale={0.75} 
                      position={[-10, -5, 5]}  />
                </Suspense>
              
            </Canvas>

            <div className={(scroll>40 && scroll<1400?"opacity-100 translate-y-0 translate-x-0 w-full h-full ":"absoluteReq  opacity-0 -translate-y-full -translate-x-full w-[50vw] h-[100vh]")+" duration-500 transition-all ease-in-out bg-amber-500 md:shadow-lg md:backdrop-blur-xl md:bg-white/30 order-last cursor-grab flex justify-center items-center p-8 "}>
              <Image src={'./btc.svg'} alt='btc' width={100} height={100} className={(scroll>40 && scroll<700?"opacity-100 translate-y-0 translate-x-0 ":"absoluteReq opacity-0 translate-y-full -translate-x-full ")+ " hidden md:flex bg-cover md:w-[390px] md:h-[270px] lg:w-[500px] lg:h-[350px] duration-500 transition-all ease-in-out"} ></Image>
              <Image  src={'./hold.svg'} alt='btc' width={100} height={100} className={(scroll>700 && scroll<1400?"opacity-100 translate-y-0 translate-x-0 ":"absoluteReq opacity-0 -translate-y-full -translate-x-full ")+ " hidden md:flex bg-cover md:w-[390px] md:h-[270px] lg:w-[500px] lg:h-[350px] duration-500 transition-all ease-in-out"}></Image>
            
            </div>
            
        </div> 
            
        <div className="md:order-last size-full bg-transparent py-20 md:py-20 p-6 relative z-30">
          
          <h1 className={(scroll<40?"opacity-100 translate-y-0 translate-x-0 ":"absoluteReq opacity-0 -translate-y-full translate-x-full ") +" duration-500 transition-all ease-in-out text-yellow-950 text-7xl md:text-8xl font-bold tittle"}>BITCOIN <br/> <span className="text-5xl text-amber-500">HALVING</span><br/> <span className="text-6xl">IS HERE!</span><br/> <button onClick={()=>setlink('countdown')} className="text-lg text-white bg-amber-500 rounded-lg w-fit h-fit p-2 hover:scale-105 hover:shadow-lg relative z-30">COUNTDOWN</button></h1>
          
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
          
          
          <CountdownTimer className={(scroll>2350?"opacity-100 translate-y-0 translate-x-0":"absolute opacity-0 -translate-y-full translate-x-full")+" duration-500 transition-all ease-in-out p-4 gap-4 flex flex-col "}/>
          
        </div>
      
      
      </motion.section>
      <section className={(scroll>1400 && scroll<2350?"opacity-100 translate-y-0  ":" opacity-0 translate-y-full translate-x-full ")+" fixed duration-500 transition-all ease-in-out backdrop-blur-lg bg-white/30order-last cursor-grab w-full h-[100vh] m-0 z-10 flex flex-col justify-center gap-8 p-8"}>
          <h4 className="text-amber-500 font-bold text-4xl ">Halving <span className={(scroll>1975?"opacity-100":"opacity-0")+" duration-300 transition-all ease-in-out"}>prices</span> </h4>
          <div className="flex flex-row w-fit">
            <div className="w-[800px] h-[355px] bg-cover" style={{backgroundImage:"url('./etapas.svg')",transform:`translateX(${(100*(1450-scroll))/475}%)`}}></div>  
            <div className="w-[800px] h-[355px] bg-cover" style={{backgroundImage:"url('./graficas.svg')",transform:`translateX(${(100*(1575-scroll))/475}%)`}}></div>  
        
          </div>
          
      
      </section>
      <div className="absolute h-[250vh] md:h-[400vh] w-full bg-cover opacity-70" style={{backgroundImage:"url('./fondo.svg')"}}></div>
      <span className="text-white animate-bounce w-[5%] h-fit fixed z-30 bottom-8 left-[47.5%]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-amber-500 w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </span>
    </motion.main>
  );
}
