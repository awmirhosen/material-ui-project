import React from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';

const Sidebar = ({mode, setMode}) => {
    return (
        <>
        <Box
            flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position='fixed'>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#account'>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Account" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#group'>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Group" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#freind'>
                        <ListItemIcon>
                            <PeopleAltOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="friends" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#setting'>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Setting" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#setting'>
                        <ListItemIcon>
                            <NightlightRoundOutlinedIcon />
                        </ListItemIcon>
                        <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
                    </ListItemButton>
                </ListItem>

            </List>
            </Box>
        </Box>
        </>
    )
}
export default Sidebar;