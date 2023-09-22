import { 
  Container, 
  ThemeProvider, 
  createTheme 
} from '@mui/material'
import './styles/css/index.css'
import Header from './components/Header'
import InputField from './components/SearchBar'
import { Router, Route, Routes } from 'react-router-dom'
import Signup from './authentication/signup'
import SignIn from './authentication/signin'
import Home from './components/Home'


const App = () => {
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
