import { TextField, Button, InputAdornment } from "@mui/material"
import { VisibilityOff } from "@mui/icons-material"

const SignIn = () => {
    return (  
        <form className="form">
            <TextField 
                label='Email' 
                placeholder="email@example.com" 
                type='email'  
                className="input"
                fullWidth
            />
            <TextField 
                label='Password'
                className="input"
                type='password'
                fullWidth
                InputProps={{
                    endAdornment:
                    <InputAdornment position="end">
                        <VisibilityOff />
                    </InputAdornment>
                }}
            />
            <Button 
                variant='contained'
                className="btn"
                size='large'
            >
                Sign in
            </Button>
        </form>
    );
}
 
export default SignIn;