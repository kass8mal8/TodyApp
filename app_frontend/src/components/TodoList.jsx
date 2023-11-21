import { Box, Stack, Typography } from "@mui/material";
import MuiSkeleton from "./skeleton";

const TodoList = ({todos, isPending, isError, error}) => {
    const arr = [1, 2, 3, 4, 5]
    return (  
        <Box>
            {!isPending ? 
            <> {arr.map( ar => ( <MuiSkeleton key={ar} />))} </>
            : todos?.map( todo => (
                <Stack 
                    direction='row' 
                    spacing={2}
                    sx={{
                        marginBottom: '10px',
                        borderRadius: '10px',
                        padding: '10px'
                    }}
                    key={todo.id}
                >
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
