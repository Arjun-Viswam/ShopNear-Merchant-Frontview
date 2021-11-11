import React from "react";
import style from "./Body.module.css"
import {
    CCardBody,
    CCard,
    CCardTitle,
    CCardText,
    CCardHeader,
    CButton
  } from "@coreui/react";

function Body() {
  return (
    <div className={style.merchant_body}>
      <div className={`${style.container} container`}>
        <div className={style.card}>
      <CCard>
        <CCardHeader>Arjun Viswam</CCardHeader>
        <CCardBody>
          <CCardTitle>Palakkad</CCardTitle>
          <CCardText>
            1.samsung A50
          </CCardText>
          <CCardText>
            2.Boat headset
          </CCardText>
          <CButton style={{backgroundColor:"green"}}>Paid</CButton>
        </CCardBody>
      </CCard>
      </div>
      <div className={style.card}>
      <CCard>
        <CCardHeader>Mishab msb</CCardHeader>
        <CCardBody>
          <CCardTitle>kozhikode</CCardTitle>
          <CCardText>
            1.lenovo laptop
          </CCardText>
          <CCardText>
            2.lenovo battery
          </CCardText>
          <CButton style={{backgroundColor:"grey"}}>Not paid</CButton>
        </CCardBody>
      </CCard>
      </div>
      <div className={style.card}>
      <CCard>
        <CCardHeader>ilias ibrahim</CCardHeader>
        <CCardBody>
          <CCardTitle>trissur</CCardTitle>
          <CCardText>
            1.kuzhimandhi
          </CCardText>
          <CCardText>
            2.7up
          </CCardText>
          <CButton style={{backgroundColor:"green"}}>Paid</CButton>
        </CCardBody>
      </CCard>
      </div>
      </div>
    </div>
  );
}

export default Body;
