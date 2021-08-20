import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize, Dialog, 
    DialogTitle, DialogActions, Fab, DialogContent, TextField, List, ListItem, ListItemText, Menu, MenuItem} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import {useState, useEffect} from "react";
import { getPost, updatePost } from "../../service/api";
import { useHistory } from 'react-router-dom';
import {CatagoriesData} from '../../constants/data';
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
    form:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textField:{
        flex: 1,
        margin: '0px, 30px',
        fontSize: 25
    },
    textArea:{
        width: "100%",
        marginTop: 50,
        border: 'none',
        fontSize: '18',
        '&:focus-visible':{
            outline: 'none'
        }
    }
    
}));

const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'Purushotam',
    categories: 'All',
    createdDate: new Date(),
    user_id: ""
}

const UpdateView = ({ match }) => {
    const classes = useStyles();
    const url = 'https://www.wallpaperup.com/uploads/wallpapers/2014/10/02/467044/6327d828d1a186d5253927c2a5145c94-700.jpg';
    const history = useHistory();

    const [post, setPost] = useState(initialValues);
    useEffect(() => {
        const fetchData = async () =>{
            let data = await getPost(match.params.id);
            console.log(data);
            setPost(data);
        } 
        fetchData();
    }, []);
    
    const handleChange = (e) =>{
        setPost({...post, [e.target.name]: e.target.value})
    }

    const updateBlog = async () => {
        await updatePost(match.params.id, post);
        history.push(`/details/${match.params.id}`);
    }

    //****** Blog Banner Image
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState("");

    const handleimgClickOpen = () => {
        setOpen(true);
    }

    const handleimgClose = () => {
        console.log(post);
        setImg(post.picture);
        setOpen(false);
    }
    const handleimgdelete = () => {
        setPost({ ...post, picture: "" });
        setOpen(false);
    }
    //******

    //****** category 
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setPost({ ...post, categories: CatagoriesData[index] });
        console.log(post);
        setAnchorEl(null);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //******
    return(
        <Box className = {classes.container}>
            <img className={classes.image} src={post.picture} onError={(e) => { e.target.onerror = null; e.target.src = url; }} alt="BlogBanner" />
            <FormControl className = {classes.form}>
                <Box>
                    <Button onClick={handleimgClickOpen}>
                        <Fab color="secondary" aria-label="add">
                            <Add />
                        </Fab>
                    </Button>
                    <Dialog open={open} onClose={handleimgClose}>
                        <DialogTitle>Enter URL of the image</DialogTitle>
                        <DialogContent>
                            <TextField id="outlined-basic"
                                label="Enter URL"
                                name="picture"
                                onChange={(e) => handleChange(e)}
                                variant="outlined" />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleimgdelete} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleimgClose} color="primary">
                                Ok
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>

                <InputBase placeholder = "Title" name = 'title' onChange = {(e) => handleChange(e)} value = {post.title} className = {classes.textField} />
                <Button onClick = {() => updateBlog()} variant = "contained" color = "secondary">Update</Button>
            
            </FormControl>

            <Box>
                <List component="nav" aria-label="Device settings">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        onClick={handleClickListItem}
                    >
                        <ListItemText primary="Category" secondary={CatagoriesData[selectedIndex]} />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {CatagoriesData.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>


            <TextareaAutosize
                rowsMin={5}
                value = {post.description}
                placeholder = "Here, Write your own blog..."
                className = {classes.textArea}
                onChange = {(e) => handleChange(e)}
                name = "description"
            />
        </Box>
    )
}

export default UpdateView;