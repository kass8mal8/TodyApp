import { useState, useEffect } from "react"
// import { useLocation } from "react-router-dom"
// import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'
import useAuthContext from "./useAuthContext"
import { useNavigate } from "react-router-dom"

const useAuth = (post, data, error) => {
    const [userData, setUserData] = useState(null)
    // const location = useLocation()
    const [open, setOpen] = useState(false)
    const { auth, setAuth } = useAuthContext()
    const navigate = useNavigate()

    const handleClose = (e, reason) => {
		if (reason === "clickaway") return
		setOpen(false)
	}
 
    const handleChange = (e) => {
        setUserData({
            ...userData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        
        // if(error) return
        post(userData) 

        // location.pathname === '/signup' && setResponse('Signup was successful')
        setOpen(true)
        console.log(data?.token)
        const decode = jwt_decode(data?.token)
        localStorage.setItem('jwt', data?.token)

        setAuth(decode)
        navigate('/')
    }
    
    
    
    

    return { handleChange, handleClose, handleSubmit, err: error, open }
}
export default useAuth
