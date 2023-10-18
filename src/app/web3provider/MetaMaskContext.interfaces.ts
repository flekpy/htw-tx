export interface WalletState {
  balance: string
  chainId: string
  accounts: string[]
}

export interface MetaMaskContextData {
  error: boolean
  wallet: WalletState
  errorMessage: string
  isConnecting: boolean
  clearError: () => void
  hasProvider: boolean | null
  connectMetaMask: () => void
}
