import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HStack, Box } from "@chakra-ui/react";
import {
    faXTwitter,
    faInstagram,
    faMixcloud,
    faFacebook,
    faSoundcloud,
    faThreads
  } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faMixcloud,
    url: "https://www.mixcloud.com/djseanzie/",
  },
  {
    icon: faSoundcloud,
    url: "https://www.soundcloud.com/djseanzie/",
  },
  {
    icon: faXTwitter,
    url: "https://twitter.com/djseanzie",
  },
  {
    icon: faThreads,
    url: "https://www.threads.net/@djseanzie",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/djseanzie/",
  },
  {
    icon: faFacebook,
    url: "https://facebook.com/djseanzie",
  }
  ];


const SocialLinks = () => {
    return (<Box marginTop="2em" >
        <HStack spacing={4} style={{justifyContent: "center", alignItems: "center"}}>
            {socials.map(socialMediaLinks => {
                return <Box key={socialMediaLinks.url}><a rel="me noopener" href={socialMediaLinks.url}><FontAwesomeIcon icon={socialMediaLinks.icon} size="2x" /></a></Box>
            })}
        </HStack>
    </Box>)
}

export default SocialLinks;