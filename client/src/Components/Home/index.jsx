import React from 'react'
import {Link} from 'react-router-dom'

// Styles import
import './index.css'

//Components import
import NavBar from '../NavBar/Navigation'


//MUI components import
import {Button} from '@mui/material'
import {MdOutlineMoreVert} from 'react-icons/md'

function Home() {

    return (
        <div className="home">
            <NavBar/>
            <Link 
                to='/add-package'
                style={{ textDecoration:'none',
                         display: 'flex',
                         justifyContent: 'center'
                        }}
            >
                <Button
                    style={{ backgroundColor:'#3f7286', marginTop: '10px'}}
                    size='large'
                    variant='contained'
                >Add Package</Button>
            </Link>
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
            <div className="home__packageListing">
                <div>
                    <h4>
                        Tracking Number: 4985938554935
                    </h4>
                    <h4>
                        Name: John Smith
                    </h4>
                    <h4>
                        Carrier: Fedex
                    </h4>
                    <h4>
                        Type: Envelope
                    </h4>
                </div>
                <Link to='/moreInfo'>
                    <MdOutlineMoreVert
                        className='iconStyles'
                    />
                </Link>
            </div>

            <div className="home__packageListing">
                <div>
                    <h4>
                        Tracking Number: 4985938554935
                    </h4>
                    <h4>
                        Name: John Smith
                    </h4>
                    <h4>
                        Carrier: Fedex
                    </h4>
                    <h4>
                        Type: Envelope
                    </h4>
                </div>
                <Link to='/edit'>
                    <MdOutlineMoreVert
                        className='iconStyles'
                    />
                </Link>
            </div>

            <div className="home__packageListing">
                <div>
                    <h4>
                        Tracking Number: 4985938554935
                    </h4>
                    <h4>
                        Name: John Smith
                    </h4>
                    <h4>
                        Carrier: Fedex
                    </h4>
                    <h4>
                        Type: Envelope
                    </h4>
                </div>
                <Link to='/edit'>
                    <MdOutlineMoreVert
                        className='iconStyles'
                    />
                </Link>
            </div>
            <div className="home__packageListing">
                <div>
                    <h4>
                        Tracking Number: 4985938554935
                    </h4>
                    <h4>
                        Name: John Smith
                    </h4>
                    <h4>
                        Carrier: Fedex
                    </h4>
                    <h4>
                        Type: Envelope
                    </h4>
                </div>
                <Link to='/edit'>
                    <MdOutlineMoreVert
                        className='iconStyles'
                    />
                </Link>
            </div>            <div className="home__packageListing">
                <div>
                    <h4>
                        Tracking Number: 4985938554935
                    </h4>
                    <h4>
                        Name: John Smith
                    </h4>
                    <h4>
                        Carrier: Fedex
                    </h4>
                    <h4>
                        Type: Envelope
                    </h4>
                </div>
                <Link to='/edit'>
                    <MdOutlineMoreVert
                        className='iconStyles'
                    />
                </Link>
            </div>


            <div className="home__packageListing">
                <div>
                    <h4>
                        Tracking Number: 4985938554935
                    </h4>
                    <h4>
                        Name: John Smith
                    </h4>
                    <h4>
                        Carrier: Fedex
                    </h4>
                    <h4>
                        Type: Envelope
                    </h4>
                </div>
                <Link to='/edit'>
                    <MdOutlineMoreVert
                        className='iconStyles'
                    />
                </Link>
            </div>

            <div className="home__packageListing">
                <div>
                    <h4>
                        Tracking Number: 4985938554935
                    </h4>
                    <h4>
                        Name: John Smith
                    </h4>
                    <h4>
                        Carrier: Fedex
                    </h4>
                    <h4>
                        Type: Envelope
                    </h4>
                </div>
                <Link to='/more'>
                    <MdOutlineMoreVert
                        className='iconStyles'
                    />
                </Link>
            </div>

            <div className="home__packageListing">
                <div>
                    <h4>
                        Tracking Number: 4985938554935
                    </h4>
                    <h4>
                        Name: John Smith
                    </h4>
                    <h4>
                        Carrier: Fedex
                    </h4>
                    <h4>
                        Type: Envelope
                    </h4>
                </div>
                <Link to='/edit'>
                    <MdOutlineMoreVert
                        className='iconStyles'
                    />
                </Link>
            </div>

         
        </div>
    )
}

export default Home
