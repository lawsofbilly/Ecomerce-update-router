import React from "react";

import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}/* @media only screen and (max-width: 380px) {
    display: none;
  } */
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  //width: 33.3%;
  flex: 1;
  display: flex;
  align-items: center;
`;
const Langguage = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
//---------------------------------------------------------------------//
const Center = styled.div`
  /* text-decoration: none; */
  //width: 33.3%;
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
//---------------------------------------------------------------------//
const Right = styled.div`
  //width: 33.3%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: "2" })}
`;
const MenuItem = styled.div`
  /* text-decoration: underline !important; */
  text-decoration: none !important;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Langguage>EN</Langguage>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link
            to={`/`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Logo>BILLY</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to={`/register`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link
            to={`/login`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          {/* <MenuItem>
            <Link to={`/register`} className="link">
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/login`}>SIGN IN</Link>
          </MenuItem> */}
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link
                to={`/cart`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
