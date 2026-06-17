import styles from '../../css/UI/card.module.css';


const ScheduleContent = ({children, ...props}) => {
  return (
    <div
      className={styles.cardItem}
      {...props}>
        { children }
    </div>
  )
}

export default ScheduleContent