import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  padding: 0px 10px;
`;
// const TopTexts = styled.h1``
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  ${mobile({ width: "200px", height: "200px", objectFit: "cover" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProducrAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
  ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://firebasestorage.googleapis.com/v0/b/ecomerce-b88f0.appspot.com/o/popularProducts%2Fpexels-karolina-grabowska-5713778.jpg?alt=media&token=c09e8881-3c65-42eb-b72a-3a7ed99b068d" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Sneaker Cleaning
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 52366266
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b> 38.8
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProducrAmount>2</ProducrAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 40</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://firebasestorage.googleapis.com/v0/b/ecomerce-b88f0.appspot.com/o/popularProducts%2Fpexels-kimberly-brianna-8823444.jpg?alt=media&token=ea237c62-b755-4524-a485-a3a367d3ed04" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Chanel Coco EDP
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 25216535
                  </ProductId>
                  <ProductColor color="#daa520" />
                  <ProductSize>
                    <b>Size:</b> 100
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProducrAmount>1</ProducrAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 185.25</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 165.25</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shopping</SummaryItemText>
              <SummaryItemPrice>$ 6.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -6.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 165.25</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
