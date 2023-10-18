import { HTMLAttributes, DetailedHTMLProps, ReactNode, FC } from 'react'

import styles from './BtnWallet.module.sass'

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
}

export const BtnWalletMM: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.btn}>
      {children}
    </button>
  )
}
