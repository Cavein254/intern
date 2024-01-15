import { ColorModeContext, tokens } from '@/admin/theme';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import Search from '@mui/icons-material/Search';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { useContext } from 'react';

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ml:2, flex:1}} placeholder="Search" />
                <IconButton type="button" sx={{p:1}}>
                    <Search />
                </IconButton>

            </Box>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (<LightModeOutlined/>):(<DarkModeOutlined/>)}
                </IconButton>
                <IconButton>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton>
                    <SettingsOutlined/>
                </IconButton>
                <IconButton>
                    <PersonOutlined />
                </IconButton>
            </Box>
        </Box>
    )
}

export default TopBar;