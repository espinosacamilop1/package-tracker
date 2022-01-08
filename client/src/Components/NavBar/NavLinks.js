import './index.css'

const NavLinks = () => {
    return(
        <ul className="navlinks">
            <li>
                <a href="/about">Previous Packages</a>
            </li>
            <li>
                <a href="/work">Current Packages</a>
            </li>
            <li>
                <a href="/employees">All Employees</a></li>
            <li>
                <a href="/contact">Log Out</a>
            </li>
        </ul>

    )
}   

export default NavLinks;