import { PageCaptions } from '../../consts/pageCaptions';
import styles from '../../css/containers/div-container.module.css';

const AboutPage = () => {
  return (
    <div className={styles.divContainer}>
      <h3>{PageCaptions.ABOUT}</h3>
      <p>тут будет какой то текст о проекте</p>
    </div>
  )
}

export default AboutPage