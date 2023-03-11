import { useState } from 'react';
import './SearchBar.css'
import { Paper, IconButton } from '@mui/material';
import { colors } from '../constants/colors'
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

  const [value, setValue ] = useState('');
  const navigate = useNavigate();

  // console.log(value)

  const changeHendler = e => {
    e.preventDefault();
    console.log(value);
    if ( value ) {
      navigate(`/search/${value}`)
      setValue('')
    }
  }

  return (
    <Paper onSubmit={changeHendler} 
    component={'form'} 
    sx={{ border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: 'none'}}>
      <input type="text"    
      onChange={ e => setValue( e.target.value) } 
      value={value} 
      placeholder='Search... ' 
      className='search_bar' />
      <IconButton type='submit'>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar