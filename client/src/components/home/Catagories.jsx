import {Button, makeStyles, Table, TableCell, TableRow, TableHead, TableBody} from '@material-ui/core';
import {Link} from 'react-router-dom'
import React from 'react';
import {CatagoriesData} from '../../constants/data';
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
    create:{
        margin: 20,
        background: "#6495ED",
        color: "#FFFFFF",
        width: "86%",
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    }
})
const Catagories = () =>{
    const classes = useStyles();
    const { isAuthenticated } = useAuth0();

    return(
        <>
        {isAuthenticated && 
            <Link className = {classes.link} to = '/create' style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant = "contained" className = {classes.create}> Create Blog</Button>
            </Link>
        }
        
        <Table className = {classes.table}>
            <TableHead>
                <TableRow>
                    
                    <TableCell>
                        <Link to = {`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            All Catagories
                        </Link>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    CatagoriesData.map(category =>(
                        <TableRow>
                            <TableCell>
                                <Link to = {`/?category=${category}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {category}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </>
    )
}

export default Catagories;