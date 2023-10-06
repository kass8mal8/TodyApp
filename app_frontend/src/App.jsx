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
import { AuthProvider } from './context/AuthProvider'
import useAuthContext from './hooks/useAuthContext'

const App = () => {
  axios.defaults.withCredentials = true;
  const { auth } = useAuthContext()

  console.log(auth)
  console.log("Auth:", auth)

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
