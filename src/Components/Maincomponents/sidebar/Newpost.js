import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 95%;
  text-align: center;

  margin: 20px auto;
  box-shadow: 4px 4px 4px 5px rgba(168, 165, 165, 0.2);
  border-radius: 5px;

  .card_title {
    width: 100%;
    height: 40px;

    background-color: #6ec5ff;
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
`;

function Newpost() {
  return (
    <Card>
      <div className="card_title">
        <p>어제의집 새게시글</p>
      </div>
      <div className="card_content">
        <div className="card_content_item">
          <p>사진찍어서 올리면 포인트가 2배</p>
        </div>
        <div className="card_content_item">
          <p>연말 홈파티 콘테스트</p>
        </div>
        <div className="card_content_item">
          <p>월간 댓글 이벤트</p>
        </div>
        <div className="card_content_item">
          <p>월간 댓글 이벤트</p>
        </div>
        <div className="card_content_item">
          <p>월간 댓글 이벤트</p>
        </div>
      </div>
    </Card>
  );
}

export default Newpost;
