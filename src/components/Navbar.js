import React from "react";
import {Menu, Container} from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Menu inverted>
            <Container>
             <Link to='/'>
                <Menu.item name="star wars API" />
             </Link>  
             <Link to='/people'>
                <Menu.item name="People" />
             </Link >
             <Link to='/planets'> 
                <Menu.item name="Planets" />
             </Link>
            </Container>

        </Menu>
    )
}