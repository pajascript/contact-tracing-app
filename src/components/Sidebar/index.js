import React, { useContext } from "react";
import {SidebarContainer,
        CloseBtn,
        SidebarItems
        } from "./SidebarElements";
import { RiCloseCircleFill } from "react-icons/ri";
import { RoleContext } from "../../Helper/Context";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {

    const {isAdmin} = useContext(RoleContext);

    const toggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <SidebarContainer isOpen={isSidebarOpen} >
            <CloseBtn onClick={toggle} ><RiCloseCircleFill /></CloseBtn>
            <SidebarItems onClick={toggle} to='/home' >Home</SidebarItems>
            <SidebarItems onClick={toggle} to='/new' >New Form</SidebarItems>
            {isAdmin && <SidebarItems onClick={toggle} to='/visits' >Records</SidebarItems> }
        </SidebarContainer>
    )
};

export default Sidebar;