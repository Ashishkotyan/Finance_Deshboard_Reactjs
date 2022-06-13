import React from 'react';
import financelogo from './images/financelogo.png';
import '../App.css'

import DropDwon from './DropDown';



import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({

    Leftboard: {
        // border: '2px solid red',
        flex: 1,
        backgroundColor: '#f7faff',
        height: 'auto',
        '& :nth-child(2)':{
            marginTop:'30px',
        }

    },
    imglogo: {
        marginTop: '30px',
        width: '200px',
        marginLeft: '25px',
        cursor: 'pointer',

    },

})

function Leftboard() {


    const classes = useStyle();

    return (
        <>
            <div className={classes.Leftboard}>
                <img className={classes.imglogo} src={financelogo} alt="logo" />

                 <DropDwon/>                

            </div>
        </>
    )
}
export default Leftboard;