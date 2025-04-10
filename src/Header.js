import Logo from './assets/Logo.svg'
import header from './header.css'
import { Link } from 'react-router-dom'


function Header(){
    return(
        <header className="header">
            <img src={Logo} alt="logo" style={{width:'100px'}}/>
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href='./menu'>Menu</a></li>
                <li><a href='./about'>About</a></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><a href='./online-orders'>Online Orders</a></li>
                <li><a href='./login'>Login</a></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header;