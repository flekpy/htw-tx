import { useContext } from 'react'

import { MetaMaskContext } from 'app/web3provider'

export const useMetaMask = () => {
  const context = useContext(MetaMaskContext)
  if (context === undefined) {
    throw new Error('useMetaMask must be used within a metamaskProvider')
  }

  return context
}
