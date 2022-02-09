import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #adacac;
    background: #efeff9;
    z-index: 1000;
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const MobileMenu = styled.div`
    color: #000;
    font-size: 1.7rem;
    position: absolute;
    top: 17px;
    left: 10px;
    cursor: pointer;
`;

export const HeaderLogo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`;