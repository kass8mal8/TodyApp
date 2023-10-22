import { Typography, Stack, Box } from "@mui/material"
import React, { useState } from 'react';


const Dates = () => {
    let count = []
    const d = new Date()
    const today = d.getDate()

    for(let x = 1; x <= 31; x++) count.push(x)
    // console.log(count)
    const chunkSize = Math.ceil(count.length / 5)
    const currentDates = []

    for(let i = 0; i < count.length; i += chunkSize) {
        currentDates.push(count.slice(i, i + chunkSize))
    }
    console.log(currentDates)

    // const dates = currentDates.includes(today)
    let date
    for(let x of currentDates) {
        if(x.includes(today)) date = x
    }

    return (  
        <Stack 
            direction='row' 
            spacing={3.7}
            sx={{
                mt: '30px',
                marginLeft: '10px',
            }}
        >
            {date.map((current, index) => (
                <Box 
                    key={index} 
                >
                    <Box 
                        sx={{
                            border: current === today && '1px solid white',
                            color: current === today && 'black',
                            p: current === today && '12px',
                            bgcolor: current === today && 'white',
                            borderRadius: '5px',
                            mt: current === today && '-10px'
                        }}
                    >
                        <Typography 
                            variant="h5" 
                           
                        > {current}
                        </Typography>
                        <Typography variant='body2' sx={{textAlign: 'center'}}>th</Typography>
                    </Box>
                </Box>
            ))}
        </Stack>
    );
}
 
export default Dates;