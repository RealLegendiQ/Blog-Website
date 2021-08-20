import {Box, Typography, makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    constainer:{
        height: 300,
        margin: 10,
        borderRadius: 10,
        border: '1px solid #d3cede',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column', 
        '& > *':{
            padding: '0 5px 5px 5px'
        }
    },
    image:{
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0px 0px'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    textHeading: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'cr'
    },
    textDetail: {
        fontSize: 14,
        wordBreak: 'break-word'
    }
})


const Post = ({post}) => {
    const url = post.picture || 'https://www.wallpaperup.com/uploads/wallpapers/2014/10/02/467044/6327d828d1a186d5253927c2a5145c94-700.jpg' 
    const classes = useStyles();
    const cutString = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    }
    return(
        
        <Box className = {classes.constainer}>
            <img src={url} alt="BlogImg" className = {classes.image}/>
            <Typography className = {classes.text}>{post.categories}</Typography>
            <Typography className = {classes.textHeading}>{post.title}</Typography>
            <Typography className = {classes.text}>Autor: {post.username}</Typography>
            <Typography className = {classes.textDetail}>{cutString(post.description, 30    )}</Typography>
        </Box>
    )
}

export default Post;