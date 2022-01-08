import './index.css'
import React from 'react'
import Logo from '../../../images/Package Tracker-logos/PackageTracker-logos_transparent.png'
import {Link} from 'react-router-dom'
// MUI Components
import  TexField  from '@mui/material/TextField'
import Button from '@mui/material/Button'


const textFieldStyles = {
    backgroundColor: 'rgb(255, 255, 255, .35)',
    marginBottom: '25px',
    borderRadius: '5px',
    width: '70%',
}

const buttonStyles = {
    backgroundColor: 'rgb(45, 106, 83, .64)',
    marginBottom: '15px',
    height: '50px',
    width: '150px',
}



function AdminLogin() {
    return (
        <div className="adminLogin">
            <div className="adminLogin__logoContainer">
                <img className="adminLogin__logo" src={Logo} alt="the package tracker logo" />
            </div>
            <div className='adminLogin__form'>
                <TexField
                    placeholder='Username'
                    size="medium"
                    style={textFieldStyles}
                /><TexField
                    placeholder='Password'
                    size="medium"
                    type="password"
                    style={textFieldStyles}
                />
                <Link
                    to='/admin-home'
                    style={{textDecoration: 'none',
                    }}  
                >
                    <Button
                        variant='contained'
                        style={buttonStyles}  
                    >
                        Log In
                    </Button>
                </Link>

            </div>
        </div>
    )
}

export default AdminLogin
