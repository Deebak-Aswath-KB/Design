import React from "react";
import './Parent.css'
import Box from '@mui/material/Box';
import MainBox from "./MainBox";


function Parent(){
    return(
        <Box className='parent'>
            <MainBox/>

        </Box>
    );
}
export default Parent;