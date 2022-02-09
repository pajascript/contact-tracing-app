import styled from "styled-components";

export const AboutWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    padding: 25px 0;
`;

export const AboutContent = styled.div`
    max-width: 45%;
    text-align: right;

    @media screen and (max-width: 721px) {
        text-align: left;
        max-width: 90%;
        margin: 0 auto;
    }
`;

export const AboutH1 = styled.h1`
    color: #0d0d0d;
    font-weight: 600;
    font-size: 2rem;

    @media screen and (max-width: 861px) {
        font-size: 1.6rem;
    }

    @media screen and (max-width: 721px) {
        margin-top: 30px;
    }
`;

export const AboutImg = styled.img`
    max-width: 45%;
    display: block;

    @media screen and (max-width: 721px) {
        display: none;
    }
`;

export const AboutP = styled.p`
    color: #353535;
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-top: 10px;

    @media screen and (max-width: 861px) {
        font-size: 1rem;
    }
`;

export const AboutImgMobile = styled.img`
    width: 75%;
    display: none;

    @media screen and (max-width: 721px) {
        display: block;
    }
`;