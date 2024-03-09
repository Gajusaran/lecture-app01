import React from 'react';
import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Paymentfail = () => {
  return (
    <Container h={'88vh'} p={'16'}>
      <VStack
        alignItems={'center'}
        justifyContent={'center'}
        h="full"
        spacing={'4'}
      >
        <RiErrorWarningFill size={'5rem'} />
        <Heading textTransform={'uppercase'}>Payment Fail</Heading>
        <Link to="/subscribe">
          <Button variant={'ghost'}>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Paymentfail;
