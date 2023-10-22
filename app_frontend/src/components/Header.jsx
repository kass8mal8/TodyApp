import { Stack, Box, Typography, IconButton, Badge } from "@mui/material"
import { ArrowBackIosNew, ArrowForwardIos, CalendarToday, Menu, SkipPrevious, MenuOpen, SortOutlined } from "@mui/icons-material"
import { useState } from 'react';
import Dates from "./Dates";
import useAuthContext from "../hooks/useAuthContext";

const Header = () => {
    const d = new Date()
    // const nums = 1
    const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'
        ]
    const m = months.filter(month => months.indexOf(month) === d.getUTCMonth())
    const [todayDate, setTodayDate] = useState( m[0] + " " + d.getFullYear())
    const {auth} = useAuthContext()
    // console.log(auth.user_id)

    return (  
        <Box className='header'>
            <Stack  direction='row' spacing={2}>
                <IconButton sx={{color: 'hsl(0, 0%, 98%)'}}>
                    <SortOutlined />
                </IconButton>
                <ul className="list">
                    <IconButton sx={{color: 'hsl(0, 0%, 98%)'}}>
                        <ArrowBackIosNew />
                    </IconButton>
                    <Typography variant='h6' sx={{mt: '5px'}} > {todayDate} </Typography>
                    <IconButton sx={{color: 'hsl(0, 0%, 98%)'}}>
                        <ArrowForwardIos />
                    </IconButton>
                </ul>
                <IconButton sx={{color: 'hsl(0, 0%, 98%)'}}>
                    <CalendarToday />
                </IconButton>
            </Stack>
            <Dates />
        </Box>
    );
}
 
export default Header;