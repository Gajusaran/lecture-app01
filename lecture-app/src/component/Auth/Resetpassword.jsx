import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

const Resetpasswprd = () => {
  const [password, setpassword] = useState('');
  const [conpassword, setconpassword] = useState('');

  const params = useParams();

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'12'}>
        <Heading color="blue" children="Skillify" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="New Password" />
            <Input
              value={password}
              placeholder=""
              type="password"
              focusBorderColor="yellow.500"
              onChange={e => setpassword(e.target.value)}
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Confirm Password" />
            <Input
              value={conpassword}
              placeholder=""
              type="password"
              focusBorderColor="yellow.500"
              onChange={e => setconpassword(e.target.value)}
            />
          </Box>

          <Box display={'flex'} justifyContent={'center'}>
            <Button type="sumbit" colorScheme={'yellow'} width={'100%'}>
              Change Password
            </Button>
          </Box>

          <Box my={'4'}>
            Don't have account?{' '}
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

export default Resetpasswprd;
