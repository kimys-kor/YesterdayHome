import { useEffect, useState } from "react";
import styled from "styled-components";

import Mainbanner from "./mainbar/Mainbanner.js";
import Picturecard from "./mainbar/Picturecard.js";

const Picturearea = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

function Mainbar() {
  return (
    <>
      <Mainbanner></Mainbanner>
      <Picturearea>
        <Picturecard></Picturecard>
        <Picturecard></Picturecard>
        <Picturecard></Picturecard>
        <Picturecard></Picturecard>
        <Picturecard></Picturecard>
      </Picturearea>
    </>
  );
}

export default Mainbar;
