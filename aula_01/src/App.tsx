import Layout from "./Components/Layout";
import { ChakraProvider, Input, Box, Center, Button } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Box minHeight="100vh" backgroundColor="#9413dc" padding={8}>
            <Box bgColor="#f9f9f9" borderRadius="25px" padding={6}>
              <Center>
                <h1>Faça seu login</h1>
              </Center>
              <Input type="email" placeholder="E-mail" />
              <Input type="password" placeholder="Senha" />
              <Button colorScheme="teal" width="full" marginTop={2}>
                Entrar
              </Button>
            </Box>
          </Box>
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
