import { Container, Heading, Flex, Spacer, Avatar, Box, Menu, MenuButton, MenuList, MenuItem, span } from "@chakra-ui/react";
import { ByMoralis, useMoralis } from "react-moralis";
import { Auth } from './Auth';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Home } from './Home';
import { Profile } from './Profile';

function App() {
  const { isAuthenticated, logout, user, isAuthUndefined } = useMoralis();

  return (
    <Container>
      <Flex my={3}>
        <Link to="/"><Heading>Home</Heading></Link>
        <Spacer />
        {isAuthenticated && <Menu>
          <MenuButton as={span} ><Avatar name={user.attributes.username} /></MenuButton>
          <MenuList>
            <MenuItem minH="32px"><Link to="/profile"><span>My profile</span></Link></MenuItem>
            <MenuItem minH="32px" onClick={() => logout()}>Logout</MenuItem>
          </MenuList>
        </Menu>}
      </Flex>
      <hr />

      <Heading my={3}>Welcome, {user ? user.attributes.username : ' authenticate please..'}</Heading>
      {isAuthenticated ? <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/profile" exact><Profile /></Route>
      </Switch> : <>
        {!isAuthUndefined && <Redirect to="/" />}
        <Auth />
      </>}
      <Box mt={6}><ByMoralis width={150} variant="colour" /></Box>
    </Container>
  );
}

export default App;
