import { useEffect, useState } from "react";
import styled from "styled-components";

import bn1 from "../../../bannerpic/bn1.PNG";

const Card = styled.div`
  display: block;
  text-align: center;

  margin: 10px 20px;
  border-radius: 5px;
  box-shadow: 4px 4px 4px 5px rgba(168, 165, 165, 0.2);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .description {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .titlefont {
    color: #35c4ef;
    font-size: 18px;
    margin: 0 auto;
  }
  .contentfont {
    color: #000000;
    font-size: 14px;
    margin: 0 auto;
  }
`;

function Picturecard() {
  return (
    <Card>
      <img src={bn1} />
      <div className="description">
        <p className="titlefont">31평아파트</p>
        <p className="contentfont">더욱 넓어 보이는 비결은?</p>
      </div>
    </Card>
  );
}

export default Picturecard;
