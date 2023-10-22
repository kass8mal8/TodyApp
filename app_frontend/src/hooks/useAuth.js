import { useState, useEffect } from "react"
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
        const decode = jwt_decode(data?.token)

        const now = new Date()
        const expiry = 30 * 60 * 1000

        const options = {
            value: data?.token,
            expiry: now.getTime() + expiry
        }
        localStorage.setItem('jwt', JSON.stringify(options))
        // Delete token after 30 minutes
        setTimeout(() => localStorage.removeItem('jwt'), expiry);

        setAuth(decode)
        navigate('/')
    }
    
    
    
    

    return { handleChange, handleClose, handleSubmit, err: error, open }
}
export default useAuth
