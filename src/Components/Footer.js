import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";
import Themetoggle from "./Themetoggle";

const Menubox = styled.div`
  bottom: 0;
  position: fixed;
`;

function Footer() {
  return (
    <Menubox className="footer">
      푸터
      <Themetoggle></Themetoggle>
    </Menubox>
  );
}

export default Footer;
