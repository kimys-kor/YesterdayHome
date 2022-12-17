import { useEffect, useState } from "react";
import styled from "styled-components";

import Login from "./sidebar/Login.js";
import Eventcard from "./sidebar/Eventcard.js";
import Newpost from "./sidebar/Newpost.js";

const Menubox = styled.div`
  flex: 0 0 26.6%;
  max-width: 26.6%;

  display: flex;
  flex-direction: column;
  align-item: center;
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
