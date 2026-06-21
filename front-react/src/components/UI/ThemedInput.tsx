import TextField from '@mui/material/TextField'

const ThemedInput = ({ children='', ...props }) => {
  return (
    <TextField label={children} {...props} />
  )
}

export default ThemedInput;