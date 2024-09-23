import React from "react";
import {Menu, Container} from 'semantic-ui-react';

export default function Navbar() {
    return (
        <Menu inverted>
            <Container>
             <Menu.item name="star wars API" />
             <Menu.item name="People" />
             <Menu.item name="Planets" />
            </Container>

        </Menu>
    )
}