import { Stack, Avatar, Typography, IconButton, Badge } from "@mui/material"
import { NotificationsNone } from "@mui/icons-material"

const Header = () => {
    const viewport = document.body.clientWidth
    const count = 2

    return (  
        <Stack className='header' direction='row' spacing={2}>
            <Avatar sx={{ height:35, width: 35}} >ak</Avatar>
            <Stack >
                <Typography variant='body2'>Hey</Typography>
                <Typography variant="h6">Kassim Ali</Typography>
            </Stack>

            {/* Notifications icon */}
            <IconButton>
                <Badge badgeContent={count}>
                    <NotificationsNone />
                </Badge>
            </IconButton>
        </Stack>
    );
}
 
export default Header;