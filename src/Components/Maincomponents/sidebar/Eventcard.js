import { useEffect, useState } from "react";
import styled from "styled-components";
import hotIcon from "../../../Icons/hotIcon.svg";
import eventpic from "../../../images/event.png";

const Card = styled.div`
  width: 250px;
  text-align: center;

  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 4px 4px 4px 5px rgba(168, 165, 165, 0.2);

  .card_title {
    width: 100%;
    height: 40px;

    background-color: #6ec5ff;
    background-image: url(${eventpic});
    border-radius: 8px 8px 0 0;
    padding: 10px 24px 0;

    font-size: 19px;
    color: #ffffff;
  }

  .card_content {
    width: 100%;
    max-height: 230px;

    background-color: #f7f8fa;
    border-radius: 0 0 8px 8px;
    padding: 15px 10px;

    display: flex;
    flex-direction: column;
    align-item: center;
    text-align: center;
  }

  .card_content_item {
    display: flex;
    flex-direction: row;

    white-space: nowrap;
    line-height: 200%;
  }

  .hoticon {
    width: 1.7rem;
  }
`;

function Eventcard() {
  return (
    <Card>
      <div className="card_title">
        <p>어제의집 이벤트</p>
      </div>
      <div className="card_content">
        <div className="card_content_item">
          <p>사진찍어서 올리면 포인트가 2배</p>
          <img src={hotIcon} className="hoticon"></img>
        </div>
        <div className="card_content_item">
          <p>연말 홈파티 콘테스트</p>
          <img src={hotIcon} className="hoticon"></img>
        </div>
        <div className="card_content_item">
          <p>월간 댓글 이벤트</p>
          <img src={hotIcon} className="hoticon"></img>
        </div>
        <div className="card_content_item">
          <p>월간 댓글 이벤트</p>
          <img src={hotIcon} className="hoticon"></img>
        </div>
        <div className="card_content_item">
          <p>월간 댓글 이벤트</p>
          <img src={hotIcon} className="hoticon"></img>
        </div>
      </div>
    </Card>
  );
}

export default Eventcard;
