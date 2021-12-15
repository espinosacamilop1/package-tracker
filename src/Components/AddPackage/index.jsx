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

function AddPackage() {

    const navigate = useNavigate()

    return (
        <div className='addPackage'>
            <nav className="addPackage__nav">
                <Button onClick={() => navigate(-1)}>
                    <MdArrowBackIosNew/>
                </Button>
            </nav>
            <div className='addPackage__trackingNumber'>
                <InputLabel>Tracking Number</InputLabel>
                <TextField></TextField>
            </div>
            <div className='addPackage__guestName'>
                <InputLabel>Guest Name</InputLabel>
                <TextField></TextField>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Carrier</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={'status'}
                            label="Carrier"
                            onChange={()=> console.log('change')}
                        >
                            <MenuItem value={10}>UPS</MenuItem>
                            <MenuItem value={20}>Amazon</MenuItem>
                            <MenuItem value={30}>Fedex</MenuItem>
                            <MenuItem value={30}>Other</MenuItem>
                        </Select>
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value='status'
                            label="Type"
                            onChange={()=> console.log('change')}
                        >
                            <MenuItem value={10}>Envelope</MenuItem>
                            <MenuItem value={20}>Small Box</MenuItem>
                            <MenuItem value={30}>Medium Box</MenuItem>
                            <MenuItem value={30}>Large Box</MenuItem>
                            <MenuItem value={30}>Luggage</MenuItem>
                            <MenuItem value={30}>Garment Bag</MenuItem>
                        </Select>
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value='status'
                            label="Location"
                            onChange={console.log('change')}
                        >
                            <MenuItem value={10}>Bell Storage</MenuItem>
                            <MenuItem value={20}>Suite Basement</MenuItem>
                            <MenuItem value={30}>Front Desk</MenuItem>
                        </Select>
                </FormControl>
            </div>
            <div className='addPackage__Notes'>
                <InputLabel>Notes</InputLabel>
                <TextField></TextField>
            </div>
            <span className='addPackage__ButtonDiv'>
                <Button
                    size='large'
                    variant="contained">
                    Add Package
                </Button>
            </span>
        </div>  
    )
}

export default AddPackage
