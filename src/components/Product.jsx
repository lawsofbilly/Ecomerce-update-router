import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 105%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:all 0.5s ease;
  cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin: 30px;
    min-height: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: white;
    position: relative;

    &:hover ${Info}{
      opacity: 1;
    }
`

const Image = styled.img`
  height: 105%;
  z-index: 2;
  object-fit: cover;
  margin-top: 17px;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease& hover;

  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
`

const Product = ({item}) => {
  return (
    <Container>
      
      <Image src={item.img} /> 
      <Info>
        <Icon>
            <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
            <SearchIcon />
        </Icon>
        <Icon>
            <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
