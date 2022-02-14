import styled from "styled-components";

export const LogOutBtn = styled.button`
    text-decoration: none;
    border: 1px solid #83002f;
    border-radius: 5px;
    cursor: pointer;
    transition: all 200ms ease;
    padding: 0.2rem 0.6rem;
    font-weight: 400;
    position: absolute;
    top: 21px;
    right: 10px;
    color: #fff;
    background: #83002f;

    &:hover {
        color: #fff;
        background: #64022c;
    }
`;