import React from "react";
import './MainBox.css'
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";


function MainBox(){
    return(
        <Box className='mainbox'>
            <Grid container spacing={0} wrap="wrap">
                <Grid item md={6}>
                    <Box className='box1'></Box>
                    
                </Grid> 
                
                <Grid item md={6}>
                <Box className='box2'></Box>   
                    
                </Grid>    
            </Grid>

        </Box>
    );
}
export default MainBox;