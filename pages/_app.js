import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Layout from "../components/layouts/main";

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider value={defaultSystem}>
                <Layout router={router}>
                    <Component {...pageProps} key={router.route} />
                </Layout>
        </ChakraProvider>
    )
}

export default Website;