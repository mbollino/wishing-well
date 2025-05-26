import { Link } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import './NavBar.css';
import { useContext } from 'react'


const NavBar = () => {
  const { user, setUser } = useContext(UserContext)

  const handleSignOut = () => {
    localStorage.removeItem('token')

    setUser(null)
  }

  return (
    <nav>
      {user ? (
        <Link to='/' onClick={handleSignOut}>Sign Out</Link>
      ) : (
        <>
          <div><Link to="/sign-in">Sign In</Link></div>
          <div><Link to='/sign-up'>Sign Up</Link></div>
        </>
      )}
    </nav>
  );
};


export default NavBar;