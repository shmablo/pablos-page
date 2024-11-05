import { Container,
        Box,
        Heading,
        Image,
        SimpleGrid
} from "@chakra-ui/react"

import Layout from "../components/layouts/article"


const Page = () => {
  return (
    <Layout>
      <Container bg="white" paddingTop="15px">
        <Box pt={5} display={{ md: "flex" }}>
          <Box flewGrow={1}>
            <Heading
              as="h2"
              variant="page-title"
              color={'black'}
              textDecoration={'underline'}
              textUnderlineOffset={'4px'}
              textDecorationColor={'#2584b8'}
              textDecorationThickness={'4px'}
            >
              Pablo Ramos
            </Heading>
            <Box color={"black"}>
              Junior at Florida International University studying
              Computer Science.
            </Box>
        </Box>
        <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
            paddingTop={'10px'}
          >
            <Image
              src={'images/Pablo_headshot.jpg'}
              borderColor="#5F967C"
              borderWidth={2}
              borderStyle="solid"
              borderRadius="full"
              maxWidth="119px"
              display="inline-block"
              alt={'Pablo Ramos'}
            />
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Page