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

export const ActivityCard = ({ activity, date, note, id, handleDelete }) => {
  const [show, setShow] = useState(false);
  const toast = useToast();
  const handleToggle = () => setShow(!show);

  const handleOnClick = e => {
    toast({
      title: 'Deleted',
      description: 'Activity Removed from List',
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
    handleDelete(id);
  };

  return (
    <>
      <form>
        <Box
          bgColor="grey"
          opacity="0.9"
          w="500px"
          borderColor="transparent"
          borderRadius="10px"
          p={5}
          shadow="md"
          borderWidth="1px"
          boxShadow="5px 5px 10px #3f3f3f"
        >
          <VStack>
            <HStack w="full">
              <CloseButton type="button" size="md" onClick={handleOnClick} />
            </HStack>
            <SimpleGrid columns={2} columnGap={4} rowGap={2} w="full">
              <GridItem colSpan={1} display="flex">
                <HStack justifyContent="flex-end">
                  <GridItem
                    fontSize="30px"
                    colSpan={1}
                    marginRight="120px"
                    marginLeft="30px"
                  >
                    <Center fontWeight={700}>Activity</Center>
                    <Text>{activity}</Text>
                  </GridItem>

                  <GridItem fontSize="30px" colSpan={1} alignItems="flex-end">
                    <Center fontWeight={700}>
                      <Text>Date</Text>
                    </Center>
                    <Text>{date}</Text>
                  </GridItem>
                </HStack>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel fontSize="30px" fontWeight={700} marginLeft="30px">
                    Note:
                  </FormLabel>
                  <Collapse startingHeight={10} in={show}>
                    <Text marginLeft="30px" fontSize="32px">
                      {note}
                    </Text>
                  </Collapse>
                  <Stack direction="row">
                    <Button
                      type="button"
                      size="sm"
                      onClick={handleToggle}
                      mt="-1px"
                      marginLeft="30px"
                    >
                      {show ? 'Hide' : 'Show'} Note
                    </Button>
                  </Stack>
                </FormControl>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Box>
      </form>
    </>
  );
};
