import {
    Container,
    Heading,
    SimpleGrid,
    Center
} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbDeadplant from "../public/images/deadplant.jpg";

import Layout from "../components/layouts/article";

const Projects = () => {
    return (
        <Layout title="Projects">
            <Container bg="white">
                <Section>
                    <Center>
                        <Heading
                            as="h3"
                            fontSize={35}
                            mb={4}
                            align="center"
                            textDecoration={'underline'}
                            textUnderlineOffset={'10px'}
                            textDecorationColor={'#2584b8'}
                            color={'black'}
                        >
                            Projects
                        </Heading>
                    </Center>

                    <Center>Here are some of my porjects.</Center>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6} paddingTop={'10px'}>
                    <Section delay={0.5}>
                        <WorkGridItem
                            href="https://www.deadplant.lol/"
                            title="Deadplant."
                            thumbnail={thumbDeadplant}
                        >
                            A web application that allows users to create an account, strategize, create tier lists, and upload their strategies.
                            Achieved top 3 First-time hacker @ Shellhacks 2024.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Projects;