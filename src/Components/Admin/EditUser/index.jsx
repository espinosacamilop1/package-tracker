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
export default function EditUser() {

    const [notes, setNotes] = useState(false)
    
    const navigate = useNavigate()

    const currentName = <span>
                            <p>Name: Camilo Espinosa</p>
                            <Button
                                onClick={() => setNotes(!notes)}
                            >
                                <RiEditBoxLine/>
                            </Button>
                        </span>

    const newName = <span>
                        <TextField/>
                        <Button
                            onClick={() => setNotes(!notes)}
                        >Update</Button>
                    </span>


    const currentPosition = <span>
                            <p>Position: Bellman</p>
                            <Button
                                onClick={() => setNotes(!notes)}
                            >
                                <RiEditBoxLine/>
                            </Button>
                        </span>

    const newPosition = <span>
                        <div className="EditUser__statusForm">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value='Stored'
                                        placeholder="Stored"
                                        label="Status"
                                        onChange={()=> setNotes(!notes)}
                                    >
                                        <MenuItem value={10}>Bellman</MenuItem>
                                        <MenuItem value={20}>Doorman</MenuItem>
                                        <MenuItem value={30}>Front Desk</MenuItem>
                                        <MenuItem value={30}>Management</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                    </span>

        const newUsername = <span>
                        <TextField/>
                        <Button
                            onClick={() => setNotes(!notes)}
                        >Update</Button>
                        </span>


        const currentUsername = <span>
                            <p>Username: camiloesp</p>
                            <Button
                                onClick={() => setNotes(!notes)}
                            >
                                <RiEditBoxLine/>
                            </Button>
        </span>
        const newPassword = <span>
                        <TextField/>
                        <Button
                            onClick={() => setNotes(!notes)}
                        >Update</Button>
                        </span>


        const currentPassword = <span>
                            <p>Password: ****************</p>
                            <Button
                                onClick={() => setNotes(!notes)}
                            >
                                <RiEditBoxLine/>
                            </Button>
        </span>

    return (
        <div className="EditUser">
            <nav className="EditUser__nav">
                <Button onClick={() => navigate(-1)}>
                    <MdArrowBackIosNew/>
                </Button>
            </nav>
            <div className="EditUser__name">
                {
                    notes ? newName : currentName
                }
            </div>
            <div className="EditUser__Position">
                {
                    notes ? newPosition : currentPosition
                }
            </div>
            <div className="EditUser__Username">
                {
                    notes ? newUsername : currentUsername
                }
            </div>
            <div className="EditUser__Password">
                {
                    notes ? newPassword : currentPassword
                }
            </div>

                <Button
                    variant="contained"
                >Delete</Button>
        </div>
    )
}

