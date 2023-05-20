import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #daa520;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $40</Container>;
};

export default Announcement;
