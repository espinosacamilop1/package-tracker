import React, {useState, useEffect} from 'react'
import  TextField  from '@mui/material/TextField'
import {RiEditBoxLine} from 'react-icons/ri'
import {MdArrowBackIosNew} from 'react-icons/md'
import {Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useNavigate, useParams} from 'react-router-dom'
import api from '../../../api'

import './index.css'
export default function EditUser() {


    const [name, setName]= useState('')
    const [position, setPosition]= useState('')
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')

    const [nameUpdate, setNameUpdate] = useState(false)
    const [positionUpdate, setPositionUpdate] = useState(false)
    const [usernameUpdate, setUsernameUpdate] = useState(false)
    const [passwordUpdate, setPasswordUpdate] = useState(false)


    const userId = useParams();
    
    const navigate = useNavigate()



    useEffect( async ()=>{
        const id = userId.id
        const employeeObj =  await api.getEmployeeById(id)
        const employee = employeeObj.data.data
        setName(employee.name.charAt(0).toUpperCase() + employee.name.substring(1, employee.name.length))
        setPosition(employee.position)
        setUsername(employee.username)
    },[])


    const handleNameChange = async event =>{
        const name = event.target.value;
        setName(name)
    }

    const handlePositionChange = async event =>{
        const position = event.target.value;
        setPosition(position)
    }

    const handleUsernameChange = async event =>{
        const username = event.target.value;
        setUsername(username)
    }
    const handlePasswordChange = async event =>{
        const password = event.target.value;
        setPassword(password)
    }

    const handleUpdateEmployee = async () =>{
        const payload = {name, position, username, password}

        console.log(name, position, username, password)

        const id = userId.id
        await api.updateEmployeeById(id)
        .then(res => {
            console.log(res)
        })
    }

    const handleDeleteEmployee = async event =>{
        event.preventDefault()
        const id = userId.id
        api.deleteEmployeeById(id)
        navigate(-1)
    }
    const currentName = <span>
                            <p>Name: {name}</p>
                            <Button
                                onClick={() => setNameUpdate(!nameUpdate)}
                            >
                                <RiEditBoxLine/>
                            </Button>
                        </span>

    const newName = <span>
                        <TextField
                            value={name}
                            type='text'
                            onChange={handleNameChange}
                        />
                        <Button
                            onClick={() => setNameUpdate(!nameUpdate)}
                        >Apply</Button>
                    </span>


    const currentPosition = <span>
                            <p>Position: {position}</p>
                            <Button
                                onClick={() => setPositionUpdate(!positionUpdate)}
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
                                        value={position}
                                        placeholder="Stored"
                                        label="Status"
                                        onChange={(event) => {
                                            setPositionUpdate(!positionUpdate)
                                            handlePositionChange(event)
                                        }}
                                    >
                                        <MenuItem value={`Bellman`}>Bellman</MenuItem>
                                        <MenuItem value={`Doorman`}>Doorman</MenuItem>
                                        <MenuItem value={`Front Desk`}>Front Desk</MenuItem>
                                        <MenuItem value={`Managemet`}>Management</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                    </span>

        const newUsername = <span>
                        <TextField
                            value={username}
                            type='text'
                            onChange={handleUsernameChange}
                        />
                        <Button
                            onClick={() => setUsernameUpdate(!usernameUpdate)}
                        >Apply</Button>
                        </span>


        const currentUsername = <span>
                            <p>Username: {username}</p>
                            <Button
                                onClick={() => setUsernameUpdate(!usernameUpdate)}
                            >
                                <RiEditBoxLine/>
                            </Button>
        </span>
        const newPassword = <span>
                        <TextField
                            value={password}
                            type='password'
                            onChange={handlePasswordChange}
                        />
                        <Button
                            onClick={() => setPasswordUpdate(!passwordUpdate)}
                        >Apply</Button>
                        </span>


        const currentPassword = <span>
                            <p>Password: {password}</p>
                            <Button
                                onClick={() => setPasswordUpdate(!passwordUpdate)}
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
                    nameUpdate ? newName : currentName
                }
            </div>
            <div className="EditUser__Position">
                {
                    positionUpdate ? newPosition : currentPosition
                }
            </div>
            <div className="EditUser__Username">
                {
                    usernameUpdate ? newUsername : currentUsername
                }
            </div>
            <div className="EditUser__Password">
                {
                    passwordUpdate ? newPassword : currentPassword
                }
            </div>
                <Button
                        onClick={handleUpdateEmployee}
                        variant="contained"
                    >Update</Button>
                <br></br>
                <Button
                        onClick={handleDeleteEmployee}
                    variant="contained"
                >Delete</Button>
        </div>
    )
}

