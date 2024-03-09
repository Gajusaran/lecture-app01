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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const fileuploadcss = {
  cursor: 'pointer',
  border: 'none',
  height: '100%',
  width: '110%',
  marginLeft: '-5%',
  color: '#D2B9B4',
  backgroundColor: 'white',
};

// export const fileuploadcsshover = {
//   backgroundColor: '#81ecec',
//   border: '2px solid #00cec9',
// };

const fileuploadstyle = {
  '&::file-selector-button': fileuploadcss,
  //   '&::file-selector-button:hover': fileuploadcsshover,
};

const Register = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [imageprev, setimageprev] = useState('');
  const [image, setimage] = useState('');

  const changeimagehandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimageprev(reader.result);
      setimage(file);
    };
  };

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'12'}>
        <Heading color="blue" children="Join Skillify" />
        <form style={{ width: '100%' }}>
          <Box my={'4'} display={'flex'} justifyContent={'center'}>
            <Avatar src={imageprev} size={'2xl'} />
          </Box>

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
            <FormLabel htmlFor="password" children="Password" />
            <Input
              requiredid={'password'}
              value={password}
              placeholder="Enter your password"
              type="password"
              focusBorderColor="yellow.500"
              onChange={e => setpassword(e.target.value)}
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              accept="image/*"
              irequireid="chooseAvatar"
              type="file"
              focusBorderColor="yellow.500"
              onChange={changeimagehandler}
              css={fileuploadstyle}
            />
          </Box>

          <Button type="sumbit" colorScheme={'yellow'}>
            Sign Up
          </Button>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
