import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Text, Box, Flex, Grid, GridItem, Image, useBreakpointValue , Link as ChakraLink } from "@chakra-ui/react";

export default function Categorias() {
  const ondePrecisa = [
    {id: 1, selecionado: true, nome: "Logotipo e identidade",},
    {id: 2, selecionado: false, nome: "Design de site e aplicativo",},
    {id: 4, selecionado: false, nome: "Negócios e publicidade",},
    {id: 4, selecionado: false, nome: "Vestuário e item promocional",},
    {id: 5, selecionado: false, nome: "Arte e ilustração",},
    {id: 6, selecionado: false, nome: "Embalagem e rótulo",},
    {id: 7, selecionado: false, nome: "Livro e revista",},
  ]
  return (
    <Flex backgroundColor="rgba(241, 241, 241, 0.4)" justifyContent="center">
      <Box width="100%" maxWidth="970px" padding={{ base: "0px 16px", md: "0px 32px", lg: "0px" }} margin={{ base: "0px", lg: "0px 32px" }}>
        <Box color="#6e6d6c">
          <Flex gap="4px" textOverflow="ellipsis">
            <ChakraLink as={Link} to="/">Página inicial</ChakraLink>
            <Text fontWeight="700">/</Text>
            <Text textTransform="capitalize" fontWeight="700">{window.location.pathname.slice(1)}</Text>
          </Flex>
        </Box>
        <Flex flexDirection="column" marginTop="30px" overflow="hidden">
          <Box marginBottom="15px">
            <Text color="#313030" fontWeight="600" fontSize="24px" lineHeight="1.6">Para o quê você precisa de design?</Text>
          </Box>
          <Box width="100vw" height="126px" padding="0px 30px 50px 0px">
            <Flex padding="5px 0px" overflowX="scroll" gap="12px"
              sx={{
                "&::-webkit-scrollbar": {
                  height: "8px",
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
              <Box maxHeight="70px" backgroundColor="#dad9d7" borderRadius="5px" padding="22px 30px" minWidth="fit-content" borderBottom="2px solid white" _hover={{backgroundColor: "white", boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.541)"}} cursor="pointer">
                <Icon width="20px" icon="heroicons:magnifying-glass-16-solid" />
              </Box>
              {ondePrecisa.map(onde => (
                <Box key={onde.id} maxHeight="70px" backgroundColor={onde.selecionado ? "#01a1c1" : "#dad9d7"} borderRadius="5px" padding="22px 30px" minWidth="fit-content" borderBottom="2px solid white" _hover={{backgroundColor: onde.selecionado ? "#01a1c1" : "white", boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.541)"}} cursor="pointer">
                  <Text color={onde.selecionado ? "white" : "black"} fontSize="20px" fontWeight="500" lineHeight="1.3">{onde.nome}</Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
        <Grid templateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(4, 1fr)" }}
          templateRows={{
            base: "repeat(10, fit-content)",
            sm: "repeat(10, fit-content)",
          }}>
            
          <GridItem padding="60px 30px 30px 30px" cursor="pointer" borderBottom="1px solid #dad9d7" transition="all .3s" _hover={{scale: 1.1, boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.541)"}} colSpan={useBreakpointValue({ base: 4, lg: 2 })}>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Flex gap="5px" width="fit-content" padding="4px 10px" borderRadius="50px" color="white" backgroundColor="#01a1c1" justifyContent="center" alignItems="center">
                <Icon icon="heroicons:star-16-solid" />
                <Text>Mais popular</Text>
              </Flex>
              <Flex gap="7px">
                <Box width="72px" height="72px">
                  <Icon width="100%" height="100%" icon="heroicons:sun-solid" />
                </Box>
                <Flex gap="5px" flexDirection="column">
                  <Text fontSize="20px" fontWeight="500">Logotipo e identidade visual</Text>
                  <Flex gap="10px">
                    <Text fontSize="18px" fontWeight="400">a partir de US$ 599</Text>
                    <Box width="fit-content" padding="0px 7px" border="1px solid #01a1c1">Economize 39%+</Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box>
                <Text>Logotipo e principais itens digitais e impressos dos quais você precisa para começar sua marca com o pé direito</Text>
              </Box>
              <Flex gap="2" fontSize="18px" fontWeight="400" wordBreak="break-word" flexDirection="column">
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>logotipo</Text>
                </Flex>
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>Cartão de visita</Text>
                </Flex>
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>Papel Timbrado e Envelope</Text>
                </Flex>
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>Capa para Facebook</Text>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem padding="60px 30px 30px 30px" cursor="pointer" borderLeft={{base: "none", lg:"1px solid #dad9d7"}} borderBottom="1px solid #dad9d7" transition="all .3s" _hover={{scale: 1.1, boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.541)"}} colSpan={useBreakpointValue({ base: 4, md: 2, lg: 1 })}>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box width="72px" height="72px">
                <Icon width="100%" height="100%" icon="heroicons:moon-solid" />
              </Box>
              <Flex gap="5px" flexDirection="column">
                <Text fontSize="20px" fontWeight="500">Design de logotipos</Text>
                <Text>a partir de US$ 299</Text>
              </Flex>
            </Flex>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box>
                <Text>Um logotipo inesquecível personalizado para sua marca</Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem padding="60px 30px 30px 30px" cursor="pointer" borderLeft="1px solid #dad9d7" borderBottom="1px solid #dad9d7" transition="all .3s" _hover={{scale: 1.1, boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.541)"}} colSpan={useBreakpointValue({ base: 4, md: 2, lg: 1 })}>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box width="72px" height="72px">
                <Icon width="100%" height="100%" icon="heroicons:sun-solid" />
              </Box>
              <Flex gap="5px" flexDirection="column">
                <Text fontSize="20px" fontWeight="500">Cartão de visita</Text>
                <Text>a partir de US$ 169</Text>
              </Flex>
            </Flex>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box>
                <Text>Um cartão exclusivo criado para construir relacionamentos</Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem padding="60px 30px 30px 30px" cursor="pointer" borderBottom="1px solid #dad9d7" transition="all .3s" _hover={{scale: 1.1, boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.541)"}} colSpan={useBreakpointValue({ base: 4, lg: 2 })}>
            <Flex gap="7px">
              <Box width="72px" height="72px">
                <Icon width="100%" height="100%" icon="heroicons:moon-solid" />
              </Box>
              <Flex gap="7px">
                <Flex gap="5px" flexDirection="column">
                  <Text fontSize="20px" fontWeight="500">Logotipo e manual da marca</Text>
                  <Flex gap="10px">
                    <Text fontSize="18px" fontWeight="400">a partir de US$ 429</Text>
                    <Box width="fit-content" padding="0px 7px" border="1px solid #01a1c1">Economize US$ 70</Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box>
                <Text>Logotipo e principais itens digitais e impressos dos quais você precisa para começar sua marca com o pé direito</Text>
              </Box>
              <Flex gap="2" fontSize="18px" fontWeight="400" wordBreak="break-word" flexDirection="column">
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>logotipo</Text>
                </Flex>
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>Manual de identidade da marca</Text>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem padding="60px 30px 30px 30px" cursor="pointer" borderLeft="1px solid #dad9d7" borderBottom="1px solid #dad9d7" transition="all .3s" _hover={{scale: 1.1, boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.541)"}} colSpan={useBreakpointValue({ base: 4, lg: 2 })}>
            <Flex gap="7px">
              <Box width="72px" height="72px">
                <Icon width="100%" height="100%" icon="heroicons:sun-solid" />
              </Box>
              <Flex gap="7px">
                <Flex gap="5px" flexDirection="column">
                  <Text fontSize="20px" fontWeight="500">Logotipo e cartão de visita</Text>
                  <Flex gap="10px">
                    <Text fontSize="18px" fontWeight="400">a partir de US$ 449</Text>
                    <Box width="fit-content" padding="0px 7px" border="1px solid #01a1c1">Economize US$ 49</Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box>
                <Text>Um logotipo e cartão de visita que combinam perfeitamente</Text>
              </Box>
              <Flex gap="2" fontSize="18px" fontWeight="400" wordBreak="break-word" flexDirection="column">
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>logotipo</Text>
                </Flex>
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>Cartão de visita</Text>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem padding="60px 30px 30px 30px" cursor="pointer" borderBottom="1px solid #dad9d7" transition="all .3s" _hover={{scale: 1.1, boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.541)"}} colSpan={useBreakpointValue({ base: 4, lg: 2 })}>
            <Flex gap="7px">
              <Box width="72px" height="72px">
                <Icon width="100%" height="100%" icon="heroicons:moon-solid" />
              </Box>
              <Flex gap="7px">
                <Flex gap="5px" flexDirection="column">
                  <Text fontSize="20px" fontWeight="500">Logotipo e site</Text>
                  <Flex gap="10px" flexDirection="column">
                    <Text fontSize="18px" fontWeight="400">a partir de US$ 1.399</Text>
                    <Box width="fit-content" padding="0px 7px" border="1px solid #01a1c1">Economize até US$ 300</Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box>
                <Text>Um logotipo personalizado e um site Squarespace que combina com sua marca</Text>
              </Box>
              <Flex gap="2" fontSize="18px" fontWeight="400" wordBreak="break-word" flexDirection="column">
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>logotipo</Text>
                </Flex>
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>Site Squarespace totalmente funcional e personalizado</Text>
                </Flex>
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>Conteúdo enviado para você</Text>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem padding="60px 30px 30px 30px" borderBottom="1px solid #dad9d7" colSpan={useBreakpointValue({ base: 4, lg: 2 })} rowSpan={2} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage="url(https://99designs-start-static.imgix.net/categories-page/parent-categories/logo-01.png?auto=format&ch=Width%2CDPR&q=50&h=660)"></GridItem>

          <GridItem padding="60px 30px 30px 30px" cursor="pointer" borderBottom="1px solid #dad9d7" transition="all .3s" _hover={{scale: 1.1, boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.541)"}} colSpan={useBreakpointValue({ base: 4, lg: 2 })}>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box width="72px" height="72px">
                <Icon width="100%" height="100%" icon="heroicons:sun-solid" />
              </Box>
              <Flex gap="5px" flexDirection="column">
                <Text fontSize="20px" fontWeight="500">Logotipo e rede social</Text>
                <Flex gap="10px">
                  <Text fontSize="18px" fontWeight="400">a partir de US$ 399</Text>
                  <Box width="fit-content" padding="0px 7px" border="1px solid #01a1c1">Economize US$ 137</Box>
                </Flex>
              </Flex>
            </Flex>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box>
                <Text>Logotipo e capas das redes sociais para deixar sua impressão on-line</Text>
              </Box>
              <Flex gap="2" fontSize="18px" fontWeight="400" wordBreak="break-word" flexDirection="column">
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>logotipo</Text>
                </Flex>
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>Capa para Facebook</Text>
                </Flex>
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>Capa para Twitter</Text>
                </Flex>
                <Flex gap="16px">
                  <Box>
                    <Icon width="25px" height="25px" icon="heroicons:check-16-solid" />
                  </Box>
                  <Text>Fundo para YouTube</Text>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem padding="60px 30px 30px 30px" cursor="pointer" transition="all .3s" _hover={{scale: 1.1, boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.541)"}} colSpan={useBreakpointValue({ base: 4, lg: 1 })}>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box width="72px" height="72px">
                <Icon width="100%" height="100%" icon="heroicons:sun-solid" />
              </Box>
              <Flex gap="5px" flexDirection="column">
                <Text fontSize="20px" fontWeight="500">Manual de identidade da marca</Text>
                <Text>a partir de US$ 299</Text>
              </Flex>
            </Flex>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box>
                <Text>Papel timbrado e envelope para enviar a mensagem de sua marca</Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem padding="60px 30px 30px 30px" cursor="pointer" borderLeft={{base: "none", lg:"1px solid #dad9d7"}} transition="all .3s" _hover={{scale: 1.1, boxShadow: "0 3px 9px 0 rgba(0, 0, 0, 0.541)"}} colSpan={useBreakpointValue({ base: 4, lg: 1 })}>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box width="72px" height="72px">
                <Icon width="100%" height="100%" icon="heroicons:moon-solid" />
              </Box>
              <Flex gap="5px" flexDirection="column">
                <Text fontSize="20px" fontWeight="500">Papelaria</Text>
                <Text>a partir de US$ 199</Text>
              </Flex>
            </Flex>
            <Flex marginTop="5px" gap="7px" flexDirection="column">
              <Box>
                <Text>Papel timbrado e envelope para enviar a mensagem de sua marca</Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  )
}
