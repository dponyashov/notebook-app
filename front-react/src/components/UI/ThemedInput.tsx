import styles from '../../css/UI/input.module.css'

const ThemedInput = ({...props}) => {
  return (
    <input className={styles.themedInput} {...props}/>
  )
}

export default ThemedInput