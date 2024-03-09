import React from 'react';

import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  VStack,
  Button,
  Center,
  HStack,AspectRatio
} from '@chakra-ui/react'; //stack provided by chakraui that provide some css like its display is flex
import './Home.css';
import { Link } from 'react-router-dom';
import home_img from '../../assets/img/home_img.webp';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import introvedio from "../../assets/vedio/intro.mp4"

function Home() {
  // cosnt Home = () =>{}
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack  marginLeft={35}  width={'full'} alignItems={['center','flex-start']}>
            <Heading fontSize={'30'}>
              Crack your goal with India’s top educators
            </Heading>
            <Text fontSize="2xl">
              Over 10 crore learners trust us for their preparation
            </Text>
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="home_img"
            src={home_img}
            boxSize={'md'}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding={'8'} backgroundColor={'DarkSeaGreen'}>
        <Heading
          textAlign={'Center'}
          fontFamily="body"
          color={'white'}
          children="OUR BRANDS"
        />

        <HStack className="icons" justifyContent={'space-evenly'}>
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
        </HStack>
      </Box>

      <div className="container2">
        <video 
        autoPlay 
        muted
        controls 
        controlsList='nodownload nofullscreen noremoteplayback'

        disablePictureInPicture
        disableRemotePlayback
        src={introvedio}>
        </video>
      </div>
    </section>
  );
}

export default Home;
