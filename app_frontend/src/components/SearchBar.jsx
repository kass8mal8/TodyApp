import { TextField } from "@mui/material"

const SearchBar = () => {
    return (  
        <TextField 
            placeholder="Create a new todo" 
            InputProps={{
                sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        border: '1px solid white!important'
                    },
                    bgcolor: '#fff',
                    width: '165%',
                    marginTop: '30px'
                }
                
            }}
        />
    );
}
 
export default SearchBar;