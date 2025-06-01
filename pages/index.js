import {
  Container,
  Box,
  Heading,
  Image,
  SimpleGrid
} from "@chakra-ui/react"
import React from "react"
import dynamic from "next/dynamic"

import Layout from "../components/layouts/article"
import Paragraph from "../components/paragraph"
import Section from "../components/section"

const DynamicTypeWriter = dynamic(() => import("../components/typewriter"), {
  ssr: false,
})

const DynamicExperienceBar = dynamic(() => import('../components/experiencebar'), {
  ssr: false
})

const Page = () => {
  return (
    <Layout>
      <Container bg="white" paddingTop="15px">
        <DynamicTypeWriter />
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
                Upcoming Computer Science Graduate from Florida International University
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
              borderColor="#2584b8"
              borderWidth={2}
              borderStyle="solid"
              borderRadius="full"
              maxWidth="119px"
              display="inline-block"
              alt={'Pablo Ramos'}
            />
          </Box>
        </Box>

        {/* About me Section */}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" color={"black"}>
            About Me
          </Heading>
          <Paragraph>
          Hi, I'm Pablo. I'm an upcoming Computer Science graduate from Florida International University, 
          currently interning at The Walt Disney Company. I'm passionate about software development and 
          always eager to learn, build, and grow. Outside of coding, I enjoy playing games like 
          Counter-Strike and Minecraft, playing soccer, going on walks with my dog, and collecting trading cards.
          </Paragraph>
        </Section>

        {/* Experience Section... i need a job! */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" color={"black"}>
            Experience
          </Heading>
          <DynamicExperienceBar />
        </Section>
      </Container>
    </Layout>
  )
}

export default Page