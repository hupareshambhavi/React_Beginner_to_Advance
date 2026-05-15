import "../style/Navbar.css"
import logo from "../assets/finiq_logo.jpg";
import {Link} from "react-router-dom"

function Navbar(){
    return(
    <>
    <nav className="navbar">

    <div className="navbar-right">
    <img src={logo} />
    <p><Link to="/">FinIQ</Link></p>
    </div>
    <ul className="navbar-left">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li>Transaction</li>
        <li>Budget</li>
        <li>Report</li>
        <li>Profile</li>
    </ul>
    </nav>

    </>
)};

export default Navbar;