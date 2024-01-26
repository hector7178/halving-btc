import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";


export default function HalvingBoy(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/halving-boy-1.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(()=>{
    actions['bitcoinAction.001'].reset().play()
    actions.EsqueletoAction.reset().play()
  },[actions])

  return (
    <group ref={group} {...props} rotateX={45} dispose={null}>
      <group name="Scene">
        <mesh
          name="bitcoin"
          castShadow
          receiveShadow
          geometry={nodes.bitcoin.geometry}
          material={materials["Material.026"]}
          position={[22.058, 8.722, 5.27]}
          rotation={[1.431, -0.116, 0.313]}
          scale={[195.555, 195.555, 195.554]}
        />
        <mesh
          name="Esfera"
          castShadow
          receiveShadow
          geometry={nodes.Esfera.geometry}
          material={materials["Material.002"]}
          position={[8.162, 7.506, 1.185]}
          scale={4.114}
        />
        <group
          name="gorro"
          position={[8.074, 13.906, -0.836]}
          rotation={[-0.424, -0.03, 0.067]}
          scale={[1.691, 2.354, 1.43]}
        >
          <mesh
            name="Cono"
            castShadow
            receiveShadow
            geometry={nodes.Cono.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="Cono_1"
            castShadow
            receiveShadow
            geometry={nodes.Cono_1.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Cono_2"
            castShadow
            receiveShadow
            geometry={nodes.Cono_2.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            name="Cono_3"
            castShadow
            receiveShadow
            geometry={nodes.Cono_3.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Cono_4"
            castShadow
            receiveShadow
            geometry={nodes.Cono_4.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <mesh
          name="ojo"
          castShadow
          receiveShadow
          geometry={nodes.ojo.geometry}
          material={materials["Material.010"]}
          position={[8.055, 12.818, 4.384]}
          scale={0.874}
        />
        <mesh
          name="ijiizq"
          castShadow
          receiveShadow
          geometry={nodes.ijiizq.geometry}
          material={nodes.ijiizq.material}
          position={[9.677, 12.761, 3.827]}
          scale={-0.91}
        />
        <mesh
          name="cabeza"
          castShadow
          receiveShadow
          geometry={nodes.cabeza.geometry}
          material={materials.Material}
          position={[8.162, 11.738, 1.185]}
          scale={3.323}
        />
        <mesh
          name="boca"
          castShadow
          receiveShadow
          geometry={nodes.boca.geometry}
          material={materials["Material.021"]}
          position={[8.878, 11.326, 4.059]}
          rotation={[0, 0.272, 0]}
          scale={[1.308, 1.009, 0.874]}
        />
        <mesh
          name="nariz"
          castShadow
          receiveShadow
          geometry={nodes.nariz.geometry}
          material={materials["Material.020"]}
          position={[8.952, 12.343, 4.41]}
          scale={0.24}
        />
        <mesh
          name="Esfera006"
          castShadow
          receiveShadow
          geometry={nodes.Esfera006.geometry}
          material={materials["Material.011"]}
          position={[8.011, 12.756, 4.166]}
          scale={[0.907, 0.905, 0.846]}
        />
        <mesh
          name="Esfera007"
          castShadow
          receiveShadow
          geometry={nodes.Esfera007.geometry}
          material={materials["Material.012"]}
          position={[9.664, 12.763, 3.665]}
          scale={[0.909, 0.906, 0.906]}
        />
        <mesh
          name="cejaizq"
          castShadow
          receiveShadow
          geometry={nodes.cejaizq.geometry}
          material={materials.SKIN}
          position={[7.984, 13.906, 4.019]}
          rotation={[1.681, -0.308, 3.024]}
          scale={[1.05, 0.418, 0.418]}
        />
        <mesh
          name="cejader"
          castShadow
          receiveShadow
          geometry={nodes.cejader.geometry}
          material={materials.SKIN}
          position={[9.556, 13.778, 3.275]}
          rotation={[0.114, 0.568, 0.149]}
          scale={[1.05, 0.418, 0.418]}
        />
        <mesh
          name="lengua"
          castShadow
          receiveShadow
          geometry={nodes.lengua.geometry}
          material={materials["Material.022"]}
          position={[8.815, 11.559, 4.866]}
          scale={[0.211, 0.309, 0.211]}
        />
        <mesh
          name="pieder"
          castShadow
          receiveShadow
          geometry={nodes.pieder.geometry}
          material={materials.SKIN}
          position={[5.881, 3.633, 0.537]}
          rotation={[0.066, 0.108, 3.03]}
          scale={[0.456, 3.126, 0.456]}
        />
        <mesh
          name="pie"
          castShadow
          receiveShadow
          geometry={nodes.pie.geometry}
          material={materials.SKIN}
          position={[10.035, 3.633, 0.537]}
          rotation={[0.042, 0.119, -3.038]}
          scale={[0.456, 3.126, 0.456]}
        />
        <mesh
          name="Esfera008"
          castShadow
          receiveShadow
          geometry={nodes.Esfera008.geometry}
          material={materials["Material.013"]}
          position={[9.664, 12.673, 3.5]}
          scale={[0.999, 0.996, 0.996]}
        />
        <mesh
          name="Esfera009"
          castShadow
          receiveShadow
          geometry={nodes.Esfera009.geometry}
          material={materials["Material.014"]}
          position={[7.974, 12.688, 3.91]}
          scale={[0.972, 0.97, 0.907]}
        />
        <mesh
          name="Esfera010"
          castShadow
          receiveShadow
          geometry={nodes.Esfera010.geometry}
          material={materials["Material.018"]}
          position={[9.886, 12.818, 4.78]}
          scale={0.107}
        />
        <mesh
          name="Esfera011"
          castShadow
          receiveShadow
          geometry={nodes.Esfera011.geometry}
          material={materials["Material.019"]}
          position={[8.193, 12.911, 5.347]}
          scale={0.107}
        />
        <group
          name="Esqueleto"
          position={[13.986, 9.308, 1.302]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={4.642}
        >
          <skinnedMesh
            name="BRAZO"
            geometry={nodes.BRAZO.geometry}
            material={materials.SKIN}
            skeleton={nodes.BRAZO.skeleton}
          />
          <primitive object={nodes.Bone} />
        </group>
        <group
          name="Esqueleto001"
          position={[4.42, 9.39, 1.146]}
          rotation={[2.826, -1.502, -0.506]}
          scale={3.473}
        >
          <skinnedMesh
            name="BRAZO001"
            geometry={nodes.BRAZO001.geometry}
            material={materials["SKIN.001"]}
            skeleton={nodes.BRAZO001.skeleton}
          />
          <primitive object={nodes.Bone_1} />
        </group>
        <mesh
          name="Esfera012"
          castShadow
          receiveShadow
          geometry={nodes.Esfera012.geometry}
          material={materials["Material.025"]}
          position={[8.214, -0.554, 1.081]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-8.385, -0.37, -8.385]}
        />
        <mesh
          name="Куб035"
          castShadow
          receiveShadow
          geometry={nodes.Куб035.geometry}
          material={materials["Материал.001"]}
          position={[2.38, 10.188, 1.557]}
          rotation={[-0.248, 0.916, -1.916]}
          scale={[1.774, 1.788, 1.642]}
        />
        <mesh
          name="Окружность012"
          castShadow
          receiveShadow
          geometry={nodes.Окружность012.geometry}
          material={materials["Материал.002"]}
          position={[3.046, 17.687, -2.357]}
          rotation={[-0.674, -0.61, -1.825]}
          scale={[1.151, 1.151, 0.623]}
        />
        <mesh
          name="Куб036"
          castShadow
          receiveShadow
          geometry={nodes.Куб036.geometry}
          material={materials["Материал.003"]}
          position={[5.316, 11.338, -0.085]}
          rotation={[-0.248, 0.916, -1.415]}
          scale={[0.247, 1.411, 0.183]}
        />
        <mesh
          name="Цилиндр029"
          castShadow
          receiveShadow
          geometry={nodes.Цилиндр029.geometry}
          material={materials["Материал.001"]}
          position={[1.969, 12.631, 1.491]}
          rotation={[-0.674, -0.61, -1.825]}
          scale={[0.609, 1.663, 0.609]}
        />
        <mesh
          name="Куб037"
          castShadow
          receiveShadow
          geometry={nodes.Куб037.geometry}
          material={materials["Материал.002"]}
          position={[2.998, 11.188, 0.474]}
          rotation={[-0.248, 0.916, -1.916]}
          scale={[0.77, 1.152, 0.599]}
        />
        <mesh
          name="Сфера003"
          castShadow
          receiveShadow
          geometry={nodes.Сфера003.geometry}
          material={materials["Материал.001"]}
          position={[3.157, 10.957, 2.845]}
          rotation={[-0.674, -0.61, -1.825]}
          scale={[1.099, 0.663, 1.099]}
        />
        <mesh
          name="Куб038"
          castShadow
          receiveShadow
          geometry={nodes.Куб038.geometry}
          material={materials["Материал.001"]}
          position={[2.251, 10.081, 1.757]}
          rotation={[-0.248, 0.916, -1.916]}
          scale={[1.946, 2.03, 1.642]}
        />
        <mesh
          name="Куб039"
          castShadow
          receiveShadow
          geometry={nodes.Куб039.geometry}
          material={materials["Материал.001"]}
          position={[1.989, 8.627, 4.332]}
          rotation={[-0.248, 0.916, -1.916]}
          scale={[0.963, 0.217, 0.464]}
        />
        <mesh
          name="Окружность013"
          castShadow
          receiveShadow
          geometry={nodes.Окружность013.geometry}
          material={materials["Материал.001"]}
          position={[3.081, 6.413, 3.797]}
          rotation={[-0.248, 0.916, 2.796]}
          scale={0.392}
        />
        <mesh
          name="Куб040"
          castShadow
          receiveShadow
          geometry={nodes.Куб040.geometry}
          material={materials["Материал.003"]}
          position={[4.439, 10.955, -1.488]}
          rotation={[-0.248, 0.916, -1.895]}
          scale={[0.06, 1.022, 1.206]}
        />
        <mesh
          name="Куб041"
          castShadow
          receiveShadow
          geometry={nodes.Куб041.geometry}
          material={materials["Материал.003"]}
          position={[4.556, 10.802, -1.608]}
          rotation={[-0.248, 0.916, -1.861]}
          scale={[0.06, 1.153, 1.206]}
        />
        <mesh
          name="Куб042"
          castShadow
          receiveShadow
          geometry={nodes.Куб042.geometry}
          material={materials["Материал.003"]}
          position={[4.987, 10.54, -2.12]}
          rotation={[-0.248, 0.916, -1.786]}
          scale={[0.062, 1.699, 1.105]}
        />
        <mesh
          name="Куб043"
          castShadow
          receiveShadow
          geometry={nodes.Куб043.geometry}
          material={materials["Материал.001"]}
          position={[2.378, 9.968, 1.615]}
          rotation={[-0.248, 0.916, -1.916]}
          scale={[1.573, 2.03, 1.642]}
        />
        <mesh
          name="Окружность014"
          castShadow
          receiveShadow
          geometry={nodes.Окружность014.geometry}
          material={materials["Материал.003"]}
          position={[2.177, 14.729, -0.73]}
          rotation={[-0.248, 0.916, -1.916]}
          scale={1.583}
        />
        <mesh
          name="Плоскость005"
          castShadow
          receiveShadow
          geometry={nodes.Плоскость005.geometry}
          material={materials["Материал.003"]}
          position={[2.199, 14.535, -0.728]}
          rotation={[-0.248, 0.916, -1.916]}
          scale={1.583}
        />
        <mesh
          name="Плоскость006"
          castShadow
          receiveShadow
          geometry={nodes.Плоскость006.geometry}
          material={materials["Материал.003"]}
          position={[2.193, 14.513, -0.715]}
          rotation={[-0.248, 0.916, -1.916]}
          scale={1.583}
        />
        <mesh
          name="Куб055"
          castShadow
          receiveShadow
          geometry={nodes.Куб055.geometry}
          material={materials["Материал.003"]}
          position={[2.129, 14.577, -0.655]}
          rotation={[-0.248, 0.916, -1.916]}
          scale={1.583}
        />
        <group
          name="ОкружностьБезье006"
          position={[2.255, 15.156, -0.994]}
          rotation={[-0.674, -0.61, -1.825]}
          scale={1.583}
        />
        <mesh
          name="Куб060"
          castShadow
          receiveShadow
          geometry={nodes.Куб060.geometry}
          material={materials["Материал.003"]}
          position={[3.256, 8.065, 3.087]}
          rotation={[-0.248, 0.916, -1.916]}
          scale={[0.377, 0.248, 0.139]}
        />
        <mesh
          name="Окружность015"
          castShadow
          receiveShadow
          geometry={nodes.Окружность015.geometry}
          material={materials["Материал.001"]}
          position={[3.091, 17.458, -2.361]}
          rotation={[-0.674, -0.61, -1.825]}
          scale={[1.151, 1.151, 0.503]}
        />
        <mesh
          name="КриваяБезье010"
          castShadow
          receiveShadow
          geometry={nodes.КриваяБезье010.geometry}
          material={materials["Материал.003"]}
          position={[0.641, 11.519, 3.557]}
          rotation={[-0.674, -0.61, -1.825]}
          scale={1.583}
        />
        <mesh
          name="Цилиндр030"
          castShadow
          receiveShadow
          geometry={nodes.Цилиндр030.geometry}
          material={materials["Материал.003"]}
          position={[3.882, 9.603, 2.513]}
          rotation={[-0.248, 0.916, 2.349]}
          scale={[0.162, 0.627, 0.162]}
        />
        <mesh
          name="Цилиндр031"
          castShadow
          receiveShadow
          geometry={nodes.Цилиндр031.geometry}
          material={materials["Материал.003"]}
          position={[3.687, 9.98, 2.68]}
          rotation={[-0.248, 0.916, 0.779]}
          scale={[0.137, 0.532, 0.137]}
        />
        <mesh
          name="Куб061"
          castShadow
          receiveShadow
          geometry={nodes.Куб061.geometry}
          material={materials["Материал.002"]}
          position={[3.278, 11.036, 3.134]}
          rotation={[-0.248, 0.916, -1.916]}
          scale={[0.482, 0.402, 0.402]}
        />
        <mesh
          name="Куб062"
          castShadow
          receiveShadow
          geometry={nodes.Куб062.geometry}
          material={materials["Материал.003"]}
          position={[3.634, 12.117, 1.887]}
          rotation={[-0.367, 0.767, 2.616]}
          scale={[0.303, 0.152, 0.152]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/halving-boy-1.glb");



