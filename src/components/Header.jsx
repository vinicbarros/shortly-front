import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/Logo.png";
import UserContext from "../context/userContext";
import { userIsLogged } from "./PrivatePage";

export function Header() {
  const { user } = useContext(UserContext);

  function exitUser() {
    localStorage.removeItem("shortly");
    navigate("/");
  }

  return (
    <HeaderBox>
      {userIsLogged() ? (
        <Box>
          <Wrapper>Seja bem vindo(a), {user}!</Wrapper>
          <Wrap>
            <Link to="/">Home</Link>
            <Link to="/ranking">Ranking</Link>
            <a onClick={exitUser}>Sair</a>
          </Wrap>
        </Box>
      ) : (
        <Wrap>
          <Link to="/signin">Entrar</Link>
          <Link to="/signup">Cadastrar-se</Link>
        </Wrap>
      )}
      <img src={LogoImg} alt="logo" />
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 250px;
    margin-top: 40px;
  }
`;

const Box = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  color: #5d9040;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: #9c9c9c;
  }

  a:nth-child(2) {
    color: #5d9040;
  }

  a + a {
    margin-left: 15px;
  }
`;
