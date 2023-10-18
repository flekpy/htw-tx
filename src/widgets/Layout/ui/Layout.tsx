import { Outlet } from 'react-router-dom'

import styles from './Layout.module.sass'
import { Header } from '../../Header'

export const Layout = () => {
  return (
    <div className={styles.gridContainer}>
      <Header className={styles.header} />
      <main className={styles.body}>
        <Outlet />
      </main>
    </div>
  )
}
