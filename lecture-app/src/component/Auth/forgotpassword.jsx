import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Forgotpassword = () => {
  const [email, setemail] = useState('');

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'12'}>
        <Heading color="blue" children="Skillify" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email" />
            <Input
              requiredid={'email'}
              value={email}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
              onChange={e => setemail(e.target.value)}
            />
          </Box>

          <Box display={'flex'} justifyContent={'center'}>
            <Button type="sumbit" colorScheme={'yellow'} width={'100%'}>
              Continue
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

export default Forgotpassword;
