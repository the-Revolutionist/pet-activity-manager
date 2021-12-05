import {
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
  Stack,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';

import { useState } from 'react';

export const ActivityCard = ({ activity, date, note }) => {
  const [show, setShow] = useState(false);
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
        boxShadow="3px 3px 10px tomato"
      >
        <VStack>
          <HStack alignItems="end" w="full">
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
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={2}>
              <VStack>
                <Center size="lg" w="full" h="full" fontWeight={700}>
                  Activity
                </Center>
                <Text>{activity}</Text>
              </VStack>
              <VStack>
                <Center size="lg" w="full" fontWeight={700}>
                  Time Stamp
                </Center>
                <Text>{date}</Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontWeight={700}>Note:</FormLabel>
                <Collapse startingHeight={20} in={show}>
                  <Text>{note}</Text>
                </Collapse>
                <Stack direction="row">
                  <Button size="sm" onClick={handleToggle} mt="2px">
                    Show {show ? 'Less' : 'More'}
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
