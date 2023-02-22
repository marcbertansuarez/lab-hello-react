import ironhacklogo from '../images/ironhack-logo-xs.png';
import menutop from '../images/menu-top-xs.png';

const Navbar = () => {
    return (
    <nav className='navbar'>
        <img src={ironhacklogo} alt="Ironhack Logo" />
        <img src={menutop} alt="Menu Top" />
    </nav>
    )
}

export default Navbar;