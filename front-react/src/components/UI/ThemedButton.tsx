import Button from '@mui/material/Button'

const ThemedButton = ({...props}) => {
  return (
    <Button  {...props}></Button>
    // <button className={styles.themedButton} {...props}/>
  )
}

export default ThemedButton