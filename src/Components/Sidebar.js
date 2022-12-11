import { useEffect, useState } from "react";
import styled from "styled-components";

const Menubox = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

function Sidebar() {
  return <Menubox>사이드바</Menubox>;
}

export default Sidebar;
