import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/ap.service';
import { Box, Container, Typography } from '@mui/material'
import Videos  from '../videos/videos';
import { colors } from '../constants/colors'

const Search = () => {
  const [videos, setVideos] = useState([]);
  // console.log(videos)
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        // console.log(data)
        setVideos(data.items)
      } catch (error) {
        console.log(error);
      }

    } 
    getData()  
  }, [id]);
  return (
    <Box p={2} SX={{ height: '90vh'}}>
      <Container maxWidth={'90%'}>
        <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
            Search results for <span style={{ color: colors.secondary }}>{id}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  )
}

export default Search