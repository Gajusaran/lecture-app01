import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  return (
    <Container h={'88vh'} p={'16'}>
      <Heading children="Welcome" textAlign={'center'} />

      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
        m={'6'}
      >
        <Box bg="yellow.400" p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text
            color={'black'}
            children="Pro pack - ₹299.00"
            textAlign={'center'}
          />
        </Box>
        <Box p="4">
          <VStack textAlign={'center'} spacing={'8'} px="8" mt={'4'}>
            <Text children="Join pro pack and get access to all content" />
            <Heading size="md" children="₹299 Only" />
            <Button my={'4'} colorScheme={'yellow'} w="full">
              Buy Now
            </Button>
          </VStack>
        </Box>

        <Box bg="grey" p={'4'} css={{ borderRadius: '0px 0px 8px 8px' }}>
          <Text color={'white'} children="100% REFUND AT CANCELLATION" />
          <Text
            fontSize={'xs'}
            color="white"
            children="*Terms & Conditions Apply"
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
