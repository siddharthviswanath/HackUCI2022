import logo from './logo.svg';
import './App.css';
import {Link } from "react-router-dom";
import Chips, { Chip } from 'react-chips'


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
import {useState, useEffect} from 'react'
import InputColor from 'react-input-color';

function Questions() {
    const [item, setItem] = useState([])
    const [input, setInput] = useState('');

    useEffect(() => {
        console.log(item);
    }, [item]);

    function testItem() {
        // item.push("This")
        setItem([...item, input])

    }
    function Delete(test){
        setItem(test)
    }
    
    return (
      <div className="Questions">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Please insert keywords.
          </p>
  
          <p>
          <ChakraProvider resetCSS>
            
              <input value={input} onInput={e => setInput(e.target.value)} style={{color: 'black'}}/>
              
            <Button
              variant="solid"
              size="md"
              onClick={testItem}
              rightIcon={<ArrowForwardIcon />}
              colorScheme="messenger"
              backgroundColor="messenger.600"
            >
                
              This is a test button.
            </Button>
            <Chips
          value={item}
          onChange={Delete}
          suggestions={["Your", "Data", "Here"]}
 
        />
          </ChakraProvider>
          </p>
  
  
        </header>
      </div>
    );
  }

  export default Questions;