import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Products = () => {
  return (
    <Container>
      <ul>
        <ProductContainer>
            <p> Product Name 1</p>
          <Link to='/products/1/details'  >
            <DetailsButton> Details </DetailsButton>
          </Link>
        </ProductContainer>
        <ProductContainer>
            <p> Product Name 2</p>
          <Link to='/products/2/details' >
            <DetailsButton> Details </DetailsButton>
          </Link>
        </ProductContainer>
      </ul>
      <Link to='/' >
      <GoButton> Go Back</GoButton>
      </Link>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  background-color: #b0bdc0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const ProductContainer = styled.li`
  list-style: none;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;

`;
const DetailsButton = styled.button`
  background-color: #39ac92;
  padding: 5px 10px;
  color: white;
  border: 1px solid #59caaf;
  border-radius: 20px;
`;

const GoButton = styled.button`
  background-color: #39ac92;
  width: 90px;
  padding: 7px 10px;
  color: white;
  border: 1px solid #59caaf;
  border-radius: 20px;
  margin: 10px;
  display: flex;
`;
