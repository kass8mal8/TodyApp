import { Skeleton, Stack, Box } from '@mui/material'

const MuiSkeleton = () => {
    return ( 
        <Stack 
            sx={{
                p: 1, 
                display: 'flex', 
                justifyContent: 'space-between' 
            }} 
            direction='row'
        >
            <Box>
                <Skeleton 
                    variant='text' 
                    animation='wave' 
                    width='50px' 
                    height='35px' 
                />
                <Skeleton 
                    variant='rectangle' 
                    animation='wave' 
                    width='30px' 
                    height='30px' 
                    sx={{
                        borderRadius: '30px',
                    }}
                />
            </Box>
            <Box>
                <Skeleton 
                    variant='text' 
                    animation='wave' 
                    width='80px' 
                    height='35px' 
                />

                <Skeleton 
                    variant='text'
                    animation='wave'
                    width='100px'
                    height='18px'
                />
                <Skeleton 
                    variant='text'
                    animation='wave'
                    width='150px'
                    height='18px'
                />
                <Skeleton 
                    variant='text'
                    animation='wave'
                    width='200px'
                    height='18px'
                />
            </Box>
            <Skeleton 
                variant='text' 
                animation='wave' 
                width='60px' 
                height='40px' 
                sx={{
                    marginTop: '55px'
                }}
            />
        </Stack>
            
     );
}
 
export default MuiSkeleton;