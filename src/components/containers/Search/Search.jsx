import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
// sx properties added as example of using MUI styling instead of .css

export function Search() {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (name) {
      navigate(`/pokemon/${name}`);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex', alignItems: 'center', userSelect: 'none', width: { xs: '100%', sm: '350px', md: '500px' }, border: 'none', backgroundColor: "#ffffff", borderRadius: '8px', '@media (max-width:719px)': {
          width: '100%'
        }
      }}
      onKeyPress={handleKeyPress}
    >
      <input
        variant="outlined"
        style={{ width: '100%', padding: '0px 10px', height: '44px', borderRadius: '8px', border: 'none' }}
        placeholder="Enter pokemons name ..."
        onChange={(e) => {
          setName(e.target.value.toLowerCase())
        }}
      />
      <IconButton type="button" sx={{
        p: '10px', '&:hover': {
          borderRadius: '8px',
          boxShadow: '0 0 10px rgb(0, 0, 0)'
        },
      }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
