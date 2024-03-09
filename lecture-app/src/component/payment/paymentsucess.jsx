import React from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Paymentsucess = () => {
  return (
    <Container h={'88vh'} p={'16'}>
      <Heading children="You have Pro Pack" textAlign={'center'} />

      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
        m={'6'}
      >
        <Box bg="yellow.400" p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'} children="Payment Success" textAlign={'left'} />
        </Box>
        <Box p="4">
          <VStack textAlign={'center'} spacing={'4'} px="8" mt={'4'}>
            <Text children="Congratulation you're a pro member. You Have access to premium account" />
            <Heading size={'3xl'}>
              <RiCheckboxCircleFill />
            </Heading>
            <Link to="/profile">
              <Button variant={'ghost'}>Go to profile</Button>
            </Link>
            <Heading size={'xs'}>Reference: sadcjdcjdcjocj</Heading>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Paymentsucess;
