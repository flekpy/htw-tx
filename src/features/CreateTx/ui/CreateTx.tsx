import { ChangeEvent, useState } from 'react'

import { Tooltip } from 'shared/ui/Tooltip'
import styles from './CreateTx.module.sass'

const regExPattern = /^[0-9]*[.,]?[0-9]*$/
export const CreateTx = () => {
  const [amountInput, setAmountInput] = useState('')
  const [recipientInput, setRecipientInput] = useState('')

  const handleAmountInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const isValid = regExPattern.test(value)
    if (isValid) setAmountInput(value)
  }
  const handleRecipientInput = (e: ChangeEvent<HTMLInputElement>) => {
    setRecipientInput(e.target.value)
  }

  return (
    <section className={styles.createTxContainer}>
      <Tooltip
        text="Чтобы получить тестовые ETH, посетите сайт"
        link="https://goerlifaucet.com"
      />
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
          value={amountInput}
          className={styles.input}
          onChange={handleAmountInput}
          pattern={String(regExPattern)}
        />
      </div>

      <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
        <span className={styles.span}>Recipient</span>
        <input 
          type="text"
          minLength={40}
          value={recipientInput}
          className={styles.input}
          onChange={handleRecipientInput}
        />
      </div>

      <button className={styles.btnSend}>send</button>
    </section>
  )
}
