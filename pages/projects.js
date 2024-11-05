import {
    Container,
    Heading,
    SimpleGrid,
    Center
} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

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
                </Section>
            </Container>
        </Layout>
    )
}

export default Projects;