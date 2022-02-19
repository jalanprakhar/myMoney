import {Link} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

import { useLogout } from '../hooks/useLogout'
//styles
import styles from './Navbar.module.css'


export default function Navbar() {
    const {logout}=useLogout()
    const {user}=useAuthContext();
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}><Link to="/">myMoney</Link></li>
            {!user && (
            <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            </>)}
            {user && (
            <>
            <li>Hello, {user.displayName}</li>
            <li>
                
                <button className='btn' onClick={logout}>Log Out</button>
            </li></>)}
        </ul>

    </nav>
  )
}
