import { 
    Box,
    Container,
    Link,
    VStack,
    HStack
} from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

const AnimatedLogo = ({ logo }) => {
    return (
        <Box
            as={logo}
            transition="all 0.2s ease-in-out"
            _hover={{ transform: 'translateY(-2px)', color: '#2584b8' }}
            fontSize="32px"
            color="#2584b8"
        />
    )
}

const Footer = () => {
    return (
      <VStack>
        <Container bg="white">
          <HStack justifyContent={'center'}>
            <Box>
              <Link
                href="https://github.com/shmablo"
                target="_blank"
                _hover={{ textDecoration: 'none' }}
              >
                <AnimatedLogo logo={IoLogoGithub} />
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.linkedin.com/in/pabloramos06/"
                target="_blank"
                _hover={{ textDecoration: 'none' }}
              >
                <AnimatedLogo logo={IoLogoLinkedin} />
              </Link>
            </Box>
            <Box>
              <Link
                href="mailto:pramo041@fiu.edu"
                target="_blank"
                _hover={{ textDecoration: 'none' }}
              >
                <AnimatedLogo logo={IoMail} />
              </Link>
            </Box>
          </HStack>
          <Link
            href={'https://github.com/shmablo/pablos-page'}
            isExternal
          >
            <Box
              pt={2}
              align="center"
              opacity={0.3}
              fontSize={'sm'}
              color={'black'}
            >
              site last updated 11/5/2024
            </Box>
          </Link>
        </Container>
        <Box
          position="fixed"
          bg="#2584b8"
          bottom="0"
          left="0"
          width="100%"
          textColor="#2584b8"
          height="15px"
          fontSize="1px"
        >
        </Box>
      </VStack>
    )
}
  
export default Footer;