import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function LittleBoy(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model-boy.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(()=>{
    actions.ArmatureAction.play()
    actions.bitcoinAction.play()

  },[actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="bitcoin"
          castShadow
          receiveShadow
          geometry={nodes.bitcoin.geometry}
          material={materials["Material.026"]}
          position={[2.64, 0.975, 1.522]}
          rotation={[1.431, -0.116, 0.313]}
          scale={34.661}
        />
        <group name="Armature" position={[-0.003, 0.611, 1.201]}>
          <skinnedMesh
            name="Cubo"
            geometry={nodes.Cubo.geometry}
            material={materials.SKIN}
            skeleton={nodes.Cubo.skeleton}
          />
          <skinnedMesh
            name="Cubo001"
            geometry={nodes.Cubo001.geometry}
            material={materials.SKIN}
            skeleton={nodes.Cubo001.skeleton}
          />
          <mesh
            name="Esfera003"
            castShadow
            receiveShadow
            geometry={nodes.Esfera003.geometry}
            material={materials["Material.096"]}
            position={[0.206, 1.175, 0.512]}
            rotation={[0.177, -0.382, 0.005]}
            scale={0.163}
          />
          <mesh
            name="Esfera004"
            castShadow
            receiveShadow
            geometry={nodes.Esfera004.geometry}
            material={materials["Material.096"]}
            position={[-0.157, 1.172, 0.526]}
            rotation={[0.177, -0.382, 0.005]}
            scale={0.164}
          />
          <skinnedMesh
            name="Esfera006"
            geometry={nodes.Esfera006.geometry}
            material={materials["SKIN.001"]}
            skeleton={nodes.Esfera006.skeleton}
          />
          <skinnedMesh
            name="Esfera007"
            geometry={nodes.Esfera007.geometry}
            material={materials["Material.097"]}
            skeleton={nodes.Esfera007.skeleton}
          />
          <skinnedMesh
            name="Esfera008"
            geometry={nodes.Esfera008.geometry}
            material={materials["Material.098"]}
            skeleton={nodes.Esfera008.skeleton}
          />
          <skinnedMesh
            name="Rosca"
            geometry={nodes.Rosca.geometry}
            material={materials["Material.092"]}
            skeleton={nodes.Rosca.skeleton}
          />
          <skinnedMesh
            name="Rosca001"
            geometry={nodes.Rosca001.geometry}
            material={materials["Material.020"]}
            skeleton={nodes.Rosca001.skeleton}
          />
          <mesh
            name="Sphere003"
            castShadow
            receiveShadow
            geometry={nodes.Sphere003.geometry}
            material={materials.Material}
            position={[0.003, 0.641, 0.606]}
            scale={[0.609, 1.032, 0.632]}
          />
          <group name="Sphere004">
            <skinnedMesh
              name="Sphere001"
              geometry={nodes.Sphere001.geometry}
              material={materials.skin}
              skeleton={nodes.Sphere001.skeleton}
            />
            <skinnedMesh
              name="Sphere001_1"
              geometry={nodes.Sphere001_1.geometry}
              material={materials["Material.002"]}
              skeleton={nodes.Sphere001_1.skeleton}
            />
            <skinnedMesh
              name="Sphere001_2"
              geometry={nodes.Sphere001_2.geometry}
              material={materials.Material}
              skeleton={nodes.Sphere001_2.skeleton}
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
        <mesh
          name="agarre"
          castShadow
          receiveShadow
          geometry={nodes.agarre.geometry}
          material={materials["Материал.003"]}
          position={[-0.866, 1.928, 1.924]}
          rotation={[-0.681, 0.08, -1.69]}
          scale={0.237}
        />
        <group
          name="Куб035"
          position={[-0.898, 1.675, 1.561]}
          rotation={[1.476, 1.427, 2.55]}
          scale={[0.266, 0.268, 0.246]}
        >
          <mesh
            name="Куб090"
            castShadow
            receiveShadow
            geometry={nodes.Куб090.geometry}
            material={materials["Материал.001"]}
          />
          <mesh
            name="Куб090_1"
            castShadow
            receiveShadow
            geometry={nodes.Куб090_1.geometry}
            material={materials["Материал.003"]}
          />
          <mesh
            name="Куб090_2"
            castShadow
            receiveShadow
            geometry={nodes.Куб090_2.geometry}
            material={materials["Материал.002"]}
          />
        </group>
        <mesh
          name="Esfera"
          castShadow
          receiveShadow
          geometry={nodes.Esfera.geometry}
          material={materials["Material.020"]}
          position={[0, -0.22, 1.179]}
          scale={[1.363, 0.249, 1.363]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model-boy.glb");