import React, {useState} from 'react'
import  TextField  from '@mui/material/TextField'
import {RiEditBoxLine} from 'react-icons/ri'
import {MdArrowBackIosNew} from 'react-icons/md'
import {Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useNavigate} from 'react-router-dom'

import './index.css'
export default function MoreInfo() {

    const [location, setLocation] = useState(false)
    const [notes, setNotes] = useState(false)

    const navigate = useNavigate()

    const locationInfo = <span>
                            <p>Location: Bell Storage</p>
                                <Button 
                                    onClick={() => setLocation(!location)}
                                >
                                    <RiEditBoxLine/>
                                </Button>
                        </span>

    const locationInfoEdit = <span className="moreInfo__locationSpan">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value='status'
                                            label="Location"
                                            onChange={()=> setLocation(!location)}
                                        >
                                            <MenuItem value={10}>Bell Storage</MenuItem>
                                            <MenuItem value={20}>Suite Basement</MenuItem>
                                            <MenuItem value={30}>Front Desk</MenuItem>
                                        </Select>
                                </FormControl>
                            </span>

    const currentNote = <span>
                            <p>Notes: Guest arrives on 12/19/2021</p>
                            <Button
                                onClick={() => setNotes(!notes)}
                            >
                                <RiEditBoxLine/>
                            </Button>
                        </span>

    const newNote = <span>
                        <TextField/>
                        <Button
                            onClick={() => setNotes(!notes)}
                        >Update</Button>
                    </span>


    return (
        <div className="moreInfo">
            <nav className="moreInfo__nav">
                <Button onClick={() => navigate(-1)}>
                    <MdArrowBackIosNew/>
                </Button>
            </nav>
            <div className="moreInfo__dateEmpl">
                <p>Date: 12/04/2021</p>
                <p>Employee: Camilo Espinosa</p>
            </div>
            <div className="moreInfo__trackingNum">
                <p>Tracking Number: 4985938554935</p>
            </div>
            <div className="moreInfo__guestName">
                <p>Guest Name: John Smith</p>
            </div>
            <div className="moreInfo__packageType">
                <p>Package Type: Envelope</p>
            </div>
            <div className="moreInfo__location">
                {
                    location ? locationInfoEdit : locationInfo
                }
            </div>
            <div className="moreInfo__notes">
                {
                    notes ? newNote : currentNote
                }
            </div>
            <div className="moreInfo__statusForm">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value='Stored'
                        placeholder="Stored"
                        label="Status"
                        onChange={()=> console.log('change')}
                    >
                        <MenuItem value={10}>Stored</MenuItem>
                        <MenuItem value={20}>Delivered</MenuItem>
                        <MenuItem value={30}>DnD</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}
