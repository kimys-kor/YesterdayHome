import { useEffect, useState } from "react";
import styled from "styled-components";

import Boardbanner from "./freeboard/Boardbanner";
import Board from "./freeboard/Board";

const Freeboard_content = styled.div``;

function Freeboard() {
  return (
    <Freeboard_content>
      <Boardbanner></Boardbanner>
      <Board></Board>
    </Freeboard_content>
  );
}

export default Freeboard;
