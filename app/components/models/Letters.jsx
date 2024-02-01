'use client'
import { useRef, Suspense, useState, useEffect } from "react";
import {
  Text3D,
  OrbitControls,
  Center,
  Stars,
  Float,
  Sparkles,
  useMatcapTexture,
  CameraControls,
  
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

export default function Hero() {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Fecha objetivo
  

  useEffect(() => {
    const endDate = new Date("17 April 2024, 14:14 UTC");
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = endDate - now;

      // Calcula días restantes
      const remainingDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      setDays(remainingDays<10?remainingDays+0:remainingDays);

      // Calcula horas restantes
      const remainingHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(remainingHours<10?'0'+remainingHours:remainingHours);

      // Calcula minutos restantes
      const remainingMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(remainingMinutes<10?'0'+remainingMinutes:remainingMinutes);

      // Calcula segundos restantes
      const remainingSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      setSeconds(remainingSeconds<10?'0'+remainingSeconds:remainingSeconds);

      // Limpia el intervalo cuando el tiempo se agota
      if (timeLeft <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
const { width: w, height: h } = useThree((state) => state.viewport);
const ref = useRef();
 useFrame(()=>{
    ref.current.rotation.z=0
    ref.current.rotation.x=0
    ref.current.rotation.y=27.5
    ref.current.position.y=5
    ref.current.position.z=-12
    ref.current.position.x=(w<11&& w>8)?-5:w<8?-4:-7
  })

  

  
  return (
    <>
 
          <Text3D
              position={[-5, 2, -3]}
              scale={w<11&& w>8?[-0.8, 0.8, 0.5]:w<8?[-0.8, 1, 0.4]:[-0.6, 0.6, 0.6]}
              ref={ref}
              size={w / 10}
              maxWidth={[-w / 5, -h * 2, 3]}
              font={"/gt.json"}
              curveSegments={24}
              brevelSegments={1}
              bevelEnabled
              bevelSize={0.08}
              bevelThickness={0.03}
              height={1}
              lineHeight={0.9}
              letterSpacing={0.3}
            >
              {`${days}:${hours}:${minutes}:${seconds}`}
              <meshMatcapMaterial color="white"  />
            </Text3D>
   
    </>
  );
}
