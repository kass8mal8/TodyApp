import { TextField, Button, InputAdornment, Divider, Typography, Box } from "@mui/material"
import { VisibilityOff } from "@mui/icons-material"
import { Link, useLocation } from 'react-router-dom'
import { useState } from "react"
import usePost from "../hooks/usePost"
import useAuth from "../hooks/useAuth"
import GoogleButton from "../components/GoogleButton"
import AuthIntro from "./AuthIntro"
import Toast from "../components/Toast"

const SignIn = () => {
    const url = 'http://localhost:5000/auth/signin'
    const { post, data, error } = usePost(url)
    const {handleChange, handleSubmit, handleClose, err, open} = useAuth(post, data, error)
    // console.log(data)
    
    // console.log(response)

    return (  
        <Box>
            <form className="form" onSubmit={handleSubmit}>
                <AuthIntro />
                <Toast error={err} handleClose={handleClose} data={data?.message} open={open}  />
                <TextField 
                    label='Email' 
                    placeholder="email@example.com" 
                    type='email'  
                    className="input"
                    fullWidth
                    name='email'
                    onChange={handleChange}
                />
                <TextField 
                    label='Password'
                    className="input"
                    type='password'
                    name="password"
                    fullWidth
                    onChange={handleChange}
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
                    type='submit'
                >
                    Sign in
                </Button>
                <Divider sx={{m: '20px auto'}}>OR</Divider>
                <GoogleButton />

                <Typography sx={{ m: '10px auto' }}>
                    Don't have an account? <Link to='/signup' className="link">Register</Link>
                </Typography>
            </form>
        </Box>
    );
}
 
export default SignIn;