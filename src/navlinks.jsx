import { Link } from 'react-router';

 function NavLinks() {
    return(
        <div>
             <Link to='/' >Home</Link>
             <Link to='/about' >About</Link>
             <Link to='/contact'>Contact</Link>
        </div>
    )
}
export default NavLinks;