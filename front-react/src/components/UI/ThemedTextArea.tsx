import styles from '../../css/UI/input.module.css'

const ThemedTextArea = ({...props}) => {
  return (
    <textarea className={styles.themedTextArea} {...props}/>
  )
}

export default ThemedTextArea