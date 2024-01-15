"use client"
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import SideBarItem from './scenes/global/SideBar';
import TopBar from './scenes/global/TopBar';
import { ColorModeContext, useMode } from './theme';

function App() {
    const[theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box className="app">
                    <SideBarItem />
                    <Box component='main' className='content'>
                        <TopBar />
                    </Box>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )

}
export default App;