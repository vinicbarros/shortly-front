import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivatePage({ children }) {
  const authorization = JSON.parse(localStorage.getItem("shortly"));
  const navigate = useNavigate();

  if (authorization) {
    return <>{children}</>;
  } else {
    useEffect(() => {
      navigate("/");
    }, []);
  }
}

const userIsLogged = () => {
  const authorization = JSON.parse(localStorage.getItem("shortly"));
  if (authorization) {
    return true;
  }
  return false;
};

export { userIsLogged };
