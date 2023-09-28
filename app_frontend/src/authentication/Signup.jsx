import { Box, Typography, TextField, Button, InputAdornment, Divider } from "@mui/material"
import { VisibilityOff } from "@mui/icons-material"
import { Link } from 'react-router-dom'
import GoogleButton from "../components/GoogleButton";
import usePost from "../hooks/usePost";
import useAuth from "../hooks/useAuth";
import AuthIntro from "./AuthIntro";
import Toast from "../components/Toast"
import { useState } from "react";

const Signup = () => {
    const url = 'http://localhost:5000/auth/signup'
    const { post, data, error } = usePost(url)
    const {handleChange, handleSubmit, handleClose, err} = useAuth(post, data, error)
    // const [open, setOpen] = useState(false)

    return (  
        <Box>
            <form className='form' onSubmit={handleSubmit}>
                <AuthIntro />
                <Toast error={err} handleClose={handleClose} data={data?.message} open={open}  />
                <TextField 
                    label='First Name' 
                    name='first_name' 
                    placeholder="John" 
                    fullWidth
                    className="input"
                    onChange={handleChange}
                />
                <TextField 
                    label='Last Name' 
                    name='last_name' 
                    placeholder='Doe'
                    fullWidth 
                    className="input"
                    onChange={handleChange}
                />
                <TextField 
                    label='Email' 
                    name='email' 
                    placeholder="email@example.com" 
                    type='email' 
                    fullWidth
                    className="input"
                    onChange={handleChange}
                />
                <TextField 
                    label='password' 
                    type="password" 
                    fullWidth
                    name="password"
                    className="input"
                    onChange={handleChange}
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

                <Divider sx={{m: '20px auto'}}> OR </Divider>
                <GoogleButton />

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