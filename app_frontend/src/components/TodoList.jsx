import { Box, Stack, Typography } from "@mui/material";

const TodoList = ({todos, isPending, isError, error}) => {
    // console.log(todos)
    return (  
        <Box>
            {todos?.map( todo => (
                <Stack direction='row' spacing={2}>
                    <Box>
                        <Typography color='text.secondary'>{todo.time}</Typography>
                        <input type='radio' />
                    </Box>
                    <Stack >
                        <Typography variant='h6'>{todo.title}</Typography>
                        <Typography variant='body2' color='text.secondary'>{todo.description}</Typography>
                    </Stack>
                    
                </Stack>
            ))}
        </Box>
    );
}
 
export default TodoList;
