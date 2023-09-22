import { Box, Typography, TextField, Button, InputAdornment, Divider } from "@mui/material"
import { VisibilityOff } from "@mui/icons-material"
import { Link } from 'react-router-dom'

const Signup = () => {
    return (  
        <Box>
            <form className='form'>
                <Typography variant='h4'>Welcome to Todo App</Typography>
                <TextField 
                    label='First Name' 
                    name='first_name' 
                    placeholder="John" 
                    fullWidth
                    className="input"
                />
                <TextField 
                    label='Last Name' 
                    name='last_name' 
                    placeholder='Doe'
                    fullWidth 
                    className="input"
                />
                <TextField 
                    label='Email' 
                    name='email' 
                    placeholder="email@example.com" 
                    type='email' 
                    fullWidth
                    className="input"
                />
                <TextField 
                    label='password' 
                    type="password" 
                    fullWidth
                    className="input"
                    InputProps = {{
                        endAdornment: 
                            <InputAdornment position='end' >
                                <VisibilityOff />
                            </InputAdornment>
                    }}
                />
                <Button 
                    type='submit' 
                    variant='contained'
                    className="btn"
                    size='large'
                >
                    register
                </Button>

                <Divider sx={{margin: '20px auto'}}> OR </Divider>
                <Button 
                    variant='outlined'
                    size="large"
                    sx={{
                       textTransform: 'capitalize',
                       width: '100%',

                    }}
                >
                    Continue with Google
                </Button>

                <Typography 
                    sx={{
                        m: '10px auto'
                    }}
                >
                    Already have an account? <Link to='/signin' className="link">login</Link>
                </Typography>
            </form>
        </Box>
    );
}
 
export default Signup;