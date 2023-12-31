import React from 'react'
import Navbar, { drawerWidth } from '../../components/navbar/Navbar'
import { Box, Toolbar } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import Notes from '../Notes/Notes'
import Trash from '../Notes/Trash'
import Tasks from '../Tasks/Tasks'
import DoneTasks from '../Tasks/DoneTasks'

const Home = () =>
{
  return (
    <div>
      <Navbar>
        <Box
          component="main"
          sx={{ flexGrow: 1, pt: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Routes>
            <Route index element={<Navigate to="notes" replace={true} />} />
            <Route path='notes' element={<Notes />} />
            <Route path='notes/trash' element={<Trash />} />
            <Route path='tasks' element={<Tasks />} />
            <Route path='tasks/done' element={<DoneTasks />} />
            {/* <Route path="*" element={<Navigate to="/notes" replace={true} />} />  */}
          </Routes>
        </Box>
      </Navbar>
    </div>
  )
}

export default Home