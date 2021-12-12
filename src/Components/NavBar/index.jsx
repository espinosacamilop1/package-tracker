import React from 'react'

//styles import
import './index.css'

//MUI components import
import {Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

const searchBarStyle = {
    marginRight: '10px',
    width: '58vw'
}
const searchButtonStyle = {
    height: '4.8vh',
    backgroundColor: '#66a2ba'
}

export default function NavBar() {
  return (
      <nav>
        <header className="header">
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <div className='header__searchDiv'>
                    <TextField 
                        className='header__searchBar'
                        style={searchBarStyle} 
                        type="text" 
                        placeholder="Search.."
                        size="small"
                    />
                    <Button 
                        className='header__searchButton' 
                        variant="contained"
                        style={searchButtonStyle}
                        >
                            <SearchIcon/>
                    </Button>
                </div>
                <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li>
                            <a href="/about">Previous Packages</a>
                        </li>
                        <li>
                            <a href="/work">Current Packages</a></li>
                        <li>
                            <a href="/contact">Log Out</a>
                        </li>
                    </ul>
        </header>

                
      </nav>
  )
}