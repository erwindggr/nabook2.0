import { Center, Image, Spinner, Stack, Box } from "@chakra-ui/react";
import myLogo from '../asset/myLogo.png'

export const Loading = () => {
    return (

        <Center width={"100vw"} height="90vh" >
            <Image src={myLogo} w="150px" />
            <Spinner color='#304945' size='xl'/>
        </Center>
    )
}