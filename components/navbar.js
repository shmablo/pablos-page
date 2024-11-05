import NextLink from 'next/link';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    HStack,
    Text,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
//Not an actual Hamburger...
// import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from './logo';
// import { Slant as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';

function LinkWithAnimation({ href, color, children }) {
    const [isHovered, setIsHovered] = useState(false)
  
    const handleMouseEnter = () => {
      setIsHovered(true)
    }
  
    const handleMouseLeave = () => {
      setIsHovered(false)
    }
  
    const linkStyle = {
      color,
      textDecoration: 'none',
      position: 'relative'
    }
  
    const underlineStyle = {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: isHovered ? '100%' : '0%',
      height: '2px',
      background: '#2584b8',
      transition: 'width 0.3s ease-in-out'
    }
  
    return (
      <NextLink href={href} passHref>
        <Box
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
          <span style={underlineStyle} />
        </Box>
      </NextLink>
    )
}

const Navbar = props => {
    return (
        //All the horizontal buttons on the navbar
        <Box 
            position="fixed"
            as="nav"
            w="100%"
            zIndex={2}
            css={{ backdropFilter: 'blur(10px)' }}
            {...props}
        >
            <Container display='flex' p={2} wrap="wrap">
            <Logo />
                <Stack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
                justifyContent="flex-end"
                paddingLeft="120pt"
                >
                    <LinkWithAnimation href="/projects" color="black">
                        Projects
                    </LinkWithAnimation>

                    <LinkWithAnimation href="/blog" color="black">
                        Blog
                    </LinkWithAnimation>

                    <LinkWithAnimation
                        href="https://drive.google.com/file/d/1G5UZW5CRzUkG03fkYUVnMNceDX4O8GFy/view?usp=sharing"
                        color="black"
                    >
                    Resume
                    </LinkWithAnimation>
                </Stack>
            </Container>
        </Box>
    )
}

export default Navbar;