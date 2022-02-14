import React from "react";
import { withRouter } from "react-router-dom";
import {HeaderContainer,
        HeaderWrapper,
        HeaderLogo,
        MobileMenu
        } from "./HeaderElements";
import { LogOutBtn } from "./LogoutButton";
import Logo from "../../images/Logo.jpg";
import { VscMenu } from "react-icons/vsc";


const Header = ({ setIsSidebarOpen, location }) => {

    //Functions
    const toggle = () => setIsSidebarOpen(true);

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }

    

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <MobileMenu onClick={toggle} ><VscMenu /></MobileMenu>
                <HeaderLogo src={Logo} alt="Logo" />
                {location.pathname !== '/' && <LogOutBtn onClick={handleLogOut} >Log out</LogOutBtn>}
            </HeaderWrapper>
        </HeaderContainer>
    )

}

export default withRouter(Header);