import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Name</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Date of Birth"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;