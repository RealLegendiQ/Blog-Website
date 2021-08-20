import {Grid} from '@material-ui/core'

//Components exports
import Banner from "./Banner";
import Catagories from "./Catagories";
import Posts from "./Posts";
const Home = () =>{
    return(
        <>
            <Banner/>
            <Grid container>
                <Grid item ls = {2} sm = {2} xs = {12} >
                    <Catagories />
                </Grid>
                <Grid container item ls = {10} sm = {10} xs = {12}>
                    <Posts />
                </Grid>
            </Grid>
                
            
        </>
    )
}

export default Home;