import { makeStyles } from '@material-ui/core';
import { IoIosNotificationsOutline } from 'react-icons/io'
import { TbMessage2 } from 'react-icons/tb'
import { BsSearch } from "react-icons/bs";
import logoMedia from './images/logoMedia.jpg'
import '../App.css'

import Mainboard from './mainboard/MainBoard';

const useStyle = makeStyles({

    Righboard: {
        // border: '2px solid blue',
        flex: 4,
        marginLeft: '0px',
        backgroundColor: '#f7faff'
    },
    Box1: {
        width: '95%',
        height: '100px',
        // border: '2px solid red',
        marginLeft: '0px',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#ffff',
        
    },
    inputbox: {
        // border: '2px solid red',
        marginTop: '20px',
        marginLeft: '40px',
        height: '50px',
        width: '30%',
        backgroundColor: '#f7faff',
        borderRadius: '25px 25px',
        '& input': {
            marginLeft: '30px',
            width: '90%',
            height: '40px',
            marginTop: '1px',
            border: 'none',
            outline: 'none',
            backgroundColor: '#f7faff',
            borderRadius: '20px 20px',
        }
    },
    icon: {
        opacity: '0.6',
        position: 'absolute',
        marginLeft: '10px',
        top: 55,

    },
    profileBox: {
        display: 'flex',
        alignItems: 'center',
    },
    iconBox: {
        marginRight: '29px',
        fontSize: '25px',
        '& :nth-child(2) ': {
            marginRight: '13px'
        },
        '& span':{
            backgroundColor: 'red',
            width: '9px',
            height: '9px',
            borderRadius: '50%',

            display: 'inline-block',
            position:'absolute',
            marginLeft:'14px'
            
        }
    },
    imgbox: {
        borderRadius: '50px',
        contain: 'content',
        marginRight: '20px',

    },
    img1: {
        width: '60px',
    }


})



function Righboard() {
    const classes = useStyle();
    return (
        <>

            <div className={classes.Righboard}>
                <div className={classes.Box1}>

                    <div className={classes.inputbox}>
                        <BsSearch className={classes.icon} />
                        <input placeholder='Search here...' />
                    </div>

                    <div className={classes.profileBox}>
                        <div className={classes.iconBox}>
                        <span style={{ backgroundColor: 'red' }}></span>
                            <IoIosNotificationsOutline />
                            <span style={{ backgroundColor: 'red' }}></span>
                           
                            <TbMessage2 />
                            
                        </div>
                        <div className={classes.imgbox}>
                            <img className={classes.img1} src={logoMedia} />
                        </div>
                    </div>

                </div>
            <Mainboard/>

            </div>
        </>
    )
}
export default Righboard;