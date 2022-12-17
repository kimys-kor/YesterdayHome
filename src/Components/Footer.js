import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";
import Themetoggle from "./Themetoggle";

const Footerbox = styled.div`
  bottom: 0;

  width: 100%;
  height: 200px;
  background-color: #cfcfcf;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Footer() {
  return (
    <Footerbox>
      푸터
      <Themetoggle></Themetoggle>
    </Footerbox>
  );
}

export default Footer;
