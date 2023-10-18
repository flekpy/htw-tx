import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState
} from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

import { WalletState, MetaMaskContextData } from './MetaMaskContext.interfaces'
import { formatBalance } from 'shared/lib'

const disconnectedState: WalletState = {
  accounts: [],
  balance: '',
  chainId: ''
}
export const MetaMaskContext = createContext<MetaMaskContextData>(
  {} as MetaMaskContextData
)

export const MetaMaskContextProvider = ({ children }: PropsWithChildren) => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null)
  const [isConnecting, setIsConnecting] = useState<boolean>(false)
  const [wallet, setWallet] = useState(disconnectedState)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const clearError = () => setErrorMessage('')

  const _updateWallet = useCallback(async (providerAccounts?: any) => {
    console.log(providerAccounts, 'providerAccounts')

    const accounts =
      providerAccounts ||
      (await window.ethereum?.request({ method: 'eth_accounts' }))

    if (accounts.length == 0) {
      setWallet(disconnectedState)
      return
    }

    const balances = await window.ethereum?.request({
      method: 'eth_getBalance',
      params: [accounts[0], 'latest']
    })

    let balance = ''
    if (typeof balances === 'string') {
      balance = formatBalance(balances)
    }

    const chainId = await window.ethereum?.request({
      method: 'eth_chainId'
    })
    setWallet({ accounts, balance, chainId })
  }, [])

  const updateWalletAndAccounts = useCallback(
    () => _updateWallet(),
    [_updateWallet]
  )
  const updateWallet = useCallback(
    (accounts: any) => _updateWallet(accounts),
    [_updateWallet]
  )

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setHasProvider(Boolean(provider))

      if (provider) {
        updateWalletAndAccounts()
        window.ethereum?.on('accountsChanged', updateWallet)
        window.ethereum?.on('chainChanged', updateWalletAndAccounts)
      }
    }

    getProvider()

    return () => {
      window.ethereum?.removeListener('accountsChanged', updateWallet)
      window.ethereum?.removeListener('accountsChanged', updateWallet)
    }
  }, [updateWallet, updateWalletAndAccounts])

  const connectMetaMask = async () => {
    setIsConnecting(true)

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      clearError()
      updateWallet(accounts)
    } catch (error) {
      setErrorMessage(String(error))
    }
    setIsConnecting(false)
  }
  return (
    <MetaMaskContext.Provider
      value={{
        wallet,
        hasProvider,
        error: !!errorMessage,
        errorMessage,
        isConnecting,
        connectMetaMask,
        clearError
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  )
}
