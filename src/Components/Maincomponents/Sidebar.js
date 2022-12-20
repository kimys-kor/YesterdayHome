import { useEffect, useState } from "react";
import styled from "styled-components";

import Login from "./sidebar/Login.js";
import Eventcard from "./sidebar/Eventcard.js";
import Newpost from "./sidebar/Newpost.js";

const Menubox = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Sidebar() {
  return (
    <Menubox>
      <Login></Login>
      <Eventcard />
      <Newpost></Newpost>
    </Menubox>
  );
}

export default Sidebar;
