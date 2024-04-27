import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChakraProvider,
  Heading,
  Center,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Box,
  ListItem,
  UnorderedList,
  Container,
} from '@chakra-ui/react';

function Resources() {
  return (
    <ChakraProvider>
      <Center>
        <Heading size="3xl" color="blue.200" marginBottom="35px">
          Resources
        </Heading>
      </Center>
      <Container maxW="7xl">
        <Center>
          <Menu>
            <MenuButton as={Button} rightIcon={<>⌵</>}>
              Pick a Resource Type
            </MenuButton>
            <MenuList>
              <MenuItem>Death of a Spouse</MenuItem>
              <MenuItem>Death of a Child</MenuItem>
              <MenuItem>Death of a Parent</MenuItem>
              <MenuItem>Death of a Sibling</MenuItem>
              <MenuItem>Death of a Friend</MenuItem>
            </MenuList>
          </Menu>
        </Center>
        <br />
        <br />
        <Center>
          <Box
            h="350px"
            bg="blue.200"
            padding="25px"
            borderRadius="15px"
            overflow="scroll"
          >
            <UnorderedList>
              <ListItem>
                <Link to="/resource">Lorem ipsum dolor sit amet</Link>
              </ListItem>
              <br />
              <ListItem>Consectetur adipiscing elit</ListItem>
              <br />
              <ListItem>Integer mo lorem at massa</ListItem>
              <br />
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              <br />
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <br />
              <ListItem>Consectetur adipiscing elit</ListItem>
              <br />
              <ListItem>Integer mo lorem at massa</ListItem>
              <br />
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Box>
        </Center>
      </Container>
    </ChakraProvider>
  );
}

export default Resources;