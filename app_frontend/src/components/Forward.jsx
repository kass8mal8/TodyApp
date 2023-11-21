import { ArrowForwardIos } from "@mui/icons-material"
import { IconButton } from "@mui/material";
import { useState } from "react";

const Forward = ({months, currentDates, date, dates, setDates}) => {

    const [currentIndex, setCurrentIndex] = useState(
        currentDates.indexOf(date)
    )
    const datesFix = [1, 2, 3, 4, 5, 6 ]
    
    const handleForward = () => {
        if(currentIndex !== currentDates?.length - 1) {
            setDates(currentDates[currentIndex + 1])
            setCurrentIndex(currentIndex + 1)
        }
        else {
            const length = dates?.length
            if(length < 7) {
                setMonth(
                    months.filter(month => months.indexOf(month) === d.getUTCMonth() + 1)
                )

                if(length === 1) {
                    setDates(currentDates[-1].push(datesFix.slice(0, 5)))
                }
                if(length === 2) {
                    setDates(currentDates[-1].push(datesFix.slice(0, 4)))
                }
                if(length === 3) {
                    setDates(currentDates[-1].push(datesFix.slice(0, 3)))
                }
            }

            // setDates(currentDates[-1].push())
        }
        console.log("Length",dates.length)
        console.log(currentIndex, currentDates.length - 1)
        console.log("Index",currentIndex)
    }

    return ( 
        <IconButton 
            sx={{
                color: 'hsl(0, 0%, 98%)'
            }}
            onClick={handleForward}
        >
            <ArrowForwardIos />
        </IconButton>
    );
}
 
export default Forward;