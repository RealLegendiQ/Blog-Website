import {Box, makeStyles, Typography} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom'
import { getPost, deletePost } from '../../service/api';
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) =>({
    container:{
        padding: '0px 100px',
        [theme.breakpoints.down('md')]:{
            padding: '0'
        }
    },
    image:{
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons:{
        float: 'right'
    },
    icon:{
        margin: 5,
        border:'1px solid #878787',
        borderRadius: 10,
        padding: 5 
    },
    heading:{
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subHeading:{
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]:{
            display: 'block'
        }
    }
}));
const View = ({match}) => { //match is a default prop
    const classes = useStyles();
    const url = 'https://www.wallpaperup.com/uploads/wallpapers/2014/10/02/467044/6327d828d1a186d5253927c2a5145c94-700.jpg';
    
    const [post, setPost] = useState({});
    const history = useHistory();
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    }, [])
    
    const deleteBlog = async () =>{
        await deletePost(post._id);
        console.log(post._id);
        history.push('/');
    }

    return (
        <Box className = {classes.container}>
            <img src= {post.picture || url} alt="PostDetailBanner" className = {classes.image}/>
            {isAuthenticated && post.user_id === user.sub &&
                <Box className = {classes.icons}>
                    <Link to = {`/update/${post._id}`}>
                        <Edit className = {classes.icon} color = "primary"/>
                    </Link>
                    <Delete style = {{cursor:'pointer'}} onClick = {() => deleteBlog()} className = {classes.icon} color = "secondary"/>
                </Box>
            }
            <Typography className = {classes.heading}>{post.title}</Typography>
            <Box className={classes.subHeading}>
                <Link to = {`/?user_id=${post.user_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography >Author: <span style = {{fontWeight: 600}}>{post.username}</span> </Typography>
                </Link>
                <Typography style = {{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
            <Typography> {post.description} </Typography>
        </Box>
    )
}

export default View;