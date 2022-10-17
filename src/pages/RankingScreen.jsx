import styled from "styled-components";
import { Header } from "../components/Header";
import { Ranking } from "../components/Ranking";

export function RankingScreen() {
  return (
    <Box>
      <Header />
      <Ranking />
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
