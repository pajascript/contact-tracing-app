import styled from "styled-components";

export const CTFormContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    background: #efeff9;
    padding-bottom: 60px;
`;

export const CTFormWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    height: auto;
    margin: 110px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    border: 1px solid #aaa;
    padding: 60px 10px;

    @media screen and (max-width: 402px) {
        width: 320px;
    }

    @media screen and (max-width: 327px) {
        width: 275px;
    }

    @media screen and (max-width: 301px) {
        border: none;
    }
`;

export const HeadingContainer = styled.div`
    font-weight: 900;
    text-align: center;
    line-height: 3rem;
`;

export const CTFormHeading = styled.h1`
    font-size: 3.2rem;
    color: #83002f;
    font-family: 'Rancho', sans-serif;
    letter-spacing: 0.1rem;
`;

export const CTFormSubheading = styled.h2`
    color: #83002f;
    font-size: 2.5rem;
    font-family: 'Rancho', sans-serif;
    letter-spacing: 0.1rem;
`;

export const SubmitButton = styled.input`
    width: 100%;
    height: 35px;
    border: none;
    font-size: 1rem;
    border-radius: 5px;
    box-shadow: 0 1px 1px 1px #410120;
    background: #83002f;
    color: #fff;
    cursor: pointer;
    opacity: ${({isLoading}) => isLoading ? '0.8' : '1'};
    pointer-events: ${({isLoading}) => isLoading ? 'none' : 'auto'};
`;

export const CTForm = styled.form`
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

export const CTFormLabel = styled.label`
    color: #2d2d2d;
    text-align: left;
    align-self: flex-start;
    margin-top: 5px;
    color: #353535;
`;

export const LoadingContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;