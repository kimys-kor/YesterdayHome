import { useEffect, useState } from "react";
import styled from "styled-components";

const Menubox = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Navbar() {
  return <Menubox>네브바</Menubox>;
}

export default Navbar;
