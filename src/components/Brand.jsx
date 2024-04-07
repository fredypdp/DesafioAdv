import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Text, Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";

export default function Brand() {
  const [fundoAtual, setFundoAtual] = useState(null);
  const fundos = [
    {
      id: 1,
      url: "https://images.ctfassets.net/n5k68ty3nctt/4q8QgGmJ0tNMqJVK7nO4Cd/fa288a5e3fee8724371f4267015ff263/brand-identity-pack.avif?fm=avif&q=80"
    },
    {
      id: 2,
      url: "https://images.ctfassets.net/n5k68ty3nctt/7dzp2l7SwmUOoV4OmcgHAn/5c842fa7aa4296e43becd926f3660659/logo-and-brand-identity-kit.avif?fm=avif&q=80"
    }
  ];

  useEffect(() => {
    setFundoAtual(fundos[0]);
  }, []);

  return (
    <Flex paddingTop="48px" justifyContent="center">
      <Box width="100%" maxWidth="1268px" padding={{ base: "0px 32px", lg: "0px" }} margin={{ base: "0px", lg: "0px 32px" }}>
        <Flex gap="64px" justifyContent="space-between">
          <Box width="100%" maxWidth="716px">
            <Flex flexDirection="column">
              <Box maxHeight="525px">
                <Image height="100%" maxHeight="100%" draggable="false" src={fundoAtual ? fundoAtual.url : ""} alt="Fundo" />
              </Box>
              <Flex marginTop="20px" justifyContent="space-between">
                <Flex>
                  {fundos.map((fundo, index) => (
                    <Box key={fundo.id} marginRight={index === 0 ? "16px" : "0"} width="15px" height="15px" cursor="pointer" borderRadius="100%" backgroundColor={fundoAtual && fundoAtual.id === fundo.id ? "#333" : "#ddd"}
                      onClick={() => setFundoAtual(fundo)}
                    ></Box>
                  ))}
                </Flex>
                <Box>
                  <Text color="rgb(91, 90, 88)">Concurso de design criado por
                  <ChakraLink as={Link} to="/" color="rgb(91, 90, 88)" fontWeight="500" textDecoration="underline 2px solid"> The Hype Lab</ChakraLink>
                  </Text>
                  <Text textAlign="end" color="rgb(91, 90, 88)">Design vencedor por <ChakraLink as={Link} to="/" color="rgb(91, 90, 88)" fontWeight="500" textDecoration="underline 2px solid">leonelbalza</ChakraLink></Text>
                </Box>
              </Flex>
            </Flex>
            <Flex fontSize="20px" fontWeight="700">
              <Box>
                <Text>O que está incluído</Text>
              </Box>
              <Box>
                <Text>Como funciona</Text>
              </Box>
              <Box>
                <Text>Preços</Text>
              </Box>
              <Box>
                <Text>Perguntas Frequentes</Text>
              </Box>
            </Flex>
          </Box>
          <Box display={{ base: "none", lg: "block" }} flex="1" minWidth="270px" height="100vh" backgroundColor="yellow"></Box>
        </Flex>
      </Box>
    </Flex>
  );
}