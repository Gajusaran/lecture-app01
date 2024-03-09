import {
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
  border,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'12'}>
        <Heading color="blue" children="Welcome to Skillify" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              requiredid={'email'}
              value={email}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
              onChange={e => setemail(e.target.value)}
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              requiredid={'password'}
              value={password}
              placeholder="Enter your password"
              type="password"
              focusBorderColor="yellow.500"
              onChange={e => setpassword(e.target.value)}
            />
          </Box>

          <Box margin={4}>
            <Link to="/forgotpassword">
              <Button fontSize={'sm'} variant={'link'}>
                Forgot Password
              </Button>
            </Link>
          </Box>

          <Button type="sumbit" colorScheme={'yellow'}>
            Login
          </Button>

          <Box my={'4'}>
            New User?{' '}
            <Link to="/register">
              <Button type="sumbit" colorScheme={'yellow'} variant={'link'}>
                Sign Up
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
