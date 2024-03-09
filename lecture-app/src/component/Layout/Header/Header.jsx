import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher.js';
import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Input,
  VStack,
  color,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Linkbutton = ({ url = '/', title = 'Home',onClose}) => (
  <Link to={url} onClick={onClose}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isLoggedIn = false;
  const user = {
    role: 'admin',
  };

  const logouthandler = () =>{
    onClose();
  }

  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width="12"
        height="12"
        rounded="full"
        position={'fixed'}
        top="2"
        left="2"
      >
        <RiMenu5Fill />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay backdropFilter={'black(2px)'} />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth={'2px'} textAlign={'center'} fontSize='2em' color='blue'>
           Skillify
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={'6'} alignItems={'flex-start'}>
              <Linkbutton onClose={onClose} url="/" title="Home" />
              <Linkbutton onClose={onClose} url="/courses" title="Browse All Courses" />
              <Linkbutton onClose={onClose} url="/request" title="Request a Courses" />
              <Linkbutton onClose={onClose} url="/contact" title="Contact Us" />
              <Linkbutton onClose={onClose} url="/about" title="About" />
            </VStack>
          </DrawerBody>

          <DrawerFooter justifyContent={'center'}>
            {isLoggedIn ? (
              <>
                <VStack>
                  <HStack>
                    <Link to="/profile" onClick={onClose}>
                      <Button variant="ghost" colorScheme="teal">
                        Profile
                      </Button>
                    </Link>
                    <Button variant={'ghost'} onClick={logouthandler}>
                      <RiLogoutBoxLine />
                      Logout
                    </Button>
                  </HStack>

                  {user && user.role === 'admin' && (
                    <Link to="/admin/dashboard" onClick={onClose}>
                      <Button variant={'ghost'} mr={3} colorScheme="purple">
                        <RiDashboardFill />
                        Dashboard
                      </Button>
                    </Link>
                  )}
                </VStack>
              </>
            ) : (
              <>
                <Link to="/login" onClick={onClose}>
                  <Button variant={'ghost'} mr={3} colorScheme="teal">
                    Login
                  </Button>
                </Link>
                <Link to="/sign_up" onClick={onClose}>
                  <Button variant={'ghost'} mr={3} colorScheme="teal">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
