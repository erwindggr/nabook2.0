import { SimpleGrid, Stack, Text, Image, Link, Box, Flex } from '@chakra-ui/react'
// import * as React from 'react'
import myLogo from '../asset/myLogo.png';

export const Footer = () => (
    <Box display='flex' alignItems={'center'} w='80%' m='0 auto' justifyContent={'space-between'} pt={8} pb={8}
        as="footer"
        role="contentinfo"
        // py={{
        //     base: '12',
        //     md: '16',
        // }}
    >

        <Stack
            spacing={{
                base: '4',
                md: '5',
            }}
        >
            <Image src={myLogo} w='100px' sx={{
                _hover: {
                    cursor: "pointer",
                },
            }} />

            <Text fontSize="sm" color="subtle">
                &copy; {new Date().getFullYear()} NABOOK, Inc. All rights reserved.
            </Text>
        </Stack>

        <Box as={Stack} w='60%'>

            <Flex justify='space-between'>
                <Stack align={'flex-start'}>
                    <Text fontWeight={'bold'}>Company</Text>
                    <Link href={'#'}>About Us</Link>
                    <Link href={'#'}>Blog</Link>
                    <Link href={'#'}>Careers</Link>
                    <Link href={'#'}>Contact Us</Link>
                </Stack>

                <Stack align={'flex-start'}>
                    <Text fontWeight={'bold'}>Support</Text>
                    <Link href={'#'}>Help Center</Link>
                    <Link href={'#'}>Safety Center</Link>
                    <Link href={'#'}>Community Guidelines</Link>
                </Stack>

                <Stack align={'flex-start'}>
                    <Text fontWeight={'bold'}>Legal</Text>
                    <Link href={'#'}>Cookies Policy</Link>
                    <Link href={'#'}>Privacy Policy</Link>
                    <Link href={'#'}>Terms of Service</Link>
                    <Link href={'#'}>Law Enforcement</Link>
                </Stack>
            </Flex>

        </Box>
    </Box>
)