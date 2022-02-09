import React, { useState, useEffect } from "react";
import {VisitsContainer,
        VisitsWrapper,
        Heading,
        Table,
        THead,
        TR,
        TH,
        Tbody,
        TD,
        } from "./VisitsListElements";
import axios from "axios";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { CircularProgress } from "@material-ui/core";

const VisitsList = () => {

    //States
    const [records, setRecords] = useState([]);
    const [filterDate, setFilterDate] = useState("");
    const [visitDate, setVisitDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);

    //Use Effect
    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:5000/visits')
            .then(res => setRecords(res.data))
            .then(setIsLoading(false))
            .catch(err => console.log(err))
    }, []);

    const handleVisitDateChange = (date) => {
        const actualDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        const finalDate = actualDate.toString();
        setVisitDate(date)
        setFilterDate(finalDate);
    };

    return (
        <VisitsContainer>
            <VisitsWrapper>
                <Heading>List of Shop Visits</Heading>
                <p>Filter by date...</p>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <KeyboardDatePicker 
                            variant="outlined" 
                            format="MM/dd/yyyy" 
                            style={{marginTop: 15}} 
                            value={visitDate} 
                            onChange={handleVisitDateChange} 
                            label="Filter by date..." 
                            KeyboardButtonProps={{"aria-label": "change date"}} 
                            required 
                        />
                </MuiPickersUtilsProvider>

                <Table>
                    <THead>
                        <TR>
                            <TH>Name</TH>
                            <TH>Address</TH>
                            <TH>Email</TH>
                            <TH>Phone No.</TH>
                            <TH>Temperature</TH>
                            <TH>Date of Visit</TH>
                            <TH>Time of Visit</TH>
                        </TR>
                    </THead>
                    <Tbody>
                    {isLoading ? <CircularProgress color="secondary" /> :

                        records.filter((val) => {

                            if (filterDate == "") {
                                return val;
                             } else if (val.dateOfVisit.includes(filterDate)) {
                                return val;
                             }

                            }).map((val, key) => {

                                return (
                                    <TR key={key}>
                                        <TD>{val.fullname}</TD>
                                        <TD>{val.address}</TD>
                                        <TD>{val.email}</TD>
                                        <TD>{val.phonenumber}</TD>
                                        <TD>{val.temperature}</TD>
                                        <TD>{val.dateOfVisit}</TD>
                                        <TD>{val.timeOfVisit}</TD>
                                    </TR>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </VisitsWrapper>
        </VisitsContainer>
    )
};

export default VisitsList;