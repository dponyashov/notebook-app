import TextField from "@mui/material/TextField"

const ThemedTextArea = ({children='', ...props}) => {
  return (
    <TextField {...props}
      label={children}
      multiline
      rows={3}
      // maxRows={3}
      fullWidth
    />
  )
}

export default ThemedTextArea