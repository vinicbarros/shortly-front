import { Button, Container, Form, Header, Logo } from "./SignIn";
import LogoImg from "../assets/Logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../services/shortly";
import { TailSpin } from "react-loader-spinner";

export function SignUp() {
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const sendForm = async (e) => {
    e.preventDefault();
    console.log(userSignUp);
    setLoading(!loading);
    setError({
      isError: false,
      message: "",
    });
    const equal = userSignUp.password === userSignUp.confirm;
    if (!equal) {
      setError({
        isError: true,
        message: "Password do not match",
      });
      return;
    }

    try {
      setLoading(!loading);
      await postSignUp({
        name: userSignUp.name,
        email: userSignUp.email,
        password: userSignUp.password,
        confirmPassword: userSignUp.confirm,
      });
      navigate("/signin");
    } catch (error) {
      setLoading(!loading);
      setError({
        isError: true,
        message: "An error ocurred, please try again.",
      });
    }
  };

  function handleInput(e) {
    let value = e.target.value;
    setUserSignUp({ ...userSignUp, [e.target.name]: value });
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
            type="text"
            name="name"
            value={userSignUp.name}
            onChange={handleInput}
            placeholder="Nome"
            required
          />
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={userSignUp.email}
            onChange={handleInput}
            placeholder="E-mail"
            required
          />
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={userSignUp.password}
            onChange={handleInput}
            placeholder="Senha"
            required
          />
          <input
            autoComplete="off"
            type="password"
            name="confirm"
            value={userSignUp.confirm}
            onChange={handleInput}
            placeholder="Confirme sua senha"
            required
          />
          {error.isError ? <h5>{error.message}</h5> : <></>}
          <Button type="submit">
            {loading ? <TailSpin color="#ffffff" width="10" /> : <>Cadastrar</>}
          </Button>
        </Form>
      </Container>
    </>
  );
}
