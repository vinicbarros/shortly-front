import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivatePage from "./components/PrivatePage";
import UserContext from "./context/userContext";
import { HomePage } from "./pages/HomePage";
import { RankingScreen } from "./pages/RankingScreen";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<HomePage />} />
            <Route
              path="/ranking"
              element={
                <PrivatePage>
                  <RankingScreen />
                </PrivatePage>
              }
            />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
