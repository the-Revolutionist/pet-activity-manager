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

export const ActivityCard = ({ title, date, amount }) => {
  const [show, setShow] = useState(true);
  const toast = useToast();
  const handleToggle = () => setShow(!show);

  return (
    <>
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
                  <Text>{title}</Text>
                </VStack>
                <Spacer />
                <VStack>
                  <Center size="lg" w="full">
                    Time Stamp
                  </Center>
                  <Text>{date}</Text>
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
                <Collapse startingHeight={100} in={show}>
                  <Text>{amount}</Text>
                </Collapse>
                <Stack direction="row">
                  <Button size="sm" onClick={handleToggle} mt="1px">
                    Show {show ? 'More' : 'Less'}
                  </Button>
                </Stack>
              </FormControl>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  );
};
