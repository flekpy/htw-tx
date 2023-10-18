import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode, FC } from 'react'

import styles from './BtnWallet.module.sass'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
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
