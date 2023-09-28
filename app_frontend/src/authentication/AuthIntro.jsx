import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const AuthIntro = () => {
    const location = useLocation()

    return (  
        <Box sx={{m: '10px auto'}}>
            {location.pathname === '/signin' ? 
                <Typography variant="h4">Welcome back</Typography>

            : location.pathname === '/signup' && 
                <Typography variant='h4'>
                    Register to TodyApp
                </Typography> 
            }
            <Typography color='text.secondary' variant='body1'>
                Hello there, {location.pathname === '/signin' ? 'login' : 'register'} to continue
            </Typography>
        </Box>
    );
}
 
export default AuthIntro;