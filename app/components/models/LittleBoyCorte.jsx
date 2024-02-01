import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function LittleBoyCut(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/model-corte-aleternativa.glb"
  );
  const { actions } = useAnimations(animations, group);
  const [active,setActive]=useState(false)
  useEffect(()=>{
    group.current.rotation.x=-0.1
    group.current.rotation.y=-0.5
    group.current.rotation.z=-0.1
   if(active){
    setActive(false)
    actions['Esqueleto.001Action'].setDuration(2).reset().play()
   
    actions['Esqueleto.002Action'].setDuration(2).reset().play().repetitions=1
    actions['Esqueleto.003Action'].setDuration(2).reset().play().repetitions=1
    actions['Esqueleto.004Action'].setDuration(2).reset().play().repetitions=1
    actions['ArmatureAction.004'].setDuration(7.5).reset().play().repetitions=1
    actions['bitcoinabajoAction.001'].setDuration(8).reset().play().repetitions=1
    actions['bitcoinarribaAction.001'].setDuration(8).reset().play().repetitions=1
    setTimeout(()=>{
        actions['Esqueleto.001Action'].paused=true
        actions['Esqueleto.001Action'].paused=true
        actions['Esqueleto.002Action'].paused=true
        actions['Esqueleto.003Action'].paused=true
        actions['Esqueleto.004Action'].paused=true
    },1500)
    setTimeout(()=>{
      
    actions['ArmatureAction.004'].paused=true
    actions['bitcoinabajoAction.001'].paused=true
    actions['bitcoinarribaAction.001'].paused=true
    },7500)
    
   }
    
  },[actions,active])
  console.log(actions['Esqueleto.001Action'])
  
  return (
    <group ref={group} onClick={()=>setActive(true)} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="bitcoinarriba"
          castShadow
          receiveShadow
          geometry={nodes.bitcoinarriba.geometry}
          material={materials.M_Bitcoin}
          position={[1.929, 0.133, 0.07]}
          rotation={[1.524, 0.004, 0.336]}
          scale={32.769}
        />
        <mesh
          name="bitcoinabajo"
          castShadow
          receiveShadow
          geometry={nodes.bitcoinabajo.geometry}
          material={materials["M_Bitcoin.001"]}
          position={[1.929, 0.133, 0.07]}
          rotation={[1.524, -0.009, 0.335]}
          scale={32.5}
        />
        <mesh
          name="piso"
          castShadow
          receiveShadow
          geometry={nodes.piso.geometry}
          material={materials["Material.020"]}
          position={[0, -1.22, -0.207]}
          scale={[1.363, 0.249, 1.363]}
        />
        <group
          name="Armature"
          position={[0.039, -0.389, -0.301]}
          rotation={[0, -0.038, 0]}
        >
          <group name="cuerpo">
            <skinnedMesh
              name="Rosca"
              geometry={nodes.Rosca.geometry}
              material={materials["Material.092"]}
              skeleton={nodes.Rosca.skeleton}
            />
            <skinnedMesh
              name="Rosca_1"
              geometry={nodes.Rosca_1.geometry}
              material={materials.skin}
              skeleton={nodes.Rosca_1.skeleton}
            />
            <skinnedMesh
              name="Rosca_2"
              geometry={nodes.Rosca_2.geometry}
              material={materials["Material.002"]}
              skeleton={nodes.Rosca_2.skeleton}
            />
            <skinnedMesh
              name="Rosca_3"
              geometry={nodes.Rosca_3.geometry}
              material={materials.Material}
              skeleton={nodes.Rosca_3.skeleton}
            />
            <skinnedMesh
              name="Rosca_4"
              geometry={nodes.Rosca_4.geometry}
              material={materials["Material.020"]}
              skeleton={nodes.Rosca_4.skeleton}
            />
            <skinnedMesh
              name="Rosca_5"
              geometry={nodes.Rosca_5.geometry}
              material={materials["Material.096"]}
              skeleton={nodes.Rosca_5.skeleton}
            />
            <skinnedMesh
              name="Rosca_6"
              geometry={nodes.Rosca_6.geometry}
              material={materials["SKIN.001"]}
              skeleton={nodes.Rosca_6.skeleton}
            />
          </group>
          <group
            name="Sphere005"
            position={[0.013, 1.61, 0.602]}
            rotation={[-0.262, 0, 0]}
            scale={0.323}
          />
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
          <primitive object={nodes.Bone012} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/model-corte-aleternativa.glb");


