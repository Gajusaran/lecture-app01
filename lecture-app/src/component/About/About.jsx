import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  HStack,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introvedio from '../../assets/vedio/intro.mp4';
import '../../component/Home/Home.css';
import { RiSecurePaymentFill } from 'react-icons/ri';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar src="" boxSize={['40', '48']} />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Gajendra Saran" size={['md', 'xl']} />
      <Text children="Hi I am full-stack developer and a teacher. Our mission is to provide quality content at reasonablr price." />
    </VStack>
  </Stack>
);

const VedioPlayer = () => (
  <div>
    <video
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introvedio}
    ></video>
  </div>
);

const About = () => {
  const Tcd = () => (
    <Box>
      <Heading
        children="Trems & Condition"
        size={'md'}
        textAlign={['center', 'left']}
        my={'4'}
      />

      <Box h={'sm'} p={'4'}>
        <Text
          overflowY={'scroll'}
          textAlign={['center', 'left']}
          letterSpacing={'widest'}
          height={'100%'}
        >
          Acceptance of Terms: By accessing or using the Skillify website (the
          "Site"), you agree to comply with and be bound by these Terms and
          Conditions ("Terms"). If you do not agree to these Terms, you may not
          access or use the Site. Use of the Site: You must be at least 18 years
          old to use the Site. You agree to use the Site only for lawful
          purposes and in accordance with these Terms. You are solely
          responsible for any content you post on the Site, and you agree not to
          post any content that is unlawful, defamatory, obscene, or otherwise
          objectionable. Intellectual Property: All content on the Site,
          including otherwise use any content from the Site without the prior
          written consent of Skillify. User Accounts: In order to access certain
          features of the Site, you may need to create a user account. You agree
          to provide accurate and complete information when creating your user
          account and to keep your account credentials confidential. You are
          solely responsible for any activity that occurs under your user
          account. Privacy: Your privacy is
        </Text>
        <Heading
          children="Refund Only aapplicable with in 7 days"
          size={'sm'}
          textAlign={['center', 'left']}
          my={'4'}
        />
      </Box>
    </Box>
  );

  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']}></Heading>
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems={'center'}>
        <Text
          fontFamily={'cursive'}
          children="We are vedio streaming platfrom with some premium courses available only for premium users"
          m="8"
          textAlign={['center', 'left']}
        />
        <Link to="/subscribe">
          <Button varient={'ghost'} colorScheme="yellow">
            Checkout Our plan
          </Button>
        </Link>
      </Stack>
      <VedioPlayer />

      <Tcd />

      <HStack m={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          children="Payment is secured by razorpay"
          textTransform={'uppercase'}
          fontSize={'15px'}
        />
      </HStack>
    </Container>
  );
};

export default About;
