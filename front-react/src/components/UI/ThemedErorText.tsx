import type { FC } from "react";

import styles from '../../css/UI/div-error.module.css'

interface ThemedErorTextProps {
    caption: string;
    text: string;
}

const ThemedErorText: FC<ThemedErorTextProps> = ({caption = '', text = '', ...props}) => {
  return (
    <div className={styles.divError}
      {...props}>
      <span><b>{caption}</b>{text}</span>
    </div>
  )
}

export default ThemedErorText