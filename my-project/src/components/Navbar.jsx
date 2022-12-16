

import { Flex, Spacer, Center,Box,ButtonGroup,Button ,  Menu,
    MenuButton,
    MenuList,
    MenuItem,Input,InputLeftElement,InputGroup,  Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,useDisclosure} from '@chakra-ui/react'
    import { FiSearch } from 'react-icons/fi';
    import { TbGridDots } from 'react-icons/tb';
    import { RiVipCrownFill } from 'react-icons/ri';
    import { GiHamburgerMenu } from 'react-icons/gi';

    import React from 'react';


 

export default function Navbar(){

  const { isOpen, onOpen, onClose } = useDisclosure()
return(
    <>
    
    <Flex w="100%"  h="70px" justifyContent="space-around" bg='black' color='white' >
    
    <Flex  w="30%" justifyContent="center" alignItems="center"  >
     <Center  w="20%" h="40px" > </Center>
     <Center   w="20%" h="40px" _hover={{borderBottom:"3px solid white"}} > Home</Center>
     <Center   w="20%" h="40px" _hover={{borderBottom:"3px solid white"}} > TV Shows </Center>
     <Center  w="20%" h="40px" _hover={{borderBottom:"3px solid white"}} >  Movies </Center>
     {/* <Center  w="20%" h="40px" fontSize='22px' mt='3px'  > {} */}
     <Menu isOpen={isOpen} >
            <MenuButton
                w="10%" h="40px" fontSize='22px' mt='10px'    
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                bg="black"
                color="white"
                
            >
              <TbGridDots />
            </MenuButton>
            <MenuList mt='-10px' ml='-80px'  onMouseEnter={onOpen}
                onMouseLeave={onClose} w="250px"  zIndex="2">
                <MenuItem h='50px' _hover={{bg:"rgb(31,8,50)"}} bg='rgb(23,6,38)' color='white' >News</MenuItem>
                <MenuItem h='50px' _hover={{bg:"rgb(31,8,50)"}} bg='rgb(23,6,38)' color='white'>Live Tv</MenuItem>
                <MenuItem h='50px' _hover={{bg:"rgb(31,8,50)"}} bg='rgb(23,6,38)' color='white' >Shows</MenuItem>
                <MenuItem h='50px' _hover={{bg:"rgb(31,8,50)"}} bg='rgb(23,6,38)' color='white'>Music</MenuItem>
                <MenuItem h='50px' _hover={{bg:"rgb(31,8,50)"}} bg='rgb(23,6,38)' color='white' >Premium</MenuItem>
                <MenuItem h='50px' _hover={{bg:"rgb(31,8,50)"}} bg='rgb(23,6,38)' color='white'>Sport</MenuItem>
                <MenuItem h='50px' _hover={{bg:"rgb(31,8,50)"}} bg='rgb(23,6,38)' color='white' >Kids</MenuItem>
            </MenuList>
        </Menu>



    </Flex>

        <Flex  w="26%" ml="150px" justifyContent="center" alignItems="center"  >

        <InputGroup >
      
        <InputLeftElement mt="12px" ml='15px' fontSize='22px' color='white' 
           
           children={<FiSearch />}
             />
      
          
           <Input h="40px" w="100%" bg='black' color='white' border='1px solid gray' borderRadius='5px'  />
  </InputGroup>
         
         
        
         
        
        </Flex>

        <Flex  w="26%" justifyContent="space-between" >
        <ButtonGroup gap='10px' ml='30px'>
         
          <Button bg='black' color='white' fontWeight='600' h='40px' p='0 15px 0 15px' borderRadius="4px" borderColor="white" border='1px solid white'  mt='15px'  >Log in</Button>
          <Button gap="10px" fontWeight='600' h='40px' p='0 15px 0 15px' borderRadius="4px" border='none' bg='rgb(130,48,198)' color='white' mt='15px' >  <RiVipCrownFill fontSize='20px'  /> Buy Plan</Button>

        </ButtonGroup>


        <Menu mr='50px' >
        <MenuButton as={Button} bg='black' >
           <GiHamburgerMenu fontSize='25px'  color='white'   />
        </MenuButton>
      <MenuList w='330px' zIndex="2"  >
         <MenuItem bg='rgb(23,6,38)'   h='50px' borderBottom='3px solid gray' borderTop='3px solid gray' fontWeight='700' fontSize='17px' color='gray'  >Home</MenuItem>
         
      <Accordion allowToggle   >
       <AccordionItem  > 
        <h2>
        <AccordionButton  h='50px' mt='-20px' bg='rgb(23,6,38)' borderBottom='3px solid gray'>
         <Box as="span" flex='1' textAlign='left'fontWeight='700' color='gray' fontSize='17px'   >
           Explore
         </Box>
       
        </AccordionButton >
        </h2>
       <AccordionPanel  bg='rgb(23,6,38)' color='white' fontWeight='700' >
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Channels</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Tv Shows</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Movies</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Web Series</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >News</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Premium</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Live</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Music</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Kids</Center>
       </AccordionPanel>
      </AccordionItem>

      <AccordionItem > 
        <h2>
        <AccordionButton  h='50px' mt='-20px' bg='rgb(23,6,38)' borderBottom='3px solid gray' >
         <Box as="span" flex='1' textAlign='left'fontWeight='700' color='gray' fontSize='17px' >
           Plans
         </Box>
         <AccordionIcon />
        </AccordionButton>
        </h2>
       <AccordionPanel  bg='rgb(23,6,38)' color='white' fontWeight='700'  >
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Buy plan</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Have a prepaid code ?</Center>
      
       </AccordionPanel>
      </AccordionItem>

      <AccordionItem > 
        <h2>
        <AccordionButton  h='50px' mt='-20px' bg='rgb(23,6,38)' borderBottom='3px solid gray' >
         <Box as="span" flex='1' textAlign='left'fontWeight='700' color='gray' fontSize='17px' >
           Settings
         </Box>
         <AccordionIcon />
        </AccordionButton>
        </h2>
       <AccordionPanel  bg='rgb(23,6,38)' color='white' fontWeight='700'  >
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Reset setting to default</Center>
      
      
       </AccordionPanel>
      </AccordionItem>

      <AccordionItem > 
        <h2>
        <AccordionButton  h='50px' mt='-20px' bg='rgb(23,6,38)' borderBottom='3px solid gray' >
         <Box as="span" flex='1' textAlign='left'fontWeight='700' color='gray' fontSize='17px' >
           Plans
         </Box>
         <AccordionIcon />
        </AccordionButton>
        </h2>
       <AccordionPanel  bg='rgb(23,6,38)' color='white' fontWeight='700' >
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >About us</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Help Center</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Term & Condition</Center>
       <Center h='50px' _hover={{bg:"rgb(31,8,50)"}} >Privacy Policy</Center>
      
       </AccordionPanel>
      </AccordionItem>


     </Accordion>
         
    </MenuList>
   </Menu>
  </Flex>

      
    </Flex>
    
    
    
    
    </>
)






}