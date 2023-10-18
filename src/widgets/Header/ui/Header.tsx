import { DetailedHTMLProps, HTMLAttributes } from 'react'

import MetaMaskIcon from 'shared/assets/metamaskSvgIcon/metamaskIcon.svg?react'
import { BtnWalletMM } from 'features/BtnWalletMM/ui/BtnWalletMM'
import { LogoLink } from 'shared/ui/Logo'
import styles from './Header.module.sass'

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header {...props} className={`${className} ${styles.headerContainer}`}>
      <LogoLink />
      <BtnWalletMM>
        <div className={styles.mmIconWrapper}>
          <MetaMaskIcon />
        </div>
        Connect wallet
      </BtnWalletMM>
    </header>
  )
}
