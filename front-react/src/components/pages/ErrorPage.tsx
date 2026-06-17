import { PageCaptions } from "../../consts/pageCaptions";

import styles from '../../css/containers/div-container.module.css'

const ErrorPage = ({children}) => {
  return (
    <div className={styles.divContainer}>
      <h3>{PageCaptions.ERROR}</h3>
      <p>{children}</p>
    </div>
    
  )
}

export default ErrorPage;
