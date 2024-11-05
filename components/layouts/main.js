import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

import Navbar from '../navbar';

const Main = ({ children, router  }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Pablo Ramos' personal website" />
                <meta name="author" content="Pablo Ramos" />
                <link rel='icon' href='/stardewShip.jpg' />
                <title>Pablo Ramos - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>

    )
}

export default Main;