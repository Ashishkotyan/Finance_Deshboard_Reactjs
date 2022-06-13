import React from 'react'

import {IoChevronDown} from 'react-icons/io5'
import { IoChevronUpSharp} from 'react-icons/io5'
import { makeStyles } from '@material-ui/core'
import lo1 from './images/lo1.svg'
import lo2 from './images/lo2.svg'
import lo3 from './images/lo3.svg'
import lo4 from './images/lo4.svg'
import lo5 from './images/lo5.svg'
import lo6 from './images/lo6.svg'
import lo7 from './images/lo7.svg'





const useStyle = makeStyles({

    ULpart: {
        // border: '2px solid red',
        padding: '10px',
        '& span:nth-child(2)':{
            marginLeft:'20px',
        },
        '& li :nth-child(3)':{
            marginLeft:'100px',
        },

        '& li': {
            listStyleType: "none",
            marginTop: '10px',
        },
        '& li a': {
            marginTop: '10px',
            textDecoration: 'none',
            color: '#a5adc6',

            '& span': {
                marginLeft: '40px',
                fontSize: '15px',


            }

        },


    },
    subli:{
        fontSize:'14px',
        marginLeft:'50px',
        marginTop:'10px',
    }

})


function DropDwon() {

    const classes = useStyle()
    return (
        <>
            <div className={classes.ULpart}>
                <li>
                    <a href='#'>
                        <img src={lo1} />
                        <span style={{marginLeft:'20px', marginTop:'100px' }}>Pages</span>
                        <IoChevronUpSharp style={{marginLeft:'100px'}}/>
                        
                        <li className={classes.subli}>Classic</li>
                        <li className={classes.subli}>Minimal</li>
                        

                    </a>
                </li>

                <li>
                    <a href='#'>
                        <img src={lo2} />
                        <span style={{marginLeft:'20px'}}>Application</span>
                        <IoChevronDown style={{marginLeft:'65px'}}/>
                        </a>
                        
                </li>

                <li>
                    <a href='#'>
                        <img src={lo3} />
                        <span style={{marginLeft:'15px'}}>UI Compnent</span>
                        <IoChevronDown style={{marginLeft:'52px'}}/></a>
                </li>
                
                <li>
                    <a href='#'>
                        <img src={lo4}/>
                        <span style={{marginLeft:'15px'}}>Widgets </span>
                        <IoChevronDown style={{marginLeft:'82px'}}/></a>
                </li>

                <li>
                    <a href='#'>
                        <img src={lo5} />
                        <span style={{marginLeft:'20px'}}>Froms </span>
                        <IoChevronDown style={{marginLeft:'93px'}}/></a>
                </li>

                <li>
                    <a href='#'>

                        <img src={lo6} />
                        <span style={{marginLeft:'20px'}}>Deshboard </span>
                        <IoChevronDown style={{marginLeft:'67px'}}/>
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <img src={lo7} />
                        <span style={{marginLeft:'20px'}}>Charts </span>
                        <IoChevronDown style={{marginLeft:'95px'}}/>
                    </a>
                </li>



            </div>

            

        </>
    )
}



export default DropDwon;
