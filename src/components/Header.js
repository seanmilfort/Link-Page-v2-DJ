import {Text, Avatar, Box, VStack, Image } from "@chakra-ui/react";
import React from "react";
import profilepicture from '../images/seanzie_profile.jpg';
import seanzielogo from '../images/SEANZIE_LOGO.png';

const Header = () => {
return (
    <Box marginTop="5em" >
        <VStack>
            <Avatar size="2xl" name="SEANZIE" src={profilepicture} />
            <Image maxWidth='400px' src={seanzielogo} alt='Seanize Logo' />
            <Text size="md">EDM/Mashup Style DJ</Text>
        </VStack>
    </Box>
)
}

export default Header;