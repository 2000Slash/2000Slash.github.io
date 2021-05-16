import React from 'react';
import { Box, Typography } from '@material-ui/core';
export default function About() {
    return(
        <Box mx="auto" maxWidth="80%" mt={15}>
                <Typography variant="h4">About Me</Typography>
                <Typography>Hi I'm Nils. Thank you for checking out my website. Im currently studying Computer Science and I'm interested in many different IT related topics. You can find my github <a href="https://github.com/2000Slash">here</a> and see what I'm working on in the Projects tab.</Typography>
        </Box>
    )
}
