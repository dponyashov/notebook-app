import TextField from '@mui/material/TextField'

const ThemedDatePicker = ({ children='', ...props }) => {
  return (
    <TextField type='date' style={{minWidth: '90px'}} label={children} {...props} />
  )
}

export default ThemedDatePicker;