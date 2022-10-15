import { useState } from "react";
import styled from "styled-components";
import LogoImg from "../assets/Logo.png";

export function SignIn() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Header></Header>
      <Container>
        <Logo>
          <img src={LogoImg} alt="Logo" />
        </Logo>
        <Form>
          <input placeholder="E-mail" />
          <input placeholder="Senha" />
          <Button>Entrar</Button>
        </Form>
      </Container>
    </>
  );
}
const Header = styled.header``;

const Container = styled.main`
  font-family: "Lexend Deca";
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block: auto;
`;

const Logo = styled.section`
  margin-bottom: 35px;
  img {
    width: 250px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;

  input + input {
    margin-top: 15px;
  }

  input {
    width: 85%;
    border: none;
    border-radius: 5px;
    height: 30px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding-left: 8px;
  }
`;

const Button = styled.button`
  font-family: "Lexend Deca";
  color: #ffffff;
  background-color: #5d9040;
  border: none;
  text-decoration: none;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  margin-top: 15px;
`;

export { Header, Container, Form, Button, Logo };
