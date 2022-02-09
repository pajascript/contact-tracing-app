import React from "react";
import {AboutWrapper,
        AboutContent,
        AboutH1,
        AboutImg,
        AboutP,
        AboutImgMobile
        } from "./AboutElements";
import tempCheck from "../../images/tempCheck.jpeg";


const AboutSection = () => {
    return (
        <AboutWrapper>
            <AboutImg src={tempCheck} alt="Temperature Check" />
            <AboutContent>
                <AboutH1>How this app works?</AboutH1>
                <AboutImgMobile src={tempCheck} alt="Temperature Check" />
                <AboutP>After filling out the form, records are then saved to our database for contact tracing. If you've been in contact with someone with COVID-19 from this facility, you may receive a notification from our staff at this point (SMS / Phone Call / Notifications Panel).</AboutP>
            </AboutContent>
        </AboutWrapper>
    )
}

export default AboutSection;