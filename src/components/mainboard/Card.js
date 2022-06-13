import React, { useState } from "react";
import { colors, makeStyles } from "@material-ui/core";




const useStyle = makeStyles({
    Card: {

        backgroundColor: "#3b76ef",
        backgroundColor:'red',
        color: '#fff',
        borderRadius: '7px',
        marginLeft: "25px",
        lineHeight: '0px',
        height: '100px',
        fontSize: '20px',
        fontWeight: '300',

        '& h4': {
            position: 'absolute',
            marginTop: '30px',
            marginLeft: '20px'
        },
        '& span': {
            position: 'absolute',
            marginTop: '60px',
            marginLeft: '20px'
        },
        '& p': {
            position: 'absolute',
            marginTop: '80px',
            marginLeft: '20px',
            fontSize: '10px'


        }

    }

})

const card_data = [
    {
        bg:'#3b76ef',
        head: 'Total Icome',
        Amount: '$ 579,00',
        saved: 'Saved 25%',

    },
    {
        bg:'#63c7ff',
        head: 'Total Express',
        Amount: '$ 79,000',
        saved: 'Saved 25%',


    },
    {
        bg:'#a66dd4',
        head: 'Cash on Hand',
        Amount: '$ 92,000',
        saved: 'Saved 25%',


    },
    {
        bg:'#6dd4b1',
        head: 'Net Profit Margin',
        Amount: '$ 179,000',
        saved: 'Saved 65%',


    }
]

function Card() {

    

    const classes = useStyle();
    return (<>

        {card_data.map((Ele) => {
            return (

                <div className={classes.Card}  style={{backgroundColor:Ele.bg, width:'400px' } } >
                    <h4>{Ele.head}</h4>
                    <span>{Ele.Amount}</span>
                    <p>{Ele.saved}</p>
                </div>
            )
        })}

    </>)
}
export default Card;