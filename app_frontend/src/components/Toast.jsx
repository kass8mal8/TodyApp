import { Snackbar, Typography } from '@mui/material'
import MuiAlert from "@mui/material/Alert"
import { forwardRef } from 'react'

const Alert = forwardRef((props, ref) => {
	return <MuiAlert  ref={ref} {...props} />
})

const Toast = ({ error, data, open, handleClose }) => {
    // console.log(data)
    console.log(error)
    return (  
        <Snackbar 
            open={open} 
            onClose={handleClose} 
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            
        >
            <Alert severity={error ? 'error' : 'success' }  > 
                <Typography> {data ? data : error } </Typography>
            </Alert>
        </Snackbar>
    );
}
 
export default Toast;