import {
  Badge,
  Box,
  Button,
  Center,
  CloseButton,
  Collapse,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';

import { useState } from 'react';

export const ActivityCard = ({ items }) => {
  const [show, setShow] = useState(false);
  const toast = useToast();
  const handleToggle = () => setShow(!show);

  return (
    <>
      {items.map(item => (
        <Box
          bgColor="grey"
          opacity="0.9"
          w="500px"
          borderColor="transparent"
          borderRadius="10px"
          p={5}
          shadow="md"
          borderWidth="1px"
        >
          <VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
              <GridItem colSpan={2}>
                <HStack display="flex" direction="">
                  <VStack>
                    <Center size="lg" w="full" h="full">
                      Activity
                    </Center>
                    <Text>{item.checked}</Text>
                  </VStack>
                  <Spacer />
                  <VStack>
                    <Center size="lg" w="full">
                      Time Stamp
                    </Center>
                    <Text>{item.time}</Text>
                  </VStack>
                  <Spacer />
                  <CloseButton
                    size="md"
                    onClick={() =>
                      toast({
                        title: 'Deleted',
                        description: 'Activity Removed from List',
                        status: 'error',
                        duration: 1000,
                        isClosable: true,
                      })
                    }
                  />
                </HStack>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Note:</FormLabel>
                  <Collapse startingHeight={20} in={show}>
                    {item.item}
                  </Collapse>
                  <Stack direction="row">
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                      Show {show ? 'Less' : 'More'}
                    </Button>
                  </Stack>
                </FormControl>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Box>
      ))}
    </>
  );
};
