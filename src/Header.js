import Logo from './assets/Logo.svg'
import header from './header.css'

function Header(){
    return(
        <header className="header">
            <img src={Logo} alt="logo" style={{width:'100px'}}/>
        <nav className="nav">
            <ul>
                <li><a href='./home'>Home</a></li>
                <li><a href='./menu'>Menu</a></li>
                <li><a href='./about'>About</a></li>
                <li><a href='./reservations'>Reservations</a></li>
                <li><a href='./online-orders'>Online Orders</a></li>
                <li><a href='./login'>Login</a></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header