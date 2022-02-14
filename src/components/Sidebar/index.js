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
            <SidebarItems activeStyle={{background: '#ddd'}} onClick={toggle} to='/home' >Home</SidebarItems>
            <SidebarItems activeStyle={{background: '#ddd'}} onClick={toggle} to='/new' >New Form</SidebarItems>
            {isAdmin && <SidebarItems activeStyle={{background: '#ddd'}} onClick={toggle} to='/visits' >Records</SidebarItems> }
            {isAdmin && <SidebarItems activeStyle={{background: '#ddd'}} onClick={toggle} to='/admin' >Administrators</SidebarItems> }
        </SidebarContainer>
    )
};

export default Sidebar;