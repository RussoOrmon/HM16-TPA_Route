import { logRoles } from "@testing-library/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Product = ({ title, name }) => {
  const params = useParams();

  return (
    <Container>
      <ProductBlock>
        <p>{title}</p>
        <p>
          {name}
          {params.id}
        </p>
      </ProductBlock>
      <Link to='/products' >
      <GoButton> Go Back</GoButton>
      </Link>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  background-color: #b0bdc0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ProductBlock = styled.div`
  background-color: white;
  height: 120px;
  padding: 15px;
  text-align: start;
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
