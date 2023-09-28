import { Button } from "@mui/material";

const GoogleButton = () => {
    return (  
        <Button  
            variant="outlined"
            size='large'
            type='submit'
            sx={{
                textTransform: 'capitalize',
                width: '100%'
            }}
        >
            Continue with Google
        </Button>
    );
}
 
export default GoogleButton;