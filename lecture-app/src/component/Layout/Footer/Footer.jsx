import React from 'react';
import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minW={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Right Reserved" color={'white'} />
          <Heading
            children="@skillfy"
            color={'yellow'}
            size={'sm'}
            fontFamily={'body'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize="50"
        >
          <a href="" target={'_blank'}>
            <TiSocialYoutubeCircular />
          </a>
          <a href="" target={'_blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="" target={'_blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
