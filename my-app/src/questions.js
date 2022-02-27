import logo from './UCI_logo.svg';
import './App.css';
import {Link } from "react-router-dom";
import Chips, { Chip } from 'react-chips'
import data from './data/results_formatted.json'


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


function Questions() {
  
    const [item, setItem] = useState([])
    const [input, setInput] = useState('');
    const [display,setdisplay] = useState('');

    let freqmap = {}
    let nums = []
    useEffect(() => {
        // console.log(item);
        // console.log(data["aerospaceengineering_bs"])
        item.forEach((word) => {
            if (word in freqmap) {
                freqmap[word] += 1
            } else {
                freqmap[word] = 1
            }
        })
        let majors = Object.keys(data)
        majors.forEach((major) => {
            let keywords = data[major]
            const filteredArray = keywords.filter(value => item.includes(value));
            
            nums.push(filteredArray.length)
        })
        let maximum = Math.max(...nums)
        let index = nums.indexOf(maximum)
        let major = majors[index]
        setdisplay(major)
        //document.write(major)
    

    }, [item]);

    function testItem() {
        // item.push("This")
        // let freqmap = {}
        setItem([...item, input])
        
        

    }
    function Delete(test){
        setItem(test)
    }
    
    return (
      <div className="Questions">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="300" height="400"  />
          <p>
          Type in skills, passions, careers -
          </p>
          <p>
          any words that come to mind!
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
                
              Enter
            </Button>
            <Chips
          value={item}
          onChange={Delete}
          suggestions={["Your", "Data", "Here"]}
 
        />
          </ChakraProvider>
          <center>{display}</center>
          </p>
  
  
        </header>
      </div>
    );
  }

  export default Questions;