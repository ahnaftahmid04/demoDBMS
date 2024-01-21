import '../styles/leftsidebar.css'
import { sidebarLinks } from '../constants'
import { Link, useLocation } from 'react-router-dom'

export default function LeftSideBar() {
    const location = useLocation();

    return (
        <div className="leftsidebar">
            <Link to='/' className='leftsidebarHeader'>
                <img src='../../assets/logo.svg' alt='logo' className='leftsidebarLogo' />
                <h3 className='leftHeaderTitle'>HallowNest</h3>
            </Link>
            <div className="leftsidebarWrapper">
                {sidebarLinks.map((link) => (
                    <Link 
                        to={link.route} 
                        className={`leftsidebarLink ${location.pathname === link.route ? 'active' : ''}`}
                        key={link.label}>
                        <img src={link.imgURL} alt={link.label} className="leftsidebarIcon" />
                        <p className="leftsidebarTitle">{link.label}</p>
                    </Link>
                ))}
            </div>
            <Link to='/login' className='leftsidebarFooter'>
                <img src='../../assets/logout.svg' alt='exit' className='leftsidebarIcon' />
                <p className='leftsidebarTitle'>Logout</p>
            </Link>
        </div>
    )
}