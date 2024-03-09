import React, { useState } from 'react';
import {
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
  border,
  Button,
  Avatar,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Request = () => {
  const [email, setemail] = useState('');
  const [course, setcourse] = useState('');
  const [name, setname] = useState('');

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'12'}>
        <Heading color="blue" children="Skillify" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              requiredid={'name'}
              value={name}
              placeholder="Enter your name"
              type="text"
              focusBorderColor="yellow.500"
              onChange={e => setname(e.target.value)}
            />
          </Box>

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
            <FormLabel htmlFor="message" children="Course" />
            <Input
              requiredid={'course'}
              value={course}
              placeholder="Explain the course..."
              type="text"
              focusBorderColor="yellow.500"
              height={'10vh'}
              onChange={e => setcourse(e.target.value)}
            />
          </Box>

          <Button type="sumbit" colorScheme={'yellow'}>
            Send mail
          </Button>

          <Box my={'4'}>
            See available Courses!{' '}
            <Link to="/request">
              <Button type="sumbit" colorScheme={'yellow'} variant={'link'}>
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Request;
