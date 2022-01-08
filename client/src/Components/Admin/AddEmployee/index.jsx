import './index.css'
import api from '../../../api'
import React,{useState} from 'react'
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

    const [name, setName]= useState('')
    const [position, setPosition]= useState('')
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')

    const handleChangeInputName = async event =>{
        console.log(event.target.value)
        const name = event.target.value;
        setName(name)
    }

    const handleChangeInputPosition = async event =>{
        console.log(event.target.value)
        const position = event.target.value;
        setPosition(position)
    }

    const handleChangeInputUsername = async event =>{
        console.log(event.target.value)
        const username = event.target.value;
        setUsername(username)
    }

    const handleChangeInputPassword = async event =>{
        console.log(event.target.value)
        const password = event.target.value;
        setPassword(password)
    }

    const handleAddEmployee = async () =>{
        const payload = {
            name, position, username, password
        }

        await api.insertEmployee(payload)
                    .then(res => {
                        console.log(res)
                        setName('')
                        setPosition('')
                        setUsername('')
                        setPassword('')
                    })
    }

    return (
        <div className='addEmployee'>
            <nav className="addEmployee__nav">
                <Button onClick={() => navigate(-1)}>
                    <MdArrowBackIosNew/>
                </Button>
            </nav>
            <div className='addEmployee__trackingNumber'>
                <InputLabel>Name</InputLabel>
                <TextField
                    type='text'
                    value={name}
                    onChange={handleChangeInputName}
                ></TextField>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Position</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={position}
                            label="Carrier"
                            onChange={handleChangeInputPosition}
                        >
                            <MenuItem value={'Bellman'}>Bellman</MenuItem>
                            <MenuItem value={'Doorman'}>Doorman</MenuItem>
                            <MenuItem value={'Front Desk'}>Front Desk</MenuItem>
                            <MenuItem value={'Management'}>Management</MenuItem>
                        </Select>
                </FormControl>
            </div>
            <div className='addEmployee__username'>
                <InputLabel>Username</InputLabel>
                <TextField
                    type='text'
                    value={username}
                    onChange={handleChangeInputUsername}
                ></TextField>
            </div>
            <div className='addEmployee__password'>
                <InputLabel>Password</InputLabel>
                <TextField
                    type='password'
                    value={password}
                    onChange={handleChangeInputPassword}
                ></TextField>
            </div>
            <span className='addEmployee__ButtonDiv'>
                <Button
                    size='large'
                    variant="contained"
                    onClick={handleAddEmployee}
                    >
                    Add Employee
                </Button>
            </span>
        </div>  
    )
}

export default AddUser;
