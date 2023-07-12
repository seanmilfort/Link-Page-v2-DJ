import React from "react";
import { VStack, Box, Button } from "@chakra-ui/react";

const socials = [
    {
      text: "Latest Mix",
      url: "https://newmix.djseanzie.club/",
    },
    {
        text: "Live Streams!",
        url: "https://www.mixcloud.com/live/djseanzie/",
    },
    {
        text: "Spotify Playlists",
        url: "https://spotify.djseanzie.club/",
    },
    {
        text: "YouTube Music Playlists",
        url: "https://ytmusic.djseanzie.club",
    },
    {
        text: "Website",
        url: "https://djseanzie.club/",
    },
  ];


const SocialButtons = () => {
    return (<Box marginTop="2em" >
        <VStack spacing={4}>
            {socials.map(socialMediaLinks => {
                return <Box key={socialMediaLinks.url}><a href={socialMediaLinks.url}><Button style={{color: "#000000", backgroundColor: "#FFFFFF", width: "400px"}}>{socialMediaLinks.text}</Button></a></Box>
            })}
        </VStack>
    </Box>)
}

export default SocialButtons;