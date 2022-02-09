import React from "react";
import {HeaderContainer,
        HeaderWrapper,
        HeaderLogo,
        MobileMenu
        } from "./HeaderElements";
import Logo from "../../images/Logo.jpg";
import { VscMenu } from "react-icons/vsc";

const Header = ({ setIsSidebarOpen }) => {

    const toggle = () => setIsSidebarOpen(true);

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <MobileMenu onClick={toggle} ><VscMenu /></MobileMenu>
                <HeaderLogo src={Logo} alt="Logo" />
            </HeaderWrapper>
        </HeaderContainer>
    )

}

export default Header;