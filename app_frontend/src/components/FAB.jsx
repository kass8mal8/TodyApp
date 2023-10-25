import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const FAB = () => {
    return ( 
        <IconButton 
            sx={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                border: '1px solid hsl(220, 98%, 61%)',
                bgcolor: 'hsl(220, 98%, 61%)',
                color: 'whitesmoke',
                
            }}
        >
            <Add sx={{p: '10px'}} />
        </IconButton>
    );
}
 
export default FAB;