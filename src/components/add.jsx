import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue, HStack, Image, AvatarBadge, IconButton, Center, Box } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { axiosInstance } from '../config/config';
import { useNavigate } from 'react-router-dom';

export const Add = () => {
    const [objData, setObjData] = useState({
        id: 0,
        imgurl: "",
        brand: "",
        title: "",
        price: "",
        disc: "",
        description: ""
    });

    const navigate = useNavigate();

    function inputHandler(event) {
        const {value, name} = event.target;
        setObjData({
            ...objData,
            [name] : value
        })
    }

    function addItem() {
        axiosInstance.post("/product/", objData);
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>

                <Center>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                        Add Product
                    </Heading>
                </Center>

                <FormControl id="userName">
                    {/* <FormLabel>User Icon</FormLabel> */}
                    {/* <Stack direction={['column', 'row']} spacing={6}> */}
                    <Center>

                        <Image w="350px" src={objData.imgurl} objectFit={'contain'} mb='10px' rounded={'xl'}>
                            {/* <AvatarBadge
                                    as={IconButton}
                                    size="sm"
                                    rounded="full"
                                    top="-10px"
                                    colorScheme="red"
                                    aria-label="remove Image"
                                    icon={<SmallCloseIcon />}
                                /> */}
                        </Image>

                    </Center>
                    {/* <Center w="full">
                            <Button w="full">Change Icon</Button>
                        </Center> */}
                    {/* </Stack> */}
                </FormControl>

                <FormControl id="imgurl">
                    <FormLabel>Image URL</FormLabel>
                    <Input
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        name="imgurl"
                        onChange={inputHandler}
                    />
                </FormControl>

                <FormControl id="email">
                    <FormLabel>Brand</FormLabel>
                    <Input
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        name="brand"
                        onChange={inputHandler}
                    />
                </FormControl>

                <FormControl id="password">
                    <FormLabel>Title</FormLabel>
                    <Input
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        name="title"
                        onChange={inputHandler}
                    />
                </FormControl>

                <FormControl id="userName">
                    <FormLabel>Price</FormLabel>
                    <Input
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        name="price"
                        onChange={inputHandler}
                    />
                </FormControl>

                <FormControl id="userName">
                    <FormLabel>Discount</FormLabel>
                    <Input
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        name="disc"
                        onChange={inputHandler}
                    />
                </FormControl>

                <FormControl id="userName">
                    <FormLabel>Description</FormLabel>
                    <Input
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        name="description"
                        onChange={inputHandler}
                    />
                </FormControl>

                <Stack spacing={6} direction={['column', 'row']}>
                    <Button
                        bg={'red.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'red.500',
                        }} onClick={()=> navigate("/")}>
                        Back
                    </Button>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'blue.500',
                        }} onClick={addItem}>
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
}