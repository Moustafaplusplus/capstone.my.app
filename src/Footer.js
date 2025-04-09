import footer from './footer.css'
import Logo from './assets/Logo.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer(){
    return(
        <footer>
            <img className='footer-logo' src={Logo} alt='logo' style={{width:'200px'}}/>
            <div className='navigation'>
                <h2>Navigation</h2>
                <ul>
                <li><a href='./home'>Home</a></li>
                <li><a href='./menu'>Menu</a></li>
                <li><a href='./about'>About</a></li>
                <li><a href='./reservations'>Reservations</a></li>
                <li><a href='./online-orders'>Online Orders</a></li>
                <li><a href='./login'>Login</a></li>
                </ul>
            </div>
            <div className='contact'>
             <h2>Contacts</h2>
                <p>125, Chicago St, MainCity, US</p>
                <p>+123 43566 7899</p>
                <p>LittleLemon@gmail.com</p>
            </div>
            <div className='socialmedia'>
                <h2>Social Media</h2>
                <ul className="social-media">
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://snapchat.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-snapchat-ghost"></i></a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer