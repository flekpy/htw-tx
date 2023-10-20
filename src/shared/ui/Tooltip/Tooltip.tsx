import { Link } from 'react-router-dom'
import { useState } from 'react'

import Info from 'shared/assets/tooltip/exclamation-circle.svg?react'
import Close from 'shared/assets/close/close.svg?react'
import styles from './Tooltip.module.sass'

export const Tooltip = ({ text, link }: { text: string; link: string }) => {
  const [isVisible, setIsVisible] = useState(false)

  const showTooltip = () => setIsVisible(true)
  const hideTooltip = () => setIsVisible(false)

  return (
    <div className={styles.toolTipContainer}>
      <button className={styles.btn} onMouseEnter={showTooltip} type="button">
        <Info />
      </button>
      {isVisible && (
        <div className={`${isVisible ? styles.showTooltip : styles.tooltip}`}>
          <span className={styles.textInfo}>{text}</span>
          <Link className={styles.link} to={link} target="_blank">
            {link}
          </Link>

          <button
            type="button"
            onClick={hideTooltip}
            className={`${styles.btn} ${styles.btnClose}`}
          >
            <Close />
          </button>
        </div>
      )}
    </div>
  )
}
