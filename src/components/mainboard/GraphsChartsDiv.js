
import { makeStyles } from "@material-ui/core";
import Graphs from "./Graphs";
import ApexChart from './Radical'

import { FiArrowDown } from 'react-icons/fi'

const useStyle = makeStyles({
    box1: {
        // border: '2px solid black',




    },
    Sub_box1: {
        lineHeight: '0px',
        '& h3': {
            marginLeft: '20px',
            opacity: '0.8'
        },
        '& p': {
            marginLeft: '20px',
            fontSize: '13px',
            color: '#a3a0fb',
        }

    },
    Sub_box2: {
        position: 'absolute',
        top: 425,
        left: 480,
        '& button': {
            width: '90px',
            height: '25px',
            backgroundColor: '#f7faff',
            border: '1px solid grey',
            cursor: 'pointer',
            marginLeft: '5px',
            fontSize: '12px',
            fontWeight: '300',
            color: 'grey',
        }

    },
    box2: {
        '& h3': {
            // marginLeft: '45px',
            textAlign: 'center',

            opacity: '0.8'
        },
        '& h5 span': {
            backgroundColor: ' #EDECFE',
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            // marginLeft: '100px',
            display: 'inline-block',

        },
        '& hr':{
            width:'190px',
            color:'#7d8bff',
            opacity:'0.3'
        },
        '& a':{
            textDecoration: 'none',
            fontSize:'14px',
        color:'#7d8bff',
        marginLeft:'100px'
        }
    },
    fotter: {
        lineHeight: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        // border: '2px solid red',
        width: '230px',
        marginLeft: '30px',
        lineHeight: '0px',


        '& h5': {
            fontSize: '16px',
            fontWeight: '700',
            opacity: '0.9',



        },
        '& p': {
            position: 'absolute',
            top: '695px',
            marginLeft: '10px',
            lineHeight: '0',
            fontSize: '14px',
            opacity: '0.5',

        },
       


    }


})


function GraphsChartsDiv() {
    const classes = useStyle();
    return (<>

        <div className={classes.box1}>
            <div className={classes.Sub_box1}>
                <h3>AP and AR Balance</h3>
                <p>Avg. $5,309</p>
                <div className={classes.Sub_box2}>
                    <button>Months <FiArrowDown style={{ fontSize: '15px' }} /></button>
                    <button>Last year <FiArrowDown style={{ fontSize: '15px' }} /></button>
                </div>
            </div>
            <Graphs />
        </div>


        <div className={classes.box2}>
            <h3>% of Income Budget</h3>
            <ApexChart
                word='budget'
                value='67'
            />

            <div className={classes.fotter}>
                <div>
                    <h5> <span ></span> Blance</h5>
                    <p>-$18,570</p>
                </div>
                <div>
                    <h5> <span style={{ backgroundColor: '#a4a1fb' }}></span> Blance</h5>
                    <p>$31,430</p>
                </div>
            </div>
                <hr></hr>
                <a href="#">View Full Report</a>
        </div>
        



        <div className={classes.box2}>
            <h3>% of Expenses Budget</h3>
            <ApexChart
                word='profit'
                value='48' />

            <div className={classes.fotter}>
                <div>
                    <h5> <span ></span> Blance</h5>
                    <p>-$18,570</p>
                </div>
                <div>
                    <h5> <span style={{ backgroundColor: '#a4a1fb' }}></span> Blance</h5>
                    <p>$31,430</p>
                </div>
            </div>
            <hr></hr>
                <a href="#">View Full Report</a>

        </div>



    </>)




}
export default GraphsChartsDiv;