import { DetailedHTMLProps, HTMLAttributes } from 'react'

import MetaMaskIcon from 'shared/assets/metamaskSvgIcon/metamaskIcon.svg?react'
import { BtnWalletMM } from 'features/BtnWalletMM'
import { useMetaMask } from 'shared/hooks'
import { LogoLink } from 'shared/ui/Logo'
import styles from './Header.module.sass'

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {
  const { connectMetaMask, isConnecting, wallet } = useMetaMask()

  return (
    <header {...props} className={`${className} ${styles.headerContainer}`}>
      <LogoLink />
      {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
        <BtnWalletMM disabled={isConnecting} onClick={connectMetaMask}>
          <div className={styles.mmIconWrapper}>
            <MetaMaskIcon />
          </div>
          Connect wallet
        </BtnWalletMM>
      )}
    </header>
  )
}
