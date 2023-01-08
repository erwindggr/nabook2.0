import { Box, Image } from '@chakra-ui/react';
import ads1 from '../asset/ads1.jpg';
import ads2 from '../asset/ads2.jpg';
import ads3 from '../asset/ads3.png';
import ads4 from '../asset/ads4.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Box w='80%' m='5px auto 70px' >
            <Slider {...settings}>
                <Box h='550px' >
                    <Image src={ads1} h='100%' margin='0 auto' objectFit={'cover'}/>
                </Box>
                <Box h='550px'>
                    <Image src={ads2} h='100%' margin='0 auto' objectFit={'cover'}/>
                </Box>
                <Box h='550px'>
                    <Image src={ads3} h='100%' margin='0 auto' objectFit={'cover'}/>
                </Box>
                <Box h='550px'>
                    <Image src={ads4} h='100%' margin='0 auto' objectFit={'cover'}/>
                </Box>
            </Slider>
        </Box>
    );
}