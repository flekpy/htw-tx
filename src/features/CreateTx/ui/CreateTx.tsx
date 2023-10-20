import { ChangeEvent, useState } from 'react'

import { Tooltip } from 'shared/ui/Tooltip'
import styles from './CreateTx.module.sass'

export const CreateTx = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const regex = /^[0-9]*[.,]?[0-9]*$/
    const isValid = regex.test(value)
    if (isValid) {
      setInputValue(value)
    }
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
          value={inputValue}
          onChange={handleInput}
          pattern="^[0-9]*[.,]?[0-9]*$"
          className={styles.inputAmount}
        />
      </div>
    </section>
  )
}
