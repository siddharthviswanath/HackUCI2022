
import logo from './UCI_logo.svg';
import './About.css';
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
  Text,
  Button} from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
function About() {
  return (
    <div className="App"
    
   >
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" width="300" height="400" color="white" />
        <p>
        <Text fontWeight="bold" fontSize="2xl" color="#ffffff">
          What should I major in?
        </Text>
        </p>

        <p>
        <Text fontWeight="bold" fontSize="xl" color="#ffffff">
        Finding a major can be tough - 
        </Text>
        </p>

        <p>
        <Text fontWeight="bold" fontSize="xl" color="#ffffff">
        Take this short and simple quiz to help you find your ideal field of study  
        </Text>
        </p>

        <p>
        <ChakraProvider resetCSS>
        <Link to="/new">
          <Button
            variant="solid"
            size="lg"
            rightIcon={<ArrowForwardIcon />}
            colorScheme="messenger"
            backgroundColor="blue"
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