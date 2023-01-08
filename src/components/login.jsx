import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, useColorModeValue, Image, Link, Alert, AlertIcon, Text } from '@chakra-ui/react';
import myLogo from '../asset/myLogo.png';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { accountLogin } from '../redux/middleware/userauth';

export const Login = () => {
    const dispatch = useDispatch();

    let navigate = useNavigate();

    // VALUE INPUT
    const [account, setAccount] = useState({
        email: "",
        password: ""
    });
    function inputHandler(event) {
        const { name, value } = event.target;

        setAccount({
            ...account,
            [name]: value
        })
    }

    const [status, setStatus] = useState(false)
    async function Login() {
        const isAuth = await dispatch(accountLogin(account));
        console.log(isAuth)
        if (isAuth.status) {
            return navigate("/", { state: { account: isAuth.data }, replace: true })
        }
        return setStatus(true)
    }

    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Image src={myLogo} w='150px' m='0 auto' />

                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Log-in to your account</Heading>
                </Stack>

                <Box
                    // rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>

                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>

                            {/* INPUT EMAIL! 🍹*/}
                            <Input name="email" type="email" onChange={inputHandler} />
                        </FormControl>

                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>

                            {/* INPUT PASSWORD! 🍹*/}
                            <Input name="password" type="password" onChange={inputHandler} />
                        </FormControl>

                        <Stack spacing={10}>

                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                            </Stack>

                            <Button borderRadius={'0'} bgColor={'#304945'} color='white'
                                sx={{
                                    _hover: {
                                        bgColor: "#22423d",
                                    },
                                    _active: {
                                        bgColor: "#111c1a",
                                    },
                                }} onClick={Login}>
                                Sign in
                            </Button>

                            <Stack align={'center'}>
                                <Text fontSize={'sm'}>Dont have an account ? <Link onClick={()=> navigate("/signup")}>Signup</Link></Text>
                            </Stack>

                            {status ?
                                <Alert status='error' zIndex={2} variant="top-accent" >
                                    <AlertIcon />
                                    wrong email/password
                                </Alert>
                                :
                                null
                            }

                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}