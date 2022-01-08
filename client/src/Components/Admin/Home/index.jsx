import React,{useState, useEffect} from 'react'
import api from '../../../api'
import {Link} from 'react-router-dom'

// Styles import
import './index.css'

//MUI components import
import {Button} from '@mui/material'
import {MdOutlineMoreVert} from 'react-icons/md'

export default function AdminHome() {

    const [employees, setEmployees] = useState([])

    useEffect( async () => {

        await api.getAllEmployees()
                    .then(employeeList =>{
                        const arrOfEmployees = employeeList.data.data;
                        setEmployees(arrOfEmployees)
                    })
    },[])


    return (
        <div>
            <Link 
                to='/add-employee'
                style={{ textDecoration:'none',
                         display: 'flex',
                         justifyContent: 'center'
                        }}
            >
                <Button
                    style={{ backgroundColor:'#3f7286', marginTop: '10px'}}
                    size='large'
                    variant='contained'
                >Add Employee</Button>
            </Link>

            <div>
                {
                    employees.map((employee)=>(
                        <div className='adminHome__userListing'>
                            <div>
                            <h4>Full Name: {employee.name}</h4>
                            <h4>Position: {employee.username}</h4>
                            <h4>Username: {employee.position}</h4>
                            </div>
                            <Link to={`/employee/${employee._id}`}>
                                <MdOutlineMoreVert
                                    className='iconStyles'
                                />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )





    return (
        <div>
            <Link 
                to='/add-employee'
                style={{ textDecoration:'none',
                         display: 'flex',
                         justifyContent: 'center'
                        }}
            >
                <Button
                    style={{ backgroundColor:'#3f7286', marginTop: '10px'}}
                    size='large'
                    variant='contained'
                >Add Employee</Button>
            </Link>

            <div className="adminHome__userListing">
                <div>
                    <h4>
                        Full Name: Camilo Espinosa
                    </h4>
                    <h4>
                        Position: Bellman
                    </h4>
                    <h4>
                        Username: camiloesp
                    </h4>

                </div>

            </div>
           
        </div>
    )
}
