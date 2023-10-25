import { FormSend } from 'shared/ui/FormSend'
import { Tooltip } from 'shared/ui/Tooltip'
import styles from './CreateTx.module.sass'

export const CreateTx = () => {
  return (
    <section className={styles.createTxContainer}>
      <Tooltip
        text="to get testing ETH, visit the site"
        link="https://goerlifaucet.com"
      />
      <FormSend />
    </section>
  )
}
