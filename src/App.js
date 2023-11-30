import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import ProjectScreen from './screens/ProjectsScreen';

function App() {
  return (
     <BrowserRouter>
      <Flex as='main' mt='72px' direction='row' bgColor='white.900'>
                  
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/projects/:id' element={<ProjectScreen />} />          
          </Routes>
                 
      </Flex>
    </BrowserRouter>
  );
}

export default App;
