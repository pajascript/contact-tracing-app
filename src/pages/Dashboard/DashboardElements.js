import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

export const DashboardContainer = styled.section`
    width: 100%;
    min-height: 75vh;
    margin-top: 70px;
`;  

export const DashboardWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 75vh;
    display: flex;
    padding: 10px;
`;

export const DashboardH1 = styled.h1`
    color: #0d0d0d;
    font-weight: 600;
    font-size: 3rem;

    @media screen and (max-width: 861px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 721px) {
        text-align: center;
        margin-top: 10px;
    }
`;

export const DashboardHero = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 721px) {
        justify-content: center;
    }
`;

export const DashboardIllustration = styled.img`
    max-width: 45%;
    display: block;

    @media screen and (max-width: 721px) {
        display: none;
    }
`;

export const DashboardBtn = styled(Link)`
    padding: 0.8rem 1rem;
    min-height: 35px;
    font-size: 1rem;
    border-radius: 5px;
    box-shadow: 0 1px 1px 1px #410120;
    background: #83002f;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    max-width: 600px;
    min-width: 250px;
    margin-top: 5px;

    @media screen and (max-width: 861px) {
        padding: 0.5rem 1rem;
    }
`;

export const DashboardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 45%;
    gap: 15px;

    @media screen and (max-width: 721px) {
        align-items: center;
        max-width: 50%;
    }
`;

export const DashboardP = styled.p`
    color: #353535;
    text-transform: uppercase;
    font-size: 1.2rem;

    @media screen and (max-width: 861px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 721px) {
        text-align: center;
    }
`;

export const DbIllustrationMobile = styled.img`
    width: 100%;
    display: none;

    @media screen and (max-width: 721px) {
        display: block;
    }
`;

export const ArrowIcon = styled(HiOutlineArrowNarrowDown)`
    color: #0d0d0d;
    font-size: 2rem;

    @media screen and (min-width: 721px) {
        margin-left: 15px;
    }
`;