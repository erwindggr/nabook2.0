import { Box, Image, Input, Flex, Button, Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import myLogo from '../asset/myLogo.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import account_types from '../redux/auth/types';
import { setSearchTerm, selectSearchTerm } from '../redux/searchTermSlice';

export const Navibar = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // search Only
    const searchTerm = useSelector(selectSearchTerm);

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };
    // search Only


    function logOut() {
        dispatch({
            type: account_types.ACC_LOGOUT
        })
        localStorage.clear();
        window.location.reload(true)
        // setIsLoggedIn(!isLoggedIn);
    }

    return (
        <Box w='100%' h='75px' bgColor={'white'} boxShadow={'0px 10px 20px -25px #111'} zIndex={3} position='sticky' top='0' >
            <Flex w='80%' h='75px' m='0 auto' align={'center'} justify='space-between'>

                <Image src={myLogo} h='80%' sx={{
                    _hover: {
                        cursor: "pointer",
                    },
                }} />

                <Flex w='40%' align={'center'}>
                    <Input value={searchTerm} onChange={onSearchTermChangeHandler} id='searchbar' variant='flushed' placeholder='Search ..' marginRight={'10px'} />
                    <Button borderRadius={'0'}>Search</Button>
                </Flex>


                {/* Atur Login atau Logout */}
                {/* {isLoggedIn ? ( */}
                <Menu position="fixed" zIndex="3" isLazy>
                    <MenuButton>
                        <Avatar name={props.account?.fullname}
                            sx={{
                                _hover: {
                                    cursor: "pointer",
                                },
                            }} />
                    </MenuButton>

                    <MenuList fontSize={"md"}>
                        <MenuItem sx={{
                            _hover: {
                                bgColor: "#F8F4EA",
                            },
                            _active: {
                                bgColor: "#ECE8DD",
                            },
                        }}>
                            Profile
                        </MenuItem>
                        {/* stop */}
                        <MenuItem sx={{
                            _hover: {
                                bgColor: "#F8F4EA",
                            },
                            _active: {
                                bgColor: "#ECE8DD",
                            },
                        }} onClick={() => navigate("/add")}>
                            Add
                        </MenuItem>
                        {/* stop */}
                        <MenuItem borderTop={"1px solid #E2E8F0"} sx={{
                            _hover: {
                                bgColor: "#F8F4EA",
                            },
                            _active: {
                                bgColor: "#ECE8DD",
                            },
                        }} onClick={logOut}>
                            Log Out
                        </MenuItem>
                    </MenuList>
                </Menu>
                {/* ) : (
                    <Box display={'flex'} w='15%' justifyContent={'space-around'}>
                        <Button borderRadius={'0'} bgColor={'#304945'} color='white' sx={{
                            _hover: {
                                bgColor: "#22423d",
                            },
                            _active: {
                                bgColor: "#111c1a",
                            },
                        }} onClick={() => navigate("/login")}>Log-In</Button>
                        <Button borderRadius={'0'} onClick={() => { navigate("/signup") }}>Sign-Up</Button>
                    </Box>
                )} */}


            </Flex>
        </Box>
    )
}