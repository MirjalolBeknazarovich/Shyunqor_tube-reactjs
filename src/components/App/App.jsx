import { Box } from '@mui/material';
import { Routes, Route} from 'react-router-dom';
import { Main, Channel, Navbar, Search, VideoDetail } from '../';
import './App.css';

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/channel/:id' element={<Channel />} />
        <Route path='/search/:id' element={<Search />} />
        <Route path='/video/:id' element={<VideoDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
