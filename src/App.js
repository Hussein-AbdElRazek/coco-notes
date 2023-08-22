import React, { useContext, Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import Login from './pages/Login/Login';
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App()
{
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        
      </Routes>
    </ThemeProvider>
  );
}

export default App;
