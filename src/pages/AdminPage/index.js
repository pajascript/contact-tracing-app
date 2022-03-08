
import React, { useState, useEffect } from 'react';
import {AdminPageContainer,
        AdminPageWrapper,
        AdminPageHeading,
        AdminPageUl,
        AdminPageLi
        } from "./AdminPageElements";
import axios from "axios";


const AdminPage = () => {

  const [admins, setAdmins] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:5000/adminList')
        .then(res => {
          console.log(res.data)
          setAdmins(res.data)
      })
        .catch(err => console.log(err))

  }, [])

  return (
    <AdminPageContainer>
        <AdminPageWrapper>
          <AdminPageHeading>Administrators</AdminPageHeading>
            <AdminPageUl>
              {admins.filter((val) => {

                if (val.role === 'admin') {
                  return val;
                } else {
                  return null;
                }

              }).map((val, key) => {
                return <AdminPageLi>{val.fullname}</AdminPageLi>
              })}
            </AdminPageUl>
        </AdminPageWrapper>
    </AdminPageContainer>
  )
}

export default AdminPage;