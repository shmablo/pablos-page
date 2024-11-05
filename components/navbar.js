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
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from './logo';
import { Slant as Hamburger } from 'hamburger-react';
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
      background: '#5F967C',
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