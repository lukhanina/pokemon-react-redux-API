import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import './style.css';
import { Typography, Box, Link } from '@mui/material';
import { Search } from '../containers/Search/Search'
import logo from './img/pokemon-logo.png'
import title from './img/pokemon-title.png'
import { Typography, Box, Link } from '@mui/material';
import { Search } from '../containers/Search/Search'
import logo from './img/pokemon-logo.png'
import title from './img/pokemon-title.png'

export function Header() {
  const [isAboutUs, setIsAboutUs] = useState(false);
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#about-us') {
        setIsAboutUs(true);
      } else {
        setIsAboutUs(false);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  const [isAboutUs, setIsAboutUs] = useState(false);
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#about-us') {
        setIsAboutUs(true);
      } else {
        setIsAboutUs(false);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  return (
    <Box className='header'>
      <div className='header-wrapper'>
        <img src={logo} alt="logo-pokemon" className='logo-pokemon' />
        <img src={title} alt="pokemon-title" className='pokemon-title' />
        <Typography variant='h6' color='inherit' component='div' sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Link href={isAboutUs ? '#/' : '#about-us'} sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>{isAboutUs ? 'Pokemon list' : 'More about us'}</Link>
        </Typography>
      </div>
      <Search />
    </Box>
  )
}
