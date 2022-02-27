import logo from './logo.svg';
import './App.css';
import {Routes,Route } from "react-router-dom";
import About from './About.js';
import Questions from './questions.js'

import {  ChakraProvider,

  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Switch,
  InputGroup,
  InputRightElement,
  Icon,
  Button} from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

function App() {
  return (
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/new" element={<Questions />} />
      </Routes>
  );
}

export default App;