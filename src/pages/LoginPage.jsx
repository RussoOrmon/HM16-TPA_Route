import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useInput } from "../hook/useInput";

const LoginPage = ({toggleHandler}) => {
    const navigate = useNavigate()

  const email = useInput(); 
  const password = useInput();

  const loginHandler=(e)=>{
    e.preventDefault()
    toggleHandler();
navigate('/products')

  }

  return (
    <FormContainer  onSubmit={loginHandler} >
      <h2>Sign in</h2>

      <InputStyled
        value={email.value}
        onChange={email.onChangeHandler}
        type="email"
        placeholder="Enter email"
        required
      />
      <InputStyled
        value={password.value}
        onChange={password.onChangeHandler}
        type="password"
        placeholder="Enter password"
        required
      />
      <ButtonStyled> Login </ButtonStyled>
    </FormContainer>
  );
};

export default LoginPage;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  gap: 20px;
`;
const InputStyled = styled.input`
  border-radius: 30px;
  padding: 10px 20px;
  outline: none;
  border: 1px solid gray;
`;

const ButtonStyled = styled.button`
  border-radius: 30px;
  padding: 5px;
  outline: none;
  border: 1px solid gray;
  background-color: #39ac92;
  font-size: 20px;
  color: white;
`;
