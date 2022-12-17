import Sidebar from "./Maincomponents/Sidebar";
import Mainbar from "./Maincomponents/Mainbar";

import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";

const Main_content = styled.div`
  max-width: 1280px;
  min-height: 1000px;
  margin: 0 auto;
  padding: 12px 36px;

  display: flex;
`;

function Main() {
  const { isDark } = useContext(ThemeContext);

  return (
    <Main_content>
      <Mainbar></Mainbar>
      <Sidebar></Sidebar>
    </Main_content>
  );
}

export default Main;
