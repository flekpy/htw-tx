import { ChangeEvent, useState, FormEvent } from 'react'
import { ethers } from 'ethers'

import styles from './FormSend.module.sass'

const regExPattern = /^[0-9]*[.,]?[0-9]*$/
export const FormSend = () => {
  const [isError, setIsError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [statusSend, setStatusSend] = useState(false)
  const [valueInput, setValueInput] = useState({amount: '', recipient: ''})

  const handlerAmountInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const isValid = regExPattern.test(value)
    if (isValid) setValueInput((prev) => ({...prev, amount: value}))
  }
  const handlerRecipientInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput((prev) => ({...prev, recipient: e.target.value}))
  }
  const handlerSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (valueInput.amount && valueInput.recipient) {
      setIsLoading(true)
      const weiAmountValue = ethers.parseEther(valueInput.amount)
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const txData = {
        to: valueInput.recipient,
        value: weiAmountValue
      }
      const receipt = await signer.sendTransaction(txData)
      const txResponse = await receipt.wait()
      if (txResponse && txResponse.status) {
        setStatusSend(true)
        setTimeout(() => { 
          setStatusSend(false) 
          setIsLoading(false)
        }, 5000)
      }
    } else {
      setIsError('enter the amount and address recipient')
      setTimeout(() => setIsError(''), 3000)
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handlerSubmitForm}>
        <div className={styles.inputWrapper}>
          <span className={styles.span}>You transfer</span>
          <input
            type="text"
            name="amount"
            minLength={1}
            maxLength={79}
            placeholder="0"
            spellCheck={false}
            autoCorrect="off"
            autoComplete="off"
            inputMode="decimal"
            className={styles.input}
            value={valueInput.amount}
            onChange={handlerAmountInput}
            pattern={String(regExPattern).slice(1, -1)}
          />
        </div>
        <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
          <span className={styles.span}>Recipient</span>
          <input 
            type="text"
            minLength={40}
            className={styles.input}
            value={valueInput.recipient}
            onChange={handlerRecipientInput}
          />
        </div>
        <button disabled={isLoading} className={styles.btnSend}>
          {isLoading ? 'loading' : 'send'}
        </button>

        {isError ? 
          (<div style={{color: 'red'}}>{isError}</div>) 
          : (statusSend && (<div>success transfer</div>))
        }
      </form>
    </>
  )
}
