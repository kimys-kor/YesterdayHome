import { useEffect, useState } from "react";
import styled from "styled-components";

import Mainbanner from "./mainbar/Mainbanner.js";
import Picturecard from "./mainbar/Picturecard.js";

const Menubox = styled.div`
  flex: 0 0 73.4%;
  max-width: 73.4%;

  display: flex;
  flex-direction: column;
`;

const Picturearea = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

function Mainbar() {
  return (
    <Menubox>
      <Mainbanner></Mainbanner>
      <Picturearea>
        <Picturecard></Picturecard>
        <Picturecard></Picturecard>
        <Picturecard></Picturecard>
        <Picturecard></Picturecard>
        <Picturecard></Picturecard>
      </Picturearea>
    </Menubox>
  );
}

export default Mainbar;
