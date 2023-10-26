import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useRef, RefObject } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group, Object3DEventMap } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
    Plane001: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}
const urlEthModel3d = '/shared/assets/3dModels/eth.glb'
useGLTF.preload(urlEthModel3d)
export function Eth3dModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(urlEthModel3d) as GLTFResult
  const meshRef: RefObject<Group<Object3DEventMap>> =
    useRef<Group<Object3DEventMap>>(null)

  useFrame(() => {
    if (meshRef.current?.rotation) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group {...props} dispose={null} ref={meshRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[0, 0.049, -0.073]}
        rotation={[1.572, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.002']}
        position={[0, -2.02, -0.075]}
        rotation={[1.572, -Math.PI / 4, 0]}
      />
    </group>
  )
}
