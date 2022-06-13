import React from "react";

import { makeStyles } from "@material-ui/core";

import Card from './Card';
import GraphsChartsDiv from './GraphsChartsDiv'

const useStyle = makeStyles({
    main: {
        border: "1px solid #fff",
        marginTop: '20px',
        backgroundColor: '#fff',
        '& div1': {
            marginTop: '90px',
        },
    },
    div1: {
        display: 'flex',
        flexWrap: 'wrap',
        lineHeight: '0px',
        width: 'auto',
        height: '250px',

        '& :nth-child(3)': {
            marginBottom: '20px',
            lineHeight: '0px',

        }



    }


})


function Mainboard() {
    const classes = useStyle();

    return (<>

        <div className={classes.main}>
            <div className={classes.div1} style={{ marginTop: '20px' }} >
                <Card />

            </div>
        </div>
        <div style={{ display: 'flex' }}>
            <GraphsChartsDiv />

        </div>

    </>)
}
export default Mainboard;