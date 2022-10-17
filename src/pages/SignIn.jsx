import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/Logo.png";
import { postSignIn } from "../services/shortly";

export function SignIn() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const navigate = useNavigate();

  const sendForm = async (e) => {
    e.preventDefault();

    try {
      const data = await postSignIn({
        email: login.email,
        password: login.password,
      });
      const JSONauth = JSON.stringify({
        token: data.data.token,
      });
      localStorage.setItem("shortly", JSONauth);
      navigate("/");
    } catch (error) {
      setError({
        isError: true,
        message: error.response.data.error,
      });
    }
  };

  function handleInput(e) {
    const value = e.target.value;
    setLogin({ ...login, [e.target.name]: value });
  }

  return (
    <>
      <Header></Header>
      <Container>
        <Logo>
          <img src={LogoImg} alt="Logo" />
        </Logo>
        <Form onSubmit={sendForm}>
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={login.email}
            onChange={handleInput}
            placeholder="E-mail"
            required
          />
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={login.password}
            onChange={handleInput}
            placeholder="Senha"
            required
          />
          {error.isError ? <h5>{error.message}</h5> : <></>}
          <Button type="submit">Entrar</Button>
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

  h5 {
    color: rgb(214, 15, 15);
    text-decoration: underline;
    font-weight: bold;
    margin-top: 22px;
    margin-bottom: 12px;
    font-size: 15px;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Header, Container, Form, Button, Logo };
