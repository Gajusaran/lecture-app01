import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  Image,
  Link,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import '.././Home/Home.css';

const addToPlaylistHandler = () => {
  console.log('added');
};

const Course = ({
  views,
  title,
  imagesrc,
  id,
  addToPlaylistHandler,
  creator,
  descripation,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image
        src={imagesrc}
        width={'250px'}
        height={'80'}
        objectFit={'contain'}
      />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={descripation} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'creator'}
        />
        <Text
          fontWeight={'body'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lecture - ${lectureCount}`}
      />
      <Heading textAlign={'center'} size="xs" children={`Views - ${views}`} />

      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          colorScheme="yellow"
          variant={'ghost'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [cat, setcat] = useState('');

  const catgoery = [
    'Web devlopment',
    'Java full stack',
    'Dsa',
    'Data science',
    'Android',
  ];

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Course" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course"
        type="text"
      ></Input>

      <HStack
        overflowX={'auto'}
        padding="8"
        css={{
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {catgoery.map((item, index) => (
          <Button key={index} minW={'60'} onClick={() => setcat(item)}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'sample'}
          views={'23'}
          imagesrc={
            'https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_1280.jpg'
          }
          id={'sample'}
          addToPlaylistHandler={addToPlaylistHandler}
          creator={'sample'}
          descripation={'sample'}
          lectureCount={'23'}
        ></Course>
      </Stack>
    </Container>
  );
};

export default Courses;
