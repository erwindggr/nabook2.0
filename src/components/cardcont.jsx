import { Box, Heading, Grid, GridItem, Center, SimpleGrid } from '@chakra-ui/react';
import { Cards } from './card';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { axiosInstance } from '../config/config';
import { loadData, selectFilteredAllProducts } from '../redux/allProductSlice';
import { useDispatch } from 'react-redux';

export const CardCont = () => {
    const dispatch = useDispatch();
    const accSelector = useSelector((state) => state.auth);
    // const [product, setProduct] = useState([]);

    // const fetchProduct = async () => {
    //     await axiosInstance.get("product").then((res) => {
    //         setProduct(res.data);
    //     })
    // }

    // useEffect(() => {
    //     fetchProduct();
    // }, [])

    // search gabung
        
        const onFirstRender = () => {
            dispatch(loadData());
            // loadData();
        }
        useEffect(onFirstRender, []);
        // useEffect(loadData(), []);
        const allProducts = useSelector(selectFilteredAllProducts);

    // search gabung
    return (
        <Box w='90%' m='0 auto'>
            <Center pt='20' pb='10'>
                <SimpleGrid minChildWidth='120px' templateColumns='repeat(4, 1fr)' gap={20}>
                    {
                        // product.map((val, idx) => {
                        //     return (
                        //         <Cards user={accSelector} key={idx} data={val} />
                        //     )
                        // })
                        allProducts.map((val, idx) => {
                            return (
                                <Cards user={accSelector} key={idx} data={val} />
                            )
                        })
                        // allProducts.map((product) => (

                        //         <Cards /*user={accSelector}*/ key={product.id} data={product}/>
                            
                        // ))
                    }
                </SimpleGrid>
            </Center>
        </Box>
    )
};