import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { deleteUrl, getMyUrl, openUrl, postUrl } from "../services/shortly";
import { FaTrash } from "react-icons/fa";
import UserContext from "../context/userContext";

export function HomeScreen() {
  const [urls, setUrls] = useState([]);
  const [newUrl, setNewUrl] = useState("");
  const [refresh, setRefresh] = useState(false);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myUrls = (await getMyUrl()).data;
        setUser(myUrls.name);
        setUrls(myUrls);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [refresh]);

  const sendUrl = async (e) => {
    e.preventDefault();

    try {
      const data = await postUrl({ url: newUrl });
      console.log(data);
      setNewUrl("");
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDelete = async (id) => {
    if (window.confirm("Você tem certeza que quer deletar essa URL?")) {
      try {
        await deleteUrl(id);
        setRefresh(!refresh);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const goToUrl = async (shortUrl) => {
    try {
      const data = await openUrl(shortUrl);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Content>
      <UrlForm onSubmit={sendUrl}>
        <input
          type="text"
          name="url"
          onChange={(e) => {
            setNewUrl(e.target.value);
          }}
          value={newUrl}
          placeholder="Links que cabem no bolso"
          required
        />
        <button type="submit">Encurtar link</button>
      </UrlForm>

      <UrlsBox>
        {urls.length === 0 ? (
          <>Carregando...</>
        ) : (
          <>
            {urls.shortenedUrls.map((url, i) => (
              <UrlWrap
                key={i}
                onClick={() => {
                  goToUrl(url.shortUrl);
                }}
              >
                <WrapInfo>
                  <h5>{url.url}</h5>
                  <h5>{url.shortUrl}</h5>
                  <h5>Quantidade de visitas: {url.visitCount}</h5>
                </WrapInfo>
                <WrapDelete
                  onClick={() => {
                    confirmDelete(url.id);
                  }}
                >
                  <FaTrash color="#EA4F4F" />
                </WrapDelete>
              </UrlWrap>
            ))}
          </>
        )}
      </UrlsBox>
    </Content>
  );
}

const Content = styled.section`
  width: 70vw;
`;

const UrlForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 65%;
    height: 50px;
    border: 1px solid #78b15940;
    border-radius: 5px;
    padding-left: 10px;
    margin-right: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }

  button {
    background-color: #5d9040;
    color: #ffffff;
    border: none;
    height: 50px;
    border-radius: 5px;
    font-family: "Lexend Deca";
    padding-inline: 20px;
  }
`;

const UrlsBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 42px;
  margin-top: 40px;
`;

const UrlWrap = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
`;

const WrapInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80vw;
  height: 60px;
  background-color: #80cc74;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border-radius: 12px 0px 0px 12px;
  font-size: 14px;
  color: #ffffff;

  h5 {
    max-width: 240px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const WrapDelete = styled.div`
  width: 10vw;
  height: 60px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border-radius: 0px 12px 12px 0px;
`;
