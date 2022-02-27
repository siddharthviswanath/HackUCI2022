import logo from './logo.svg';
import './App.css';
import {Link } from "react-router-dom";

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
function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          What should I major in?
        </p>

        <p>
        <ChakraProvider resetCSS>
        <Link to="/new">
          <Button
            variant="solid"
            size="lg"
            rightIcon={<ArrowForwardIcon />}
            colorScheme="messenger"
            backgroundColor="messenger.600"
          >
            Get Started
          </Button>
          </Link>
        </ChakraProvider>
        </p>


      </header>
    </div>
  );
}
export default About;