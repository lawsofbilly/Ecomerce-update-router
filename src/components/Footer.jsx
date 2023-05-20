import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ textAlign: "center" })}
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.h1`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "#fff8f8",
  })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
  ${mobile({
    backgroundColor: "#fff8f8",
    display: "flex",
    flexDirection: "column",
    jusjustifyContent: "center",
    alignItems: "center",
  })}
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BILLY</Logo>
        <Desc>
          Time is the coin of your life. It is the only coin you have, and only
          you can determine how it will be spent. Be careful lest you let other
          people spend it for you.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon></FacebookIcon>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon></InstagramIcon>
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTubeIcon></YouTubeIcon>
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title></Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          DUR Station Charansanitwong 74/1 Bang Phlat Bangkok 10700
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +66648102625
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} />
          adithep38672@gmail.com
        </ContactItem>

        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
