import { useEffect, useState } from "react";
import styled from "styled-components";

import Mainpic from "../../../bannerpic/main1.png";

const Card = styled.div`
  width: 100%;
  height: 300px;
  text-align: center;
  overflow: hidden;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    transition: all 0.2s linear;
  }

  img:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

function Mainbanner() {
  return (
    <Card>
      <img src={Mainpic} />
    </Card>
  );
}

export default Mainbanner;
