import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useRef , useState, useEffect } from "react";
import { Text, Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";

export default function Brand() {
  const comoFuncionaRef = useRef(null);
  const barraDescricaoRef = useRef(null);
  const oQueoQueInclusoRef = useRef(null);
  const [MostrarBarraDescricaoFixa, setMostrarBarraDescricaoFixa] = useState(false);

  const [fundoAtual, setFundoAtual] = useState(null);
  const fundos = [
    {
      id: 1,
      vencedor: true,
      url: "https://images.ctfassets.net/n5k68ty3nctt/4q8QgGmJ0tNMqJVK7nO4Cd/fa288a5e3fee8724371f4267015ff263/brand-identity-pack.avif?fm=avif&q=80"
    },
    {
      id: 2,
      vencedor: false,
      url: "https://images.ctfassets.net/n5k68ty3nctt/7dzp2l7SwmUOoV4OmcgHAn/5c842fa7aa4296e43becd926f3660659/logo-and-brand-identity-kit.avif?fm=avif&q=80"
    }
  ];

  useEffect(() => {
    setFundoAtual(fundos[0]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const barraDescricaoPosition = barraDescricaoRef.current.getBoundingClientRect().top;
      const isIncludedBoxPosition = barraDescricaoPosition <= 0;
      setMostrarBarraDescricaoFixa(isIncludedBoxPosition);
    };
  
    handleScroll(); // Chamar handleScroll() uma vez para verificar a posição inicial
    // Ouvinte de evento crado para monitorar a rolagem, e executar a função
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Flex paddingTop={{ base: "38px", md: "48px"}} justifyContent="center">
      <Box width="100%" maxWidth="1268px" padding={{ base: "0px 16px", md: "0px 32px", lg: "0px" }} margin={{ base: "0px", lg: "0px 32px" }}>
        <Flex gap="64px" justifyContent="space-between">
          <Box width="100%" maxWidth="716px">
            <Flex flexDirection="column">
              <Box position="relative" maxWidth="700px" maxHeight="525px">
                {fundoAtual && fundoAtual.vencedor && (
                  <Box position="absolute" top="16px" right="12px">
                    <Box display="inline-block" color="rgb(255, 255, 255)" lineHeight="1" padding="12px" whiteSpace="nowrap" fontSize="12px" backgroundColor="rgb(254, 95, 80)">Vencedor</Box>
                  </Box>
                )}
                <Image draggable="false" src={fundoAtual ? fundoAtual.url : ""} alt="Fundo" />
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
            <Box>
              {/* Barra de descrição, fixa */}
              <Flex gap="32px" fontSize="20px" fontWeight="700" position="fixed" top="0" left="0" width="100%" height="80px" align="center" backgroundColor="white" borderBottom="2px solid #ddd" zIndex="1000" padding={{md: "0px 30px", lg: "0px 130px" }} display={MostrarBarraDescricaoFixa ? { base: "none", md: "flex"} : "none"}>
                <Box ref={oQueoQueInclusoRef} minWidth="fit-content" borderBottom="2px solid white" _hover={{borderBottom: "2px solid black"}} cursor="pointer" onClick={() => scrollToRef(oQueoQueInclusoRef)}>
                  <Text>O que está incluso</Text>
                </Box>
                <Box ref={comoFuncionaRef} display={{ base: "none", sm: "block"}} minWidth="fit-content" borderBottom="2px solid white" _hover={{borderBottom: "2px solid black"}} cursor="pointer" onClick={() => scrollToRef(comoFuncionaRef)}>
                  <Text>Como funciona?</Text>
                </Box>
                <Box minWidth="fit-content" borderBottom="2px solid white" _hover={{borderBottom: "2px solid black"}} cursor="pointer">
                  <Text>Preços</Text>
                </Box>
                <Box minWidth="fit-content" borderBottom="2px solid white" _hover={{borderBottom: "2px solid black"}} cursor="pointer">
                  <Text>Perguntas Frequentes</Text>
                </Box>
              </Flex>

              {/* Barra de descrição, normal */}
              <Flex ref={barraDescricaoRef} overflowX="scroll" borderBottom="2px solid #ddd" marginTop="60px" gap="32px" fontSize="20px" fontWeight="700"
              sx={{
                "&::-webkit-scrollbar": {
                  height: "3px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "gray.400",
                  borderRadius: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "transparen",
                },
              }}
              >
                <Box ref={oQueoQueInclusoRef} minWidth="fit-content" borderBottom="2px solid white" _hover={{borderBottom: "2px solid black"}} cursor="pointer" onClick={() => scrollToRef(oQueoQueInclusoRef)}>
                  <Text>O que está incluso</Text>
                </Box>
                <Box ref={comoFuncionaRef} display={{ base: "none", sm: "block"}} minWidth="fit-content" borderBottom="2px solid white" _hover={{borderBottom: "2px solid black"}} cursor="pointer" onClick={() => scrollToRef(comoFuncionaRef)}>
                  <Text>Como funciona?</Text>
                </Box>
                <Box minWidth="fit-content" borderBottom="2px solid white" _hover={{borderBottom: "2px solid black"}} cursor="pointer">
                  <Text>Preços</Text>
                </Box>
                <Box minWidth="fit-content" borderBottom="2px solid white" _hover={{borderBottom: "2px solid black"}} cursor="pointer">
                  <Text>Perguntas Frequentes</Text>
                </Box>
              </Flex>
            </Box>
            
            <Box>
              <Box padding="50px 0px" color="rgb(49, 48, 48)" borderBottom="2px solid #ddd">
                <Text fontSize="24px" fontWeight="700">Uma marca tão única quanto seu negócio</Text>
                <Text fontSize="20px" fontWeight="400" marginTop="12px">Convide nossos designers profissionais para dar vida à sua marca através do design de um logotipo personalizado, cartão de visita, papel timbrado, envelope e capa para Facebook.</Text>
              </Box>
              <Box ref={oQueoQueInclusoRef} padding="50px 0px" color="rgb(49, 48, 48)" borderBottom="2px solid #ddd">
                <Text fontSize="24px" fontWeight="700" marginBottom="24px">O que está incluso</Text>
                <Flex gap="2" fontSize="18px" fontWeight="400" wordBreak="break-word"  flexDirection="column">
                  <Flex>
                    <Box>
                      <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                    </Box>
                    <Text marginLeft="16px">1 design de logotipo finalizado e totalmente personalizado</Text>
                  </Flex>
                  <Flex>
                    <Box>
                      <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                    </Box>
                    <Text marginLeft="16px">1 design de cartão de visita</Text>
                  </Flex>
                  <Flex>
                    <Box>
                      <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                    </Box>
                    <Text marginLeft="16px">1 papel timbrado</Text>
                  </Flex>
                  <Flex>
                    <Box>
                      <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                    </Box>
                    <Text marginLeft="16px">1 envelope</Text>
                  </Flex>
                  <Flex>
                    <Box>
                      <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                    </Box>
                    <Text marginLeft="16px">1 capa para Facebook</Text>
                  </Flex>
                  <Flex>
                    <Box>
                      <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                    </Box>
                    <Text marginLeft="16px">Propriedade total dos direitos autorais</Text>
                  </Flex>
                  <Flex>
                    <Box>
                      <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                    </Box>
                    <Text marginLeft="16px">Arquivos digitais para web e impressão (RGB, CMYK, PNG, JPG, PDF)</Text>
                  </Flex>
                  <Flex>
                    <Box>
                      <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                    </Box>
                    <Text marginLeft="16px">O arquivo original, editável (ex. AI)</Text>
                  </Flex>
                  <Flex>
                    <Box>
                      <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                    </Box>
                    <Text marginLeft="16px">100% garantia de satisfação ou o seu dinheiro de volta</Text>
                  </Flex>
                </Flex>
              </Box>
              <Flex flexDirection="column" padding="64px 0px" borderBottom="2px solid #ddd">
                <Text fontSize="24px" fontWeight="700" marginBottom="16px">Método de colaboração</Text>
                <Flex flexDirection="column" padding="24px" borderRadius="8px" backgroundColor="rgb(250, 249, 247)" backgroundRepeat="no-repeat" backgroundPosition="right bottom" backgroundSize="136px 136px" backgroundImage="url(https://99designs-start-static.imgix.net/product-details/collaboration-methods/COLLABORATION_METHOD_CONTEST_BUNDLE.png)">
                  <Text fontSize="20px" fontWeight="700" marginBottom="24px">Pacote do Concurso</Text>
                  <Text fontWeight="400" marginBottom="24px">Disponibilize seu briefing do design para toda nossa comunidade. Os designers enviam suas ideias e você escolhe seu design favorito.</Text>
                  <Flex gap="2" maxWidth="70%" marginBottom="8px" fontWeight="400" wordBreak="break-word" flexDirection="column">
                    <Flex>
                      <Box>
                        <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                      </Box>
                      <Text textAlign="left" marginLeft="16px">Conceitos criativos de vários designers</Text>
                    </Flex>
                    <Flex>
                      <Box>
                        <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                      </Box>
                      <Text textAlign="left" marginLeft="16px">Escolha um design vencedor e receba os direitos autorais e os arquivos finais</Text>
                    </Flex>
                    <Flex>
                      <Box>
                        <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                      </Box>
                      <Text textAlign="left" marginLeft="16px">Trabalhe com o designer vencedor para finalizar os itens do seu pacote</Text>
                    </Flex>
                  </Flex>
                  <Box cursor="pointer">
                    <Flex width="fit-content" align="center" fontWeight="400" color="rgb(49, 48, 48)" borderBottom="2px solid #ddd" _hover={{borderBottom: "2px solid #333"}}>
                      <Text>Saiba mais</Text>
                      <Icon width="20px" height="20px" icon="heroicons:chevron-right-16-solid" />
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
              <Flex ref={comoFuncionaRef} display={{ base: "none", sm: "flex"}} flexDirection="column" padding="64px 0px" borderBottom="2px solid #ddd">
                <Text fontSize="24px" fontWeight="700" marginBottom="24px">Como funciona o concurso?</Text>
                <Flex gap="16px" flexWrap="wrap">
                  <Flex flex="1" flexDirection="column">
                    <Image width="100%" maxWidth="223px" draggable="false" src="https://99designs-start-static.imgix.net/product-details/how-it-works/contest-1.jpg" alt="Passo 01" />
                    <Text fontSize="18px" fontWeight="600">01.</Text>
                    <Text fontWeight="700">Escreva um briefing do design</Text>
                  </Flex>
                  <Flex flex="1" flexDirection="column">
                    <Image width="100%" maxWidth="223px" draggable="false" src="https://99designs-start-static.imgix.net/product-details/how-it-works/contest-2.jpg" alt="Passo 02" />
                    <Text fontSize="18px" fontWeight="600">02.</Text>
                    <Text fontWeight="700">Os designers enviam propostas</Text>
                  </Flex>
                  <Flex flex="1" flexDirection="column">
                    <Image width="100%" maxWidth="223px" draggable="false" src="https://99designs-start-static.imgix.net/product-details/how-it-works/contest-2.jpg" alt="Passo 03" />
                    <Text fontSize="18px" fontWeight="600">03.</Text>
                    <Text fontWeight="700">Selecione um design vencedor</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Box>
          <Box position="relative" display={{ base: "none", lg: "block" }} flex="1" maxWidth="488px" minWidth="270px">
            <Flex maxWidth="inherit" position="fixed" borderRadius="8px" boxShadow="rgb(218, 217, 215) 0px 0px 0px 1px inset" flexDirection="column" padding="32px">
              <Box marginBottom="24px">
                <Text fontSize="32px" fontWeight="500">Logo & Identidade Visual</Text>
              </Box>
              <Box marginBottom="24px">
                <Text fontSize="20px" fontWeight="500">A partir de US$ 599</Text>
              </Box>
              <Flex gap="2" marginBottom="24px" fontWeight="400" wordBreak="break-word" flexDirection="column">
                <Flex>
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text textAlign="left" marginLeft="16px">1 design de logotipo finalizado e totalmente personalizado</Text>
                </Flex>
                <Flex>
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text textAlign="left" marginLeft="16px">1 design de cartão de visita</Text>
                </Flex>
                <Flex>
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text textAlign="left" marginLeft="16px">1 papel timbrado</Text>
                </Flex>
                <Flex>
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text textAlign="left" marginLeft="16px">1 envelope</Text>
                </Flex>
                <Flex>
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text textAlign="left" marginLeft="16px">1 capa para Facebook</Text>
                </Flex>
                <Flex>
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text textAlign="left" marginLeft="16px">Propriedade total dos direitos autorais</Text>
                </Flex>
                <Flex>
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text textAlign="left" marginLeft="16px">Arquivos digitais para web e impressão (RGB, CMYK, PNG, JPG, PDF)</Text>
                </Flex>
                <Flex>
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text textAlign="left" marginLeft="16px">O arquivo original, editável (ex. AI)</Text>
                </Flex>
                <Flex>
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text textAlign="left" marginLeft="16px">100% garantia de satisfação ou o seu dinheiro de volta</Text>
                </Flex>
              </Flex>
              <Flex cursor="pointer" textAlign="center" padding="9px 24px" borderRadius="50px" justifyContent="center" backgroundColor="black">
                <Flex color="white" fontWeight="700">
                    <Text>Selecione um pacote</Text>
                    <Box marginLeft="12px">
                      <Icon width="25px" height="25px" icon="heroicons:arrow-small-down-20-solid" />
                    </Box>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
