import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.section`
    width: 300px;
    position: fixed;
    top: 0;
    left: ${({isOpen}) => (isOpen ? "0" : "-100%")};
    bottom: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 50px 15px;
    transition: all 400ms ease-in-out;
    background: #efeff5;
    box-shadow: 0 2px 10px 3px #777;
`;

export const CloseBtn = styled.div`
    width: 50px;
    height: 50px;
    font-size: 2rem;
    color: #83002f;
    align-self: flex-end;
    cursor: pointer;
    margin-top: -30px;
    margin-right: -15px
`;

export const SidebarItems = styled(Link)`
    cursor: pointer;
    color: #83002f;
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
    transition: all 300ms ease;
    text-decoration: none;

    &:hover {
        background: salmon;
    }
`;