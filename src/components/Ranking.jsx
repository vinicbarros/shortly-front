import { useEffect, useState } from "react";
import styled from "styled-components";
import { getRanking } from "../services/shortly";
import { ImTrophy } from "react-icons/im";

export function Ranking() {
  const [rankingList, setRankingList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ranking = (await getRanking()).data;
        setRankingList(ranking.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Wrap>
        <ImTrophy color="#FFD233" size="56px" />
        <p>Ranking</p>
      </Wrap>
      <Box>
        {rankingList.map((rank, i) => (
          <h4 key={i}>
            {i + 1}.{rank.name} - {rank.linksCount} links - {rank.visitCount}{" "}
            visualizações
          </h4>
        ))}
      </Box>
    </>
  );
}

const Box = styled.div`
  width: 60vw;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  h4 + h4 {
    margin-top: 13px;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 30px;

  p {
    margin-left: 10px;
    font-size: 26px;
  }
`;
