import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";

const Menubox = styled.div``;

function Header() {
  const { theme } = useContext(ThemeContext);

  return <Menubox className="header">헤더</Menubox>;
}

export default Header;
