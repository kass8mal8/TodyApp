import { Stack, Box, Typography, IconButton, Badge } from "@mui/material"
import {  CalendarToday, Menu, SkipPrevious, MenuOpen, SortOutlined } from "@mui/icons-material"
import { useState } from 'react';
import Dates from "./Dates";
// import useAuthContext from "../hooks/useAuthContext";
import Forward from "./Forward";
import Previous from "./Previous"

const Header = () => {
    const d = new Date()
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ]
    const [dMonth, setMonth] = useState(
        months.filter(month => months.indexOf(month) === d.getUTCMonth())
    )
    
    const [todayDate, setTodayDate] = useState( `${dMonth[0]} ${d.getFullYear()}`)

    // Date logic
    let date
    let count = []
    const today = d.getDate()

    const currentDates = []

    for(let x = 1; x <= 31; x++) count.push(x)
    const chunkSize = Math.ceil(count.length / 5)

    for(let i = 0; i < count.length; i += chunkSize) {
        currentDates.push(count.slice(i, i + chunkSize))
    }

    for(let x of currentDates) {
        if(x.includes(today)) date = x
    }

    const [dates, setDates] = useState(date)

    // forward and previous date logic
    
    // console.log(currentDates[currentIndex])
    console.log(currentDates.length)

    console.log(currentDates)
     // array to be fixed into less date size
    
    
    // console.log(date)
    
    // console.log(date)
    // console.log(dates)

    return (  
        <Box className='header'>
            <Stack  direction='row' spacing={2}>
                <IconButton 
                    sx={{
                        color: 'hsl(0, 0%, 98%)'
                    }}
                >
                    <SortOutlined />
                </IconButton>
                <ul className="list">
                    <Previous 
                        currentDates={currentDates}  
                        setDates={setDates}
                        date={date}
                    />

                    <Typography variant='h6' sx={{mt: '5px'}} > {todayDate} </Typography>
                    
                    <Forward 
                        months={months}
                        currentDates={currentDates}
                        date={date}
                        dates={dates}
                        setDates={setDates}
                    />
                </ul>
                <IconButton sx={{color: 'hsl(0, 0%, 98%)'}}>
                    <CalendarToday />
                </IconButton>
            </Stack>
            <Dates
                date={dates}
                today={today}
            />
        </Box>
    );
}
 
export default Header;