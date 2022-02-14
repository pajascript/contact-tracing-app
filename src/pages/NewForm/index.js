import React, { useState } from "react";
import {CTFormContainer,
        CTFormWrapper,
        CTForm,
        HeadingContainer,
        CTFormHeading,
        CTFormSubheading,
        SubmitButton,
        LoadingContainer
        } from "./CTFormElements";
import { Modal } from "../../components/SuccessModal";
import { InputField } from "../../components/InputField";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

const CTFormPage = () => {

    //Variables
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const customerInfo = {
            fullname: userInfo.fullname, 
            address: userInfo.address, 
            phonenumber: userInfo.phonenumber, 
            email: userInfo.email, 
            age: userInfo.age, 
            gender: userInfo.gender, 
            temperature: "", 
            dateOfVisit: new Date(Date.now()), 
            timeOfVisit: ""
        };

    //States
    const [visitingCustomer, setVisitingCustomer] = useState(customerInfo);
    const [visitDate, setVisitDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    //Functions
    const handleChange = (e) => {
        setVisitingCustomer({...visitingCustomer, [e.target.name]: [e.target.value].toString()});
    };

    const handleVisitDateChange = (date) => {
        const actualDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        const finalDate = actualDate.toString();
        setVisitDate(date);
        setVisitingCustomer({...visitingCustomer, dateOfVisit: finalDate});
    };

    const handleVisitTimeChange = (date) => {
        const actualTime = `${date.getHours()}:${date.getMinutes()}`;
        const finalTime = actualTime.toString();
        setVisitDate(date);
        setVisitingCustomer({...visitingCustomer, timeOfVisit: finalTime});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post('https://kalyect.herokuapp.com/newVisit', visitingCustomer)
            .then(res => {
                console.log("Success!", res);
                setIsLoading(false);
                setShowModal(true);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    };


    return (
        <>
        <CTFormContainer>
            <CTFormWrapper>

                <HeadingContainer>
                    <CTFormHeading>Kalye Onse</CTFormHeading>
                    <CTFormSubheading>Contact Tracing</CTFormSubheading>
                </HeadingContainer>

                <CTForm onSubmit={handleSubmit} >
                    <InputField value={visitingCustomer.temperature} onChange={handleChange} name="temperature" type='text' placeholder='Temperature' required />
                    
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        
                        <KeyboardDatePicker 
                            variant="outlined" 
                            format="MM/dd/yyyy" 
                            style={{marginTop: 15}} 
                            value={visitDate} 
                            onChange={handleVisitDateChange} 
                            label="Date of Visit" 
                            KeyboardButtonProps={{"aria-label": "change date"}} 
                            required 
                        />

                        <KeyboardTimePicker 
                            variant="outlined"
                            style={{marginTop: 15}} 
                            value={visitDate}
                            onChange={handleVisitTimeChange}
                            label="Time of Visit"
                            KeyboardButtonProps={{"aria-label": "change date"}} 
                            required 
                        />

                    </MuiPickersUtilsProvider>

                    <SubmitButton name="submit" type="submit" value="Submit" />
                </CTForm>
            </CTFormWrapper>
            {isLoading &&
                <LoadingContainer>
                    <CircularProgress color="secondary" />
                </LoadingContainer> 
            }
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </CTFormContainer>
        </>
    )
}

export default CTFormPage;