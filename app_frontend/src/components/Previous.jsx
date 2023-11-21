import { ArrowBackIosNew } from "@mui/icons-material"
import { IconButton } from "@mui/material";
import { useState } from 'react'

const Previous = ({currentDates, date, setDates }) => {
    const [currentIndex, setCurrentIndex] = useState(
        currentDates?.indexOf(date)
    )

    const handlePrevious = () => {
        if(currentIndex !== 0) {
            setDates(currentDates[currentIndex - 1])
            setCurrentIndex(currentIndex - 1)
        }
    }
    return (  
        <IconButton 
            sx={{
                color: 'hsl(0, 0%, 98%)'
            }}
            onClick={handlePrevious}
        >
            <ArrowBackIosNew />
        </IconButton>
    );
}
 
export default Previous;