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
    url("https://firebasestorage.googleapis.com/v0/b/ecomerce-b88f0.appspot.com/o/login.webp?alt=media&token=eda5cb59-531b-445b-a4b5-74a0c1368002")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  align-items: center;
  text-align: center;
`;
const Form = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 93%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #f6c5cf;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 5px;
`;
const Link = styled.a`
  font-size: 12px;
  font-weight: 250;
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SING IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>CREATE</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

// import React from "react";
// import { styled } from "styled-components";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://firebasestorage.googleapis.com/v0/b/ecomerce-b88f0.appspot.com/o/login.webp?alt=media&token=eda5cb59-531b-445b-a4b5-74a0c1368002")
//       center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const Wrapper = styled.div`
//   width: 40%;
//   padding: 20px;
//   background-color: white;
// `;
// const Title = styled.div`
//   font-size: 24px;
//   font-weight: 300;
// `;
// const Form = styled.h1`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;
// `;
// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0px 0px;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: #f6c5cf;
//   color: white;
//   cursor: pointer;
// `;
// const Link = styled.a``;
// const Login = () => {
//   return (
//     <Container>
//   <Wrapper>
//     <Title>SIGN IN</Title>
//     <Form>
//       <Input placeholder="username" />
//       <Input placeholder="password" />

//       <Button>LOGIN</Button>
//       <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
//       <Link>CREATE A NEW ACCOUNT</Link>
//     </Form>
//   </Wrapper>
//     </Container>
//   );
// };

// export default Login;
