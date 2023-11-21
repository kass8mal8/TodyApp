import { Typography, Stack, Box } from "@mui/material"
import React, { useState } from 'react';


const Dates = ({ date, today }) => {

    const arr = [1, 2, 3]
    

    return (  
        <Stack 
            direction='row' 
            spacing={3.2}
            sx={{
                mt: '30px',
                marginLeft: '10px',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            {date?.map((current, index) => (
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
                        <Typography variant="h5"> {current} </Typography>
                        <Typography variant='body2' sx={{textAlign: 'center'}}>
                            {arr.includes(current % 10) ? 
                            <>
                                {current % 10 === arr[0] && "st"}
                                {current % 10 === arr[1] && "nd"}
                                {current % 10 === arr[2] && "rd"}
                            </>
                                : "th"
                            }
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Stack>
    );
}
 
export default Dates;