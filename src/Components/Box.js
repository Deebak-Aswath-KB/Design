import React from "react";
import './Box.css'
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import image from './image.jpg'
import EditIcon from '@mui/icons-material/Edit';





function FirstBox(){
    return(
        <Box className='parentbox'>
            <Box className='borderbox'>
                <Box className='container'>
                    <Grid container spacing={0}>
                        <Grid item md={6} sm={12} xs={12}>
                            <Box className='box1'>
                                <Box className='profileimage'>
                                    <img id="img" src={image} alt="Profilepic"></img> 
                                    <EditIcon className="icon"/>
                                </Box>
                                <Box className='profilename'>
                                    <p>Profile Name</p>
                                    <EditIcon className="icon"/>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <Box className='box2'>
                                <Box className='centeralign'><p>CenterAlign</p></Box>
                                <Box className='topcenteralign'><p>TOP CenterAlign</p></Box>
                                <Box className='bottombox'>
                                    <Box className='topleft'><p>Top left</p></Box>
                                    <Box className='bottom'><p>Bottom</p></Box>
                                    <Box className='bottomright'><p>Bottom Right</p></Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>


            </Box>
        </Box>
    );
}
export default FirstBox;