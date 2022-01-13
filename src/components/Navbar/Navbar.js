import React from "react";
import {Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink } from "./Narbar.elements";
import { FaPizzaSlice } from "react-icons/fa";

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <FaPizzaSlice/>
                    <p>Antonia</p>
                    <p>Restaurant</p>
                </LogoContainer>
                <Menu>
                    <MenuItem>
                        <MenuItemLink>HOME</MenuItemLink>
                    </MenuItem>
                </Menu>
                <Menu>
                    <MenuItem>
                        <MenuItemLink>ABOUT ME</MenuItemLink>
                    </MenuItem>
                </Menu>
                <Menu>
                    <MenuItem>
                        <MenuItemLink>PORTFOLIO</MenuItemLink>
                    </MenuItem>
                </Menu>
                <Menu>
                    <MenuItem>
                        <MenuItemLink>CONTACT ME</MenuItemLink>
                    </MenuItem>
                </Menu>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
