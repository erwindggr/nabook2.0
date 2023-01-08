import { Flex, Box, FormControl, FormLabel, FormHelperText, Input, InputGroup, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Link, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import myLogo from '../asset/myLogo.png';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import YupPassword from 'yup-password';
import { useFormik } from 'formik';
import { axiosInstance } from '../config/config';

export const Signup = () => {
    YupPassword(Yup);
    const [showPassword, setShowPassword] = useState(false);

    const [enable, setEnable] = useState(false);

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            id: 0,
            fullname: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object().shape({
            fullname: Yup.string().min(10, "min 10 character"),
            email: Yup.string().email("please enter a valid email"),
            password: Yup.string().minLowercase(1, "min 1 huruf kecil").minUppercase(1, "min 1 huruf besar").min(4, "minimal 5 digit"),
        }),
        onSubmit: (async () => {
            const res = await axiosInstance.post("/accounts/", formik.values)
            if (res.status === 201)
                navigate("/login", { replace: true })
        })
    });

    useEffect(() => {
        let { fullname, email, password } = formik.values
        if (fullname && email && password) {
            setEnable(true)
        } else {
            setEnable(false)
        }
    }, [formik.values]);

    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'}>

            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Image src={myLogo} w='150px' m='0 auto' />
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up your account
                    </Heading>
                </Stack>

                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>

                        <Box>
                            <FormControl id="firstName" isRequired>
                                <FormLabel>Full Name</FormLabel>
                                <Input name="fullname" type="text" onChange={(e) => formik.setFieldValue("fullname", e.target.value)} />
                                <FormHelperText>
                                    {formik.errors.fullname}
                                </FormHelperText>
                            </FormControl>
                        </Box>


                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input name="email" type="email" onChange={(e) => formik.setFieldValue("email", e.target.value)} />
                            <FormHelperText>
                                {formik.errors.email}
                            </FormHelperText>
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input name="password" type={showPassword ? 'text' : 'password'} onChange={(e) => formik.setFieldValue("password", e.target.value)} />

                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormHelperText w={"268px"}>
                                {formik.errors.password}
                            </FormHelperText>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button loadingText="Submitting" size="lg" borderRadius={'0'} bgColor={'#304945'} color='white'
                                sx={{
                                    _hover: {
                                        bgColor: "#22423d",
                                    },
                                    _active: {
                                        bgColor: "#111c1a",
                                    },
                                }}
                                onClick={formik.handleSubmit} disabled={enable ? null : "disabled"} >
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'} onClick={() => navigate("/login")}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}