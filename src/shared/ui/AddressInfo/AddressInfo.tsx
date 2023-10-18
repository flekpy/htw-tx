import { useMetaMask } from '../../hooks/useMetaMask'
import { formatChainAsNum } from 'shared/lib'

export const AddressInfo = () => {
  const { wallet } = useMetaMask()

  return (
    <div>
      {wallet.accounts.length > 0 && (
        <>
          <div>Wallet Accounts: {wallet.accounts[0]}</div>
          <div>Wallet Balance: {wallet.balance}</div>
          <div>Wallet ChainId: {formatChainAsNum(wallet.chainId)}</div>
        </>
      )}
    </div>
  )
}
