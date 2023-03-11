import React from 'react';
import { Stack, Box } from '@mui/material';
import { ImYoutube } from 'react-icons/im';
import { colors } from '../constants/colors'
import { Link } from 'react-router-dom';
import { SearchBar } from '../';

const Navbar = () => {
  return (
    <Stack direction={"row"} alignItems={'center'} justifyContent={'space-between'} p={2} sx={{ position: 'sticky', top: 0, zIndex: 999, background: colors.primary, height: '10vh' }}>
       <Link to={'/'}>
          <ImYoutube style={{color: "#ff0000", height: "50px", width: '40px'}} />
       </Link>
        <SearchBar />
        <Box />
    </Stack>
  )
}

export default Navbar