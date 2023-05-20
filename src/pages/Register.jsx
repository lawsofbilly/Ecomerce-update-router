import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://firebasestorage.googleapis.com/v0/b/ecomerce-b88f0.appspot.com/o/regisuse.jpeg?alt=media&token=9f3035be-1cb3-4eff-ae93-22653d1ee314")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  font-weight: 250;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #f6c5cf;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
