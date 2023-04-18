import { GlobalStyle } from "./GlobalStyle";
import { Routes, Route } from "react-router-dom";
import { Tweets } from "../pages/TweetsPage/Tweets";
import { Home } from "../pages/HomePage/Home";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { Header, NavBox, NavItem } from "./App.styled";

import { BsTwitter } from "react-icons/bs";

export const App = () => {
  return (
    <div>
      <Header>
        <NavItem to={"/"}>
          <BsTwitter size={25} />
        </NavItem>
        <NavBox>
          <NavItem to={"/"}>Home</NavItem>
          <NavItem to={"/tweets"}>Tweets</NavItem>
        </NavBox>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <GlobalStyle />
    </div>
  );
};
