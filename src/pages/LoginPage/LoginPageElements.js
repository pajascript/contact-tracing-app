import styled from "styled-components";

export const LoginContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    background: #efeff9;
    padding-bottom: 60px;
`;

export const LoginWrapper = styled.div`
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
`;

export const HeadingContainer = styled.div`
    font-weight: 900;
    text-align: center;
    line-height: 3rem;
`;

export const LoginForm = styled.form`
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

export const LoginHeading = styled.h1`
    font-size: 3.2rem;
    color: #83002f;
    font-family: 'Rancho', sans-serif;
    letter-spacing: 0.1rem;
`;

export const LoginSubheading = styled.h2`
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

export const ToggleRegister = styled.button`
    width: 100%;
    height: 35px;
    border: #83002f;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #83002f;
    background: transparent;
    color: #83002f;
    cursor: pointer;

    &:hover {
        background: #83002f;
        color: #fff;
    }
`;

export const Or = styled.p`
    font-size: 1rem;
    color: #2f2f2f;
`;

export const ToggleLogin = styled.p`
    cursor: pointer;
    text-decoration: underline;
    color: #38002f;

    &:hover {
        transform: scale3d(1.1);
    }
`;

export const ErrorMessage = styled.p`
    color: #d10833;
    text-align: center;
`;