import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {useEffect, useState} from "react";
import Cookies from "./components/feature/Cookies";
import RequireAuth from "./components/RequireAuth";
import {deleteCookie} from "./utils/cookies";
import {COOKIES_PREFIX} from "./data/constants";
import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import {Box, Drawer, CssBaseline, Toolbar, List, Divider, IconButton, ListItem, ListItemButton, ListItemText} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import rtlPlugin from "stylis-plugin-rtl";
import {prefixer} from "stylis";
import createCache from "@emotion/cache";
import {CacheProvider} from "@emotion/react";
import khabarkavLogo from "../src/assets/image/khabarkav.png";

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
  open?: boolean;
}>(({theme, open}) => ({
  backgroundColor: '#F8F9FA',
  height: '100vh',
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));
const cacheRtl = createCache({key: "muirtl", stylisPlugins: [prefixer, rtlPlugin]});

function App() {
  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", "rtl");
  }, []);
  const rtlTheme = createTheme({
    direction: 'rtl',
    typography: {
      "fontFamily": `"vazir", "Arial", sans-serif`,
    }
  });
  const [isCookiesConfirmed, setCookiesConfirmed] = useState(false);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {

  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        <Box sx={{display: 'flex'}}>
          <CssBaseline/>
          <AppBar position="fixed" open={open} sx={{backgroundColor:'#104AA2'}}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{mr: 2, ...(open && {display: 'none'})}}
              >
                <MenuIcon/>
              </IconButton>
              <img src={khabarkavLogo} width={120} height="auto"/>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {width: drawerWidth}}}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}><ChevronRightIcon/></IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
              <ListItem disablePadding>
                <ListItemButton><ListItemText primary={"پروفایل اخبار"}/></ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton><ListItemText primary={"جستجوی پیشرفته"}/></ListItemButton>
              </ListItem>
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader/>
            <BrowserRouter>
              <Routes>
                {/*<Route exact path="/register" component={Register} />*/}
                {/*<Route exact path="/forgot-password" component={ForgotPassword} />*/}
                {/*<Route exact path="/reset-password" component={ResetPassword} />*/}
                <Route path='/login/:target?' element={<Login/>}/>
                <Route path='/test' element={<RequireAuth><h2>test</h2></RequireAuth>}/>
                <Route path='/' element={<RequireAuth><Home/></RequireAuth>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
              {isCookiesConfirmed ?
                "" : <Cookies isCookiesConfirmed={isCookiesConfirmed} setCookiesConfirmed={setCookiesConfirmed}/>
              }
            </BrowserRouter>
          </Main>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
