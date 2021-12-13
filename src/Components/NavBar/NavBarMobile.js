import NavLinks from "./NavLinks";
import {useState} from 'react'

//React Icons
import {HiMenuAlt1} from 'react-icons/hi';
import {RiCloseLine} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs';

//MUI components import
import  TextField  from '@mui/material/TextField'
import Button from '@mui/material/Button'


const NavBarMobile = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <HiMenuAlt1 
                        className="openIcon"
                        onClick={() => setOpen(!open)}
                        />
    const closeIcon = <RiCloseLine
                        className="closeIcon"
                        onClick={() => setOpen(!open)}
                        />

    const searchBarStyle = {
        marginRight: '10px',
        width: '58vw'
    }
    const searchButtonStyle = {
        height: '4.8vh',
        backgroundColor: '#66a2ba'
    }


    return (
        <nav className="mobileNavigation">
            <div className="navBar__menu">
                {open ? closeIcon : hamburgerIcon}
                <div className='s'>
                    <TextField id="standard-basic" 
                               label="Search..." 
                               variant="standard" 
                               style={searchBarStyle} 
                               />
                    <Button
                    variant="contained"
                    style={searchButtonStyle}
                    >
                        <BsSearch/>  
                    </Button>
                </div>
            </div>

            {open && <NavLinks/>}    
        </nav>
    )
}

export default NavBarMobile;