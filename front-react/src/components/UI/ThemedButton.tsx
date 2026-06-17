import styles from '../../css/UI/button.module.css'

const ThemedButton = ({...props}) => {
  return (
    <button className={styles.themedButton} {...props}/>
  )
}

export default ThemedButton