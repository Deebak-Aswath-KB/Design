import React from "react";
import './FirstBox.css'
import Box from '@mui/material/Box';
import Parent from "./Parent";




function FirstBox(){
    return(
        <Box className='firstbox'>
            <Parent/>

        </Box>
    );
}
export default FirstBox;