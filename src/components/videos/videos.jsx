import { Box, Stack } from '@mui/material'
import React from 'react';
import { VideoCard, ChannelCard, Loader } from '../';

const videos = ({ videos }) => {
  // console.log(videos);
  if( !videos.length ) return <Loader />
  return (
    <Stack direction={'row'} width={'100%'} flexWrap={'wrap'} justifyContent={'start'} alignItems={'center'} gap={2} >
      {
        videos.map(item => (
          <Box key={item.id.videoId}>
            {
              item.id.videoId && <VideoCard video={item} />               
            }
            {
              item.id.channelId && <ChannelCard video={item} />
            }
          </Box>
        ))
      }
    </Stack>
  )
}

export default videos