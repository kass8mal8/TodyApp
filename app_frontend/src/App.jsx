import { 
  Container, 
  ThemeProvider, 
  createTheme 
} from '@mui/material'
import './styles/css/index.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './authentication/signup'
import Home from './components/Home'
import SignIn from './authentication/SignIn'
import axios from 'axios'
import useAuthContext from './hooks/useAuthContext'
import useFetch from './hooks/useFetch'
import { useEffect } from 'react'

const App = () => {
  axios.defaults.withCredentials = true;
  const { auth } = useAuthContext()
  const { user_id } = auth 

  const url = `http://localhost:5000/api/todo/${user_id}`
  const {data, error} = useFetch(url)

  useEffect(() => {
    data && console.log(data)
  }, []);

  const theme = createTheme({
		typography: {
			fontFamily: 'josefin sans'
		}
	})

  return (
    <ThemeProvider theme={theme}> 
      <Container className='container'>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/signin' element={ <SignIn /> } />
        </Routes>
      </Container>
    </ThemeProvider>
    
  )
}

export default App
