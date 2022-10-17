import styled from "styled-components";
import { Header } from "../components/Header";
import { userIsLogged } from "../components/PrivatePage";
import { Ranking } from "../components/Ranking";
import { HomeScreen } from "../components/HomeScreen";

export function HomePage() {
  return (
    <>
      <Header />
      <Box>
        {userIsLogged() ? (
          <>
            <HomeScreen />
          </>
        ) : (
          <>
            <Ranking />
            <h1>Crie sua conta para usar nosso serviço!</h1>
          </>
        )}
      </Box>
    </>
  );
}

const Box = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 60px;
    font-size: 2.2rem;
    font-weight: bold;
  }
`;
