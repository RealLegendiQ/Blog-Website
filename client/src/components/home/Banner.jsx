import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image: {
        background: `url(${'https://www.wallpaperup.com/uploads/wallpapers/2015/02/05/611548/edcd2e21511e4a524631ca201b7d93b0.jpg'}) center/60% repeat-x #0000`,
        width: '100%',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child':{
            fontSize: 66,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child':{
            fontSize: 20,
            color: '#FFFFFF'
        }
    }
})

const Banner = () =>{
    const classes = useStyles();
    return(
        <Box className = {classes.image}>
            <Typography>BLOG</Typography>
            <Typography>Knowledge is power</Typography>
        </Box>
    )
}

export default Banner;