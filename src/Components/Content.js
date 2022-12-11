import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";

const Menubox = styled.div``;

function Content() {
  const { isDark } = useContext(ThemeContext);

  return <Menubox className="content">콘텐츠</Menubox>;
}

export default Content;
