import { useEffect, useState, createContext, useContext } from "react";
import styled from "styled-components";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../Context/ThemeContext";

const Toggle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #ffffff;
`;

const Togglefont = styled.p`
  color: ${(props) => props.theme.Color};
`;

function Themetoggle() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <Toggle>
      <Togglefont>다크모드</Togglefont>
      <div className="switch">
        <ReactSwitch onChange={changeTheme} checked={theme === "dark"} />
      </div>
    </Toggle>
  );
}

export default Themetoggle;
