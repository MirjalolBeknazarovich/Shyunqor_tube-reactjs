import { Stack, Box, Typography, Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { colors } from '../constants/colors';
import { Category, Videos } from '../index';
import { ApiService } from '../../service/ap.service'

const Main = () => {
  const [ selectedCategory, setSelectedCategory] =useState('New');
  const selectedCategoryHendler = category => setSelectedCategory(category);
  const [ videos, setVideos ] = useState([]);
  // console.log(process.env.REACT_APP_PUBLIC_KEY);

  useEffect( () => {

    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
        setVideos(data.items)
      } catch ( error ) {
        console.log( error )
      }
    }
    
    getData()

    // ApiService.fetching('search').then( data => setVideos(data))
  }, [selectedCategory])

  return (
    <Stack>
     <Category selectedCategoryHendler={selectedCategoryHendler} selectedCategory={selectedCategory} />
      <Box sx={{height: '90vh', p: 2}}>
        <Container maxWidth={'90%'}>
          <Typography variant='h4' fontWeight={'bold'} mb={2}>{selectedCategory} <span style={{color: colors.secondary}}>Video</span></Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}

export default Main