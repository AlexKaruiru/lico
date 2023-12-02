import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import ProjectScreen from './screens/ProjectScreen';
import Achievements from './screens/Achievements';
import Challenges from './screens/Challenges';
import Updates from './screens/Updates';

function App() {
  return (
     <BrowserRouter>
      <Flex as='main' direction='row' bgColor='white.900'>
                  
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/projects/:id' element={<ProjectScreen />} />  
            <Route path='/project-achievements' element={<Achievements/>} />       
            <Route path='/project-challenges' element={<Challenges/>} /> 
            <Route path='/project-updates' element={<Updates/>} /> 
          </Routes>
                 
      </Flex>
    </BrowserRouter>
  );  
}

export default App;
