import { useMetaMask } from '../../hooks/useMetaMask'

export const AddressInfo = () => {
  const { wallet } = useMetaMask()

  return (
    <>
      {wallet.accounts.length && (
        <>
          <div>
            <strong> Wallet Accounts: </strong>
            {wallet.accounts[0]}
          </div>
        </>
      )}
    </>
  )
}
