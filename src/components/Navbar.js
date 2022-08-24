import React, {useState} from "react";
import {
    AppBar,
    InputBase,
    styled,
    Toolbar,
    Typography,
    Box,
    Badge,
    Avatar,
    IconButton, MenuItem, Menu
} from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent : 'space-between'
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor : 'white',
    padding : '0 10px',
    borderRadius : theme.shape.borderRadius,
    width : '40%'
}))

const Icons = styled(Box)(({theme}) => ({
    display : 'none',
    gap : '15px',
    alignItems : 'center',
    [theme.breakpoints.up('sm')] : {
        display : 'flex'
    }
}))

const UserBox = styled(Box)(({theme}) => ({
    // backgroundColor : 'white'
    display : 'flex',
    gap : '10px',
    alignItems : 'center'
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
    <>
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{display : {xs: 'none', sm:'block'}}} >Test Project</Typography>
                <AcUnitIcon sx={{ display: {xs: 'block', sm:'none'} }} />
                <Search><InputBase placeholder='Search...' /></Search>
                <Icons>
                    <IconButton aria-label="cart">
                        <Badge badgeContent={4} color="error">
                            <MailOutlineRoundedIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="cart">
                        <Badge badgeContent={4} color="error">
                            <NotificationsRoundedIcon />
                        </Badge>
                    </IconButton>
                </Icons>
                <UserBox>
                    <Avatar onClick={toggleMenu}>A</Avatar>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        // anchorEl={anchorEl}
                        open={open}
                        onClose={toggleMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={toggleMenu} >Profile</MenuItem>
                        <MenuItem onClick={toggleMenu}>My account</MenuItem>
                        <MenuItem onClick={toggleMenu}>Logout</MenuItem>
                    </Menu>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    </>
    )
}
export default Navbar