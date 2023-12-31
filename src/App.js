import React, { useContext, Suspense, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import Login from './pages/Login/Login';
import { Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import Notes from './pages/Notes/Notes';
import Home from './pages/Home/Home';
import Navbar, { drawerWidth } from './components/navbar/Navbar';
import Trash from './pages/Notes/Trash';
import AuthContext from './store/auth-context';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App()
{
  //TODO add show password in sign in / up
  const authCtx = useContext(AuthContext);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path='signup' element={<SignUp />} />
        {authCtx.isLoggedIn && <Route path='/*' element={<Home />} />}
        {!authCtx.isLoggedIn && <Route path='login' element={<Login />} />}
        {(authCtx.isLoggedIn) ? <Route path="*" element={<Navigate to="/notes" replace={true} />} /> : <Route path="*" element={<Navigate to="/login" replace={true} />} />}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
