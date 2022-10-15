import { Button, Container, Form, Header, Logo } from "./SignIn";
import LogoImg from "../assets/Logo.png";

export function SignUp() {
  return (
    <>
      <Header></Header>
      <Container>
        <Logo>
          <img src={LogoImg} alt="Logo" />
        </Logo>
        <Form>
          <input placeholder="Nome" />
          <input placeholder="E-mail" />
          <input placeholder="Senha" />
          <input placeholder="Confirme sua senha" />
          <Button>Cadastre-se</Button>
        </Form>
      </Container>
    </>
  );
}
