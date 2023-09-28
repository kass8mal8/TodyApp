import { useState, useEffect } from "react"
// import { useLocation } from "react-router-dom"
// import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'

const useAuth = (post, data, error) => {
    const [userData, setUserData] = useState(null)
    // const location = useLocation()
    const [open, setOpen] = useState(false)

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
        localStorage.setItem('jwt', data?.token)
    }
    data && console.log(data)
    
    const decode = jwt_decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDlhNmNlNzdhZTdmNmEwZmZlZjM1ZSIsImlhdCI6MTY5NTgyODIyMiwiZXhwIjoxNjk1ODMxODIyfQ.5U9vsm4XWKcpNeSHhP1J2-pts0jLyl79ObWrKgxMQhk")
    console.log(`Decoded: ${decode.iat}`)
    

    return { handleChange, handleClose, handleSubmit, err: error, open }
}
export default useAuth