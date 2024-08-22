import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaHeart, FaShoppingBag, FaTimes, FaUser, FaChevronRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import indiaFlag from '../../assets/icons/india-flag.png';
import user from '../../assets/user.png'
import checkout from '../../assets/checkout.png'
import logoutimg from '../../assets/logout.png'
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import logoImage from '../../assets/logo.png';
import './Header.css';
import { StoreContext } from '../Store/StoreContext';

const Header = ({ setShowLogin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const {token,cart,setToken} = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () =>{
  localStorage.removeItem("token");
  setToken("");
  navigate("/")
}

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
      setMenuVisible(false);
    } else {
      setScrolled(false);
      setMenuVisible(true);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleDropdownToggle = (index, event) => {
    event.preventDefault(); // Prevent default link behavior
    setOpenDropdown(index === openDropdown ? null : index);
    setOpenSubDropdown(null);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="header">
        <div className="header-Container">
          <div className="header-cart-container">
            <div className={`search-bar ${scrolled ? 'scrolled-search-bar' : ''}`}>
              <input type="text" placeholder="Search..." className="search-inputt" />
              <button className="search-button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <Link to="/"><div className="logo">
              <img 
                src={logoImage} 
                alt="LECOTRUS" 
                className={scrolled ? 'scrolled-logo' : 'logo-image'}
              />
            </div></Link>
            <div className={`cart-container ${scrolled ? 'scrolled-cart-container' : ''}`}>
              <div className="profile-icon-container">
              {!token?<button className='login-in'style={{padding:"5px 10px", color:"white", background:"black", border:"none", borderRadius:"5px"}}onClick={()=>setShowLogin(true)}> Log IN</button>:
                    <div className='navbar-profile'>
                        <img className="nav-profile-icon"src={user} alt="image" />
                        <ul className='nav-profile-dropdown'>
                        <Link to="/my-orders" style={{textDecoration:"none"}}><li><img className="nav-profile-icon"src={checkout} alt="" /><p>Orders</p></li></Link>
                        <hr/>
                            <li onClick={logout}><img className="nav-profile-icon" src={logoutimg} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>
                    }
              </div>
              {/* <div className="wishlist-icon-container">
                <FontAwesomeIcon icon={faRegularHeart} />
              </div> */}
              <Link to="/cart">
                <div className="cart-icon-container">
                  <FontAwesomeIcon icon={faBagShopping} />
                  <div className="cart-count">{cart.length}</div>
                </div>
              </Link>
            </div>
          </div>
          <div className={`header-menu-container ${menuVisible ? '' : 'hidden'}`}>
            <div className="navitem">
              <ul>
                <li><Link to="/newin">NEW IN</Link></li>
                <li><Link to="/empty-page">WOMEN</Link></li>
                <li><Link to="/empty-page">MEN</Link></li>
                <li><Link to="/empty-page">KIDS</Link></li>
                <li><a href="empty-page">FABRIC</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-header-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="menu-icon" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <Link to="/" ><img 
          src={logoImage} 
          alt="LECOTRUS" 
          className={scrolled ? 'scrolled-logo1' : 'logo-image1'}
        /></Link>
        <div className={`cart-container ${scrolled ? 'scrolled-cart-container' : ''}`}>
          <div className="profile-icon-container">
          {!token?<button className='login-in'style={{padding:"5px 10px", color:"white", background:"black", border:"none", borderRadius:"5px"}}onClick={()=>setShowLogin(true)}> Log IN</button>:
                    <div className='navbar-profile'>
                      <img className="nav-profile-icon"src={user} alt="image" />
                        <ul className='nav-profile-dropdown'>
                            <Link to="/my-orders"><li><img className="nav-profile-icon"src={checkout} alt="" /><p>Orders</p></li></Link>
                            <hr/>
                            <li onClick={logout}><img className="nav-profile-icon" src={logoutimg} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>
                    }
          </div>
          {/* <div className="wishlist-icon-container">
            <FontAwesomeIcon icon={faRegularHeart} />
          </div> */}
          <Link to="/cart">
                <div className="cart-icon-container">
                  <FontAwesomeIcon icon={faBagShopping} />
                  <div className="cart-count">{cart.length}</div>
                </div>
              </Link>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-top-container">
            <div className="search-Container">
              <input type="text" placeholder="Search..." className="search-Input" />
              <button className="search-Button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
              <button className="close-button" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faXmark} style={{ color: "black", size: "20px", backgroundColor: "white" }} />
              </button>
            </div>
          </div>
          <div className="navitem">
            <ul>
              <li><Link to="/newin">NEW IN <FaChevronRight className="dropdown-icon" /></Link></li>
              <li><Link to="/women">WOMEN <FaChevronRight className="dropdown-icon" /></Link></li>
              <li><Link to="/men">MEN <FaChevronRight className="dropdown-icon" /></Link></li>
              <li><Link to="/kids">KIDS <FaChevronRight className="dropdown-icon" /></Link></li>
              <li><a href="#FABRIC">FABRIC</a></li>
            </ul>
          </div>
          <div className="extra-menu">
            <FaUser style={{ color: "black" }} />
               {/* <div className="wishlist-icon-container">
              <FontAwesomeIcon icon={faRegularHeart} />
            </div> */}
            <div className="cart-icon-container">
              <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <p><img src={indiaFlag} alt="India Flag" style={{ width: '20px', height: '20px' }} />INR</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
