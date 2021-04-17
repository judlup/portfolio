import { useState } from 'react';
import './Header.scss';
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Link,
  Grid,
} from '@material-ui/core';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  return (
    <div className='Header'>
      <AppBar position='static' className='appBar'>
        <Toolbar>
          <div className='header-left'>
            <Avatar src='https://pbs.twimg.com/profile_images/1229977160783482880/2PC2_PUH_400x400.jpg'></Avatar>
            <Typography variant='h6'>
              Judlup <small>.dev</small>
            </Typography>
          </div>
          <div className='header-right'>
            <Typography>
              <Link
                className={`header-navbar-links ${
                  location.pathname === '/experience'
                    ? 'navbar-links-active'
                    : null
                }`}
                href='/experience'
              >
                Experience
              </Link>
              <Link className='header-navbar-links' href='#'>
                Projects
              </Link>
              <Link className='header-navbar-links' href='#'>
                Recognitions
              </Link>
              <Link className='header-navbar-links' href='#'>
                Education
              </Link>
              <Link className='header-navbar-links' href='#'>
                Services
              </Link>
              <Link className='header-navbar-links' href='#'>
                Contact
              </Link>
            </Typography>
          </div>
          {/* Mobile */}
          <div
            className='header-right-mobile'
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            {mobileMenu ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {/* Mobile */}
        </Toolbar>
        {mobileMenu ? (
          <Grid container className='mobile-menu'>
            <Grid item xs={12} className='card-home'>
              <Typography>
                <Link className='mobile-navbar-links' href='/experience'>
                  Experience
                </Link>
                <Link className='mobile-navbar-links' href='#'>
                  Projects
                </Link>
                <Link className='mobile-navbar-links' href='#'>
                  Recognitions
                </Link>
                <Link className='mobile-navbar-links' href='#'>
                  Education
                </Link>
                <Link className='mobile-navbar-links' href='#'>
                  Services
                </Link>
                <Link className='mobile-navbar-links' href='#'>
                  Contact
                </Link>
              </Typography>
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </AppBar>
    </div>
  );
};

export default Header;
