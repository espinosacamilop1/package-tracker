import './index.css'

import React from 'react'
import {useNavigate} from 'react-router-dom'
import  TextField  from '@mui/material/TextField'
import {Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {MdArrowBackIosNew} from 'react-icons/md'

function AddUser() {

    const navigate = useNavigate()

    return (
        <div className='addEmployee'>
            <nav className="addEmployee__nav">
                <Button onClick={() => navigate(-1)}>
                    <MdArrowBackIosNew/>
                </Button>
            </nav>
            <div className='addEmployee__trackingNumber'>
                <InputLabel>Name</InputLabel>
                <TextField></TextField>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Position</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={'status'}
                            label="Carrier"
                            onChange={()=> console.log('change')}
                        >
                            <MenuItem value={10}>Bellman</MenuItem>
                            <MenuItem value={20}>Doorman</MenuItem>
                            <MenuItem value={30}>Front Desk</MenuItem>
                            <MenuItem value={30}>Management</MenuItem>
                        </Select>
                </FormControl>
            </div>
            <div className='addEmployee__username'>
                <InputLabel>Username</InputLabel>
                <TextField></TextField>
            </div>
            <div className='addEmployee__password'>
                <InputLabel>Password</InputLabel>
                <TextField></TextField>
            </div>
            <span className='addEmployee__ButtonDiv'>
                <Button
                    size='large'
                    variant="contained">
                    Add Package
                </Button>
            </span>
        </div>  
    )
}

export default AddUser;
