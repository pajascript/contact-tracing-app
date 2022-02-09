import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import { TiThumbsOk } from "react-icons/ti";
import { HiOutlineHome } from "react-icons/hi";
import { useSpring, animated } from "react-spring";

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
`;

const ModalWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    height: 250px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fafafa;
    color: #0d0d0d;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 25px;
`;

const ModalHeading = styled.p`
    font-size: 1.3rem;
    text-align: center;
`;

const LinkBtn = styled.button`
    border: none;
    font-size: 1.1rem;
    color: #83002f;
    cursor: pointer;
    transition: all 400ms ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #f0f0f0;
    padding: 0.3rem;

    &:hover {
        font-style: italic;
    }
`;

const OkIcon = styled(TiThumbsOk)`
    font-size: 4rem;
    color: #83002f;
`;


export const Modal = ({ showModal, setShowModal }) => {

    const history = useHistory();

    const animation = useSpring({
        config: {
            duration: 350
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-100%)`
    });

    return (
        <>
        {showModal ? (
            <Background>
                <animated.div style={animation}>
                    <ModalWrapper>
                        <OkIcon />
                        <ModalHeading>Your record has been logged succesfully!</ModalHeading>
                        <LinkBtn 
                            onClick={() => {
                                history.push('/home')
                                setShowModal(false);
                            }} 
                        >
                            <HiOutlineHome />Back to home
                        </LinkBtn>
                    </ModalWrapper>
                </animated.div>
            </Background>
        ) : null }
        </>
    )
};