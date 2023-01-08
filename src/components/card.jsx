import { Box, useColorModeValue, Heading, Text, Stack, Image } from '@chakra-ui/react';

// const IMAGE = 'https://assets3.razerzone.com/2c6G4yGAH9jMrResbB8Ss_4DRYA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh17%2Fhd4%2F9452090490910%2F221115-blade14-p8-fhd-qhd-mercury-1500x1000-2.jpg';

export const Cards = (props) => {
    return (
        <>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>

                <Box mt={-12} pos={'relative'} height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 3,
                        left: 0,
                        backgroundImage: `url(${props.data.imgurl})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(25px)',
                        },
                    }}
                >

                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={props.data.imgurl}
                    />

                </Box>

                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {props.data.brand}
                    </Text>

                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {props.data.title}
                    </Heading>

                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            {props.data.price}
                        </Text>
                        <Text textDecoration={'line-through'} color={'gray.600'}>
                            {props.data.disc}
                        </Text>
                    </Stack>
                </Stack>

            </Box>

        </>
    );
}