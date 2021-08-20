import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./account/login";
import LogOutButton from "./account/logout";

const useStyles = makeStyles({
    component:{
        background: '#FFFFFF',
        color: '#000000'
    },
    container:{
        justifyContent: 'center',
        '& > *':{ //For styling of child components.
            padding: 20
        }
    }
})

const Header  = () => {
    const classes = useStyles();
    const {isAuthenticated} = useAuth0();
    return (    
        <AppBar className = {classes.component}>
            <Toolbar className = {classes.container}>
                <Link className = {classes.link} to = '/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography>HOME</Typography>
                </Link>
                <Link to = {"/about"} className={classes.link} style={{ textDecoration: 'none', color: 'inherit' }}> 
                    <Typography>ABOUT</Typography> 
                </Link>
                {isAuthenticated ?<LogOutButton className = {classes.button}/>:<LoginButton className = {classes.button}/>}
            </Toolbar>
        </AppBar>
    )
}

export default Header;