import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function LittleBoy(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model-init.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="bitcoinarriba"
          castShadow
          receiveShadow
          geometry={nodes.bitcoinarriba.geometry}
          material={materials.M_Bitcoin}
          position={[1.967, 0.508, 0.333]}
          rotation={[1.523, -0.15, 0.328]}
          scale={32.769}
        />
        <mesh
          name="bitcoinabajo"
          castShadow
          receiveShadow
          geometry={nodes.bitcoinabajo.geometry}
          material={materials["M_Bitcoin.001"]}
          position={[1.925, -0.288, 0.327]}
          rotation={[1.523, 0.121, 0.341]}
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

useGLTF.preload("/model-init.glb");
