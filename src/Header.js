import Logo from './assets/Logo .svg'

function Header(){
    return(
        <header>
            <img src={Logo} alt="logo" style={{width:'100px'}}/>
        </header>
    )
}

export default Header