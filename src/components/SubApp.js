import React from "react";
import './Style.css';

import Leftboard from './Leftboard';
import Righboard from "./Rightboard";



import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({

})

function SubApp() {

    const classes = useStyle();
    return (
        <>
        <div className="Box">
        <Leftboard/>
        <Righboard/>
        </div>

        </>
    )
}

export default SubApp;