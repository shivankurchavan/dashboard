import React, {useState} from 'react'
import { LightModeOutlined , DarkModeOutlined, Menu as Menuicon , Search, SettingsOutlined, ArrowDropDownCircleOutlined }  from '@mui/icons-material'
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import profileImage from 'assets/profile.jpg'
import { useTheme } from '@emotion/react'
import { AppBar, Toolbar } from '@mui/material'


function Navbar() {
    const dispatch = useDispatch();
    const theme = useTheme();

  return (
    <AppBar 
    sx ={{
        position:"static",
        background:"none",
        boxShadow:"none",
    }}>
        <Toolbar sx ={{ justifyContent: "space-between" }}>
            {/* Left side   */}
            
        </Toolbar>

    </AppBar>
  )
}

export default Navbar