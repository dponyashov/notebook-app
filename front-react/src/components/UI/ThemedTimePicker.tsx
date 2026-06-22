import TextField from '@mui/material/TextField'

const ThemedTimePicker = ({ children='', ...props }) => {
  return (
    <TextField type='time' style={{minWidth: '90px'}} label={children} {...props} />
  )
}

export default ThemedTimePicker;