import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <Container h={'88vh'} p={'16'}>
      <VStack
        alignItems={'center'}
        justifyContent={'center'}
        h="full"
        spacing={'4'}
      >
        <RiErrorWarningFill size={'5rem'} />
        <Heading>Page Not found</Heading>
        <Link to="/">
          <Button variant={'ghost'}>Go to home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Notfound;
