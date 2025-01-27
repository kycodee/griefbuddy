import { Link } from 'react-router-dom';
import axios, {AxiosResponse} from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Heading, 
    Center,
    Menu,
    MenuButton,
    MenuList,
    Button,
    MenuItem,
    Box,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Container, ChakraProvider } from '@chakra-ui/react';

function Resources() {
  
  const [griefObj, setGriefObj] = useState('')
  const [griefObjTypes, setGriefObjTypes] = useState([])
  const [clickedGriefType, setClickedGriefType] = useState('')
  const [dropdownLabel, setDropdownLabel] = useState('Pick a Grief Type')
  const [griefStrSplit, setGriefStrSplit] = useState([])
  //string that is split and matches type clicked
  const [griefStrSplitH3, setGriefStrSplitH3] = useState('')
  const [typeUpdateStatus, setUpdateStatus] = useState('false')
  function getTypesOfGrief() {
    axios.get('/resources/addResource')
    .then((results: AxiosResponse) => {
      setGriefObj(results.data.allResources)
      setGriefStrSplit(results.data.allResources[0].split('<h3>'))
      setGriefObjTypes(results.data.titles)
    })
  }


  function onGriefTypeClick(type: any) {
    setClickedGriefType(type)
  }


  
  function parseObj() {
    if(clickedGriefType === ''){
      return (
        <div dangerouslySetInnerHTML={{__html: griefObj}}></div>
      )
    }
  }

  function clickedTypeH3Return(type: any) {
    for(let i = 0; i < griefStrSplit.length; i++){
      if(griefStrSplit[i].includes(type)){
        setGriefStrSplitH3(griefStrSplit[i])
      }
    }
  }

  function parseAndReturnH3() {
    let concated = '<h3>'
    return (
      <div dangerouslySetInnerHTML={{__html: concated.concat(griefStrSplitH3)}}></div>
    )
  }

  useEffect(() => {
    getTypesOfGrief()
  }, [])
  
  useEffect(() => {
    setUpdateStatus('false')
  }, [clickedGriefType])

  return (
    <ChakraProvider>
      <Center>
            <Heading size='3xl' color={"blue.200"} marginBottom={"35px"}>Resources</Heading>
      </Center>
      <Container maxW="7xl"  >
      <Center>  
      <Menu>
        <MenuButton as={Button} rightIcon={<>⌵</>}>
        {dropdownLabel}
        </MenuButton>
        <MenuList>
            {
              griefObjTypes.map((griefType, i) => (
                <MenuItem key={i} onClick={(e: any) => {
              onGriefTypeClick(e.target.innerText)
              clickedTypeH3Return(e.target.innerText)
              setDropdownLabel(e.target.innerText)
              setUpdateStatus('true')
            }}>{griefType}</MenuItem>
              ))
            }
        </MenuList>
    </Menu>
    </Center>
    <br />
    <br />
    <Center>
        <Box h={"350px"} bg={"blue.200"} padding={"25px"} borderRadius={"15px"} overflow={"scroll"}>
        <UnorderedList  >
            {parseObj()}
            {parseAndReturnH3()}
        </UnorderedList>
        </Box>
    </Center>
    </Container>
    </ChakraProvider>
  );
}

export default Resources;
