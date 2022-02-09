import React, { useEffect, useContext } from 'react';
import {DashboardContainer,
        DashboardWrapper,
        DashboardH1,
        DashboardHero,
        DashboardIllustration,
        DashboardBtn,
        DashboardContent,
        DashboardP,
        DbIllustrationMobile,
        ArrowIcon
        } from "./DashboardElements";
import AboutSection from "../../components/About";
import { withRouter } from "react-router-dom";
import CT from "../../images/ct2.png";
import { RoleContext } from "../../Helper/Context";

const Dashboard = () => {

    const {isAdmin, setIsAdmin} = useContext(RoleContext);

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const role = userInfo.role;
        if (role == "admin") {
            setIsAdmin(true);
        }
    }, []);

    return (
        <DashboardContainer>
            <DashboardWrapper>

                <DashboardHero>
                    <DashboardIllustration src={CT} alt="Contact Tracing Illustration" />
                    <DashboardContent>
                        <DashboardH1>Welcome Back, Buddy!</DashboardH1>
                        <DbIllustrationMobile src={CT} alt="Contact Tracing Illustration" />
                        <DashboardP>Before entering the shop, click here to submit a new form</DashboardP>
                        <ArrowIcon />
                        <DashboardBtn to='/new'>New Form</DashboardBtn>
                    </DashboardContent>
                </DashboardHero>
            </DashboardWrapper>

            <AboutSection />

        </DashboardContainer>
    )
}

export default withRouter(Dashboard);
