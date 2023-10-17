import { Box, Typography } from "@mui/material"
import { FunctionComponent } from "react"

const ShowBorders:FunctionComponent = () => {

    return <>
        <Box sx={{ width: '100%', backgroundColor: 'azure', height: '500px', textAlign: 'center', display: 'flex', flexDirection:'column', justifyContent: 'center' }}>
             <Typography sx={{display: 'block', margin: 'auto'}}>тимчасова сторінка для перегляду полів і відступів</Typography>
        </Box>
    </>
}

export default ShowBorders;