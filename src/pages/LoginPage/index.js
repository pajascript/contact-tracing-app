import React, { useState, useEffect } from "react";
import {LoginContainer,
        LoginWrapper,
        HeadingContainer,
        LoginHeading,
        LoginSubheading,
        LoginForm,
        SubmitButton,
        ToggleRegister,
        ToggleLogin, 
        Or,
        ErrorMessage
        } from "./LoginPageElements";
import { InputField } from "../../components/InputField";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

const LoginPage = ({ isAuth, setIsAuth }) => {  
    //variables
    const customer = {fullname: "", address: "", phonenumber: "", email: "", age: "", gender: "", password: "", confirmPassword: ""};
    const history = useHistory();

    //States
    const [isRegister, setIsRegister] = useState(false)
    const [customerInfo, setCustomerInfo] = useState(customer);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //Functions
    const handleToggleRegister = (e) => {
        e.preventDefault();
        setIsRegister(true);
    }

    const handleToggleLogin = (e) => {
        e.preventDefault();
        setIsRegister(false);
    };

    const handleChange = (e) => {
        setCustomerInfo({...customerInfo, [e.target.name]: e.target.value});
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post('http://localhost:5000/register', customerInfo)
            .then(res => {
                setIsAuth(true);
                setIsLoading(false);
                localStorage.setItem('userInfo', JSON.stringify(res.data.result));
                localStorage.setItem('token', res.data.token);
                history.push('/home');
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.response.data.message);

            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post('http://localhost:5000/login', {email: customerInfo.email, password: customerInfo.password})
            .then(res => {
                setIsAuth(true);
                setIsLoading(false);
                localStorage.setItem('userInfo', JSON.stringify(res.data.result));
                localStorage.setItem('token', res.data.token);
                history.push('/home');
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.response.data.message);
            });
    }

    //Use Effect
    useEffect(() => {

        const token = localStorage.getItem('token');
        if (token) {
                setIsLoggedIn(true);
                setIsAuth(true);
        } else {
            setIsLoggedIn(false);
            setIsAuth(false);
        }

    }, [setIsAuth]);


    //COMPONENT
    if (isLoggedIn) {
            return (
                <Redirect to="/home" />
            )
    }

    return (
        <LoginContainer>
            <LoginWrapper>
                <HeadingContainer>
                    <LoginHeading>Kalye Onse</LoginHeading>
                    <LoginSubheading>Contact Tracing</LoginSubheading>
                </HeadingContainer>

                <LoginForm>
                    {isRegister && (
                        <>
                            <InputField value={customerInfo.fullname} onChange={handleChange} name="fullname" type='text' placeholder='Full Name' required />
                            <InputField value={customerInfo.address} onChange={handleChange} name="address" type='text' placeholder='Address' required />
                            <InputField value={customerInfo.phonenumber} onChange={handleChange} name="phonenumber" type='text' placeholder='Phone Number' required />
                        </>
                    
                    )}  

                    <InputField value={customerInfo.email} onChange={handleChange} name="email" type='text' placeholder='E-mail' required />
                    
                    {isRegister && (
                        <>
                            <InputField value={customerInfo.age} onChange={handleChange} name="age" type='text' placeholder='Age' required />
                            <InputField value={customerInfo.gender} onChange={handleChange} name="gender" type='text' placeholder='Gender' required />
                        </>
                    )}
                            
                    <InputField value={customerInfo.password} onChange={handleChange} name="password" type='password' placeholder='Password' required />
                            
                    {isRegister && (
                        <>
                            <InputField value={customerInfo.confirmPassword} onChange={handleChange} name="confirmPassword" type='password' placeholder='Confirm Password' required />
                        </>
                    )}   

                    {error && (
                        <ErrorMessage>{ error }</ErrorMessage>
                    )}     

                    {isRegister ? (
                        <SubmitButton onClick={handleRegister} name="register" type="submit" value="Register" isLoading={isLoading} />
                    ) : (
                        <SubmitButton onClick={handleLogin} name="login" type="submit" value="Login" isLoading={isLoading} />
                    )}
                      
                    <Or>OR</Or>

                    {isRegister ? <ToggleLogin onClick={handleToggleLogin} >Already have an account? Login</ToggleLogin> : <ToggleRegister onClick={handleToggleRegister} >Register</ToggleRegister>}

                </LoginForm>


            </LoginWrapper>
        </LoginContainer>
    )
}

export default LoginPage;