import {
    Container,
    Heading,
    SimpleGrid,
    Center
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Griditem, WorkGridItem } from "../components/grid-item";
import NextLink from "next/link";

const Blog = () => (
    <Layout title="Blog">
        <Container>
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
                    Blog
                </Heading>
            </Center>
            <Center>Blog post coming soon.</Center>
        </Container>
    </Layout>
);

export default Blog;