import {useState} from 'react';
import {Icon} from '@iconify/react';
import Brand from "./components/Brand";
import Categorias from "./components/Categorias";
import {BrowserRouter as Router, Route, Routes, Navigate, Link, useLocation} from "react-router-dom";
import {Text, Box, Flex, Image, Link as ChakraLink} from "@chakra-ui/react";

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [barraLateral, setBarraLateral] = useState(false)
  const rota = useLocation().pathname

  return (
    <main>
      {/* Cabeçalho para Computador */}
      {rota !== "/categorias" ? (
        <Box display={{ base: "none", xl: "block" }}>
          <Box as="header" display="flex" justifyContent="center" padding="16px" margin="auto">
            <Flex width="100%" justifyContent="space-between" maxWidth="1268px" alignItems="center">
              <Flex alignItems="center" paddingRight="16px">
                <ChakraLink as={Link} to="/" maxWidth="120px" maxHeight="40px">
                  <Image src="https://assets.99static.com/logos/en/wordmark_grey.svg" alt="Logo" />
                </ChakraLink>
                <Flex gap="24px" color="black" marginLeft="32px" fontWeight="600">
                  <Text>
                    <ChakraLink as={Link} to="/categorias" _hover={{textDecoration: "none"}}>Categorias</ChakraLink>
                  </Text>
                  <Text>
                    <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}}>Como funciona</ChakraLink>
                  </Text>
                  <Text>
                    <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}}>Encontre um designer</ChakraLink>
                  </Text>
                  <Text>
                    <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}}>Inspiração</ChakraLink>
                  </Text>
                  <Text>
                    <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}}>Pro</ChakraLink>
                  </Text>
                </Flex>
              </Flex>
              <Flex color="black" fontWeight="600">
                <Flex alignItems="center">
                  <Icon width="25px" icon="heroicons:phone-16-solid" />
                  <Text marginLeft="24px">
                    <ChakraLink as={Link} to="/">+1 877 834 4534</ChakraLink>
                  </Text>
                </Flex>
                <Flex alignItems="center" marginLeft="24px">
                  <Text marginLeft="24px">
                    <ChakraLink as={Link} to="/">Fazer login</ChakraLink>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      ) : (
        <Box display={{ base: "none", xl: "block" }}>
          <Box as="header" display="flex" justifyContent="center" padding="16px" margin="auto">
            <Flex width="100%" justifyContent="space-between" maxWidth="970px" alignItems="center">
              <Flex alignItems="center" paddingRight="16px">
                <ChakraLink as={Link} to="/" maxWidth="120px" maxHeight="40px">
                  <Image src="https://assets.99static.com/logos/en/wordmark_grey.svg" alt="Logo" />
                </ChakraLink>
                <Flex gap="20px" color="black" marginLeft="32px" fontWeight="600">
                  <Text>
                    <ChakraLink as={Link} to="/categorias" _hover={{textDecoration: "none"}}>Categorias</ChakraLink>
                  </Text>
                  <Text>
                    <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}}>Como funciona</ChakraLink>
                  </Text>
                  <Text>
                    <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}}>Encontre um designer</ChakraLink>
                  </Text>
                  <Text>
                    <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}}>Inspiração</ChakraLink>
                  </Text>
                  <Text>
                    <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}}>Pro</ChakraLink>
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="20px" color="black" fontWeight="600">
                <Flex alignItems="center">
                  <Icon width="25px" icon="heroicons:phone-16-solid" />
                  <Text>
                    <ChakraLink as={Link} to="/">+1 877 834 4534</ChakraLink>
                  </Text>
                </Flex>
                <Flex alignItems="center">
                  <Text>
                    <ChakraLink as={Link} to="/">Fazer login</ChakraLink>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      )}
      
      {/* Cabeçalho para Celular */}
      <Box display={{ base: "block", xl: "none" }}>
        {/* Cabeçalho */}
        <Box as="header" padding={{ base: "16px 8px", md: "16px"}} margin="auto" display="flex" alignItems="center">
          <Flex width="100%" justifyContent="space-between" alignItems="center" padding={{ base: "0px 8px", md: "0px 16px"}}>
            <Box onClick={() => setBarraLateral(!barraLateral)}>
              <Icon width="25px" height="40px" icon="heroicons:bars-3-16-solid" />
            </Box>
            <Flex justifyContent="center">
              <ChakraLink as={Link} to="/" maxWidth="120px" maxHeight="40px">
                <Image draggable="false" src="https://assets.99static.com/logos/en/wordmark_grey.svg" alt="Logo" />
              </ChakraLink>
            </Flex>
            <Box>
              <Text textAlign="end" color="black" fontWeight="600" marginLeft="24px">
                <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}}>Fazer login</ChakraLink>
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Barra lateral */}
        <Box zIndex="200" position="absolute" top="0" left="0" display={barraLateral ? "flex" : "none"} width="100%">
          <Box backgroundColor="white" minWidth="320px" maxWidth="30vw" height="100vh" padding="12px 16px">
            <Box display="flex" flexDirection="column">
              <Flex alignItems="center" padding="12px 0px">
                <Icon width="25px" icon="heroicons:bars-3-16-solid" onClick={() => setBarraLateral(false)} />
                <Text marginLeft="24px">
                </Text>
              </Flex>
              <Flex alignItems="center" padding="12px 0px">
                <Icon width="25px" icon="heroicons:home-20-solid" />
                <Text marginLeft="24px">
                  <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}} onClick={() => setBarraLateral(false)}>Página inicial</ChakraLink>
                </Text>
              </Flex>
              <Flex alignItems="center" padding="12px 0px">
                <Icon width="25px" icon="heroicons:home-20-solid" />
                <Text marginLeft="24px">
                  <ChakraLink as={Link} to="/categorias" _hover={{textDecoration: "none"}} onClick={() => setBarraLateral(false)}>Categorias</ChakraLink>
                </Text>
              </Flex>
              <Flex alignItems="center" padding="12px 0px">
                <Icon width="25px" icon="heroicons:home-20-solid" />
                <Text marginLeft="24px">
                  <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}} onClick={() => setBarraLateral(false)}>Encontre um designer</ChakraLink>
                </Text>
              </Flex>
              <Flex alignItems="center" padding="12px 0px">
                <Icon width="25px" icon="heroicons:home-20-solid" />
                <Text marginLeft="24px">
                  <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}} onClick={() => setBarraLateral(false)}>Inspiração</ChakraLink>
                </Text>
              </Flex>
              <Flex alignItems="center" padding="12px 0px">
                <Icon width="25px" icon="heroicons:home-20-solid" />
                <Text marginLeft="24px">
                  <ChakraLink as={Link} to="/" _hover={{textDecoration: "none"}} onClick={() => setBarraLateral(false)}>Pro</ChakraLink>
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box onClick={() => setBarraLateral(false)} flex="1" height="100vh" backgroundColor="rgba(0, 0, 0, 0.5)"></Box>
        </Box>
      </Box>
      <Routes>
        <Route path="/" element={<Brand />} />
        <Route path="/categorias" exact element={<Categorias />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}
