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


    // Date logic
    let date
    let count = []
    const today = d.getDate()
    const chunkSize = Math.ceil(count.length / 5)
    const currentDates = []

    for(let x = 1; x <= 31; x++) count.push(x)

    for(let i = 0; i < count.length; i += chunkSize) {
        currentDates.push(count.slice(i, i + chunkSize))
    }

    for(let x of currentDates) {
        if(x.includes(today)) date = x
    }
    console.log(date)

    // forward and previous date logic
    const currentIndex = currentDates.indexOf(date)
    const handleForward = () => {
        if(currentIndex !== currentDates.length) {
            date = currentIndex + 1
        }
        else {

        }
    }
    const handlePrevious = () => {}

    return (  
        <Box className='header'>
            <Stack  direction='row' spacing={2}>
                <IconButton 
                    sx={{
                        color: 'hsl(0, 0%, 98%)'
                    }}
                    onClick={handlePrevious}
                >
                    <SortOutlined />
                </IconButton>
                <ul className="list">
                    <IconButton 
                        sx={{
                            color: 'hsl(0, 0%, 98%)'
                        }}
                        onClick={handleForward}
                    >
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
            <Dates 
                handleNext={handleNext} 
                handlePrevious={handlePrevious} 
                date={date}
                // today={today}
            />
        </Box>
    );
}
 
export default Header;