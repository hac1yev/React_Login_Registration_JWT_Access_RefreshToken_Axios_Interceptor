import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { SiAuth0 } from "react-icons/si";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const auth = useSelector(state => state.authReducer.auth);

    return (
        <nav className="navbar navbar-expand-lg navbar-light px-5">
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarTogglerDemo03" 
                aria-controls="navbarTogglerDemo03" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/" style={{ fontSize: '40px', color: '#f0f0f0' }}>
                <SiAuth0 />
            </Link>

            <div className="collapse navbar-collapse d-flex justify-content-between px-5" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 gap-4">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link">Blog</Link>
                    </li>
                </ul>
                <Link to={auth?.accessToken ? '/profile' : '/login'} style={{ fontSize: '40px', color: '#f0f0f0' }}>
                    <CgProfile />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar