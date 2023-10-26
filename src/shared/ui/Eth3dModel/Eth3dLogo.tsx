import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { Eth3dModel } from './Eth3dModel'
import styles from './Eth3d.module.sass'

export const Eth3dLogo = () => {
  return (
    <section className={styles.canvasWrapper}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 72 }}>
        <directionalLight color="white" intensity={1.7} position={[0, 0, 4]} />

        <Suspense fallback={null}>
          <Eth3dModel />
        </Suspense>
      </Canvas>
    </section>
  )
}
