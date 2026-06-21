import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
// import LinearProgress from "@mui/material/LinearProgress"

export const ThemedLoader = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="primary" size={40}
            title='Загрузка...'
            />
        </Box>

        // <Box sx={{ width: '100%' }}>
        //     <LinearProgress color="secondary" />
        // </Box>
    )
}
