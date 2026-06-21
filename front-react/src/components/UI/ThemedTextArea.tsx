import TextField from "@mui/material/TextField"

const ThemedTextArea = ({children='', ...props}) => {
  return (
    <TextField {...props}
      label={children}
      multiline
      rows={4} // Sets a fixed height (4 rows)
      maxRows={6} // Expands up to 6 rows before scrolling
      variant="outlined" // Can be "outlined", "filled", or "standard"
      fullWidth
    />
  )
}

export default ThemedTextArea