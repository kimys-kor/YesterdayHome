import React from "react";
import styled from "styled-components";

import Paging from "./Paging";

const Table = styled.ul`
  width: 100%;
  border-radius: 7px;
  padding: 10px;
`;

const Title = styled.li`
  width: 100%;
  display: grid;
  padding: 10px;
  border-top: 2.5px solid #63ccff;
  border-bottom: 1px solid #63ccff;

  grid-template-columns: 1fr 5fr 2fr 2fr 1fr 1fr;

  div {
    text-align: center;
    font-size: 1.2rem;
  }
`;

const Tr = styled.li`
  width: 100%;
  display: grid;
  padding: 10px;
  border-bottom: 1px solid #cfcfcf;

  grid-template-columns: 1fr 5fr 2fr 2fr 1fr 1fr;

  div {
    text-align: center;
  }
`;

const Tdno = styled.div``;
const Tdtitle = styled.div``;
const Tdname = styled.div``;
const Tddate = styled.div``;
const Tdviews = styled.div``;
const Tdrcm = styled.div``;

const setPage = function () {
  console.log("온체인지");
};

function Board() {
  return (
    <Table>
      <Title>
        <Tdno>넘버</Tdno>
        <Tdtitle>제목</Tdtitle>
        <Tdname>작성자</Tdname>
        <Tddate>등록일</Tddate>
        <Tdviews>조회수</Tdviews>
        <Tdrcm>추천</Tdrcm>
      </Title>

      <Tr>
        <Tdno>1</Tdno>
        <Tdtitle>게시글1</Tdtitle>
        <Tdname>운영자</Tdname>
        <Tddate>2022-12-19</Tddate>
        <Tdviews>0</Tdviews>
        <Tdrcm>0</Tdrcm>
      </Tr>
      <Tr>
        <Tdno>2</Tdno>
        <Tdtitle>게시글2</Tdtitle>
        <Tdname>운영자</Tdname>
        <Tddate>2022-12-19</Tddate>
        <Tdviews>0</Tdviews>
        <Tdrcm>0</Tdrcm>
      </Tr>
      <Tr>
        <Tdno>2</Tdno>
        <Tdtitle>게시글3</Tdtitle>
        <Tdname>운영자</Tdname>
        <Tddate>2022-12-19</Tddate>
        <Tdviews>0</Tdviews>
        <Tdrcm>0</Tdrcm>
      </Tr>
      <Tr>
        <Tdno>2</Tdno>
        <Tdtitle>게시글4</Tdtitle>
        <Tdname>운영자</Tdname>
        <Tddate>2022-12-19</Tddate>
        <Tdviews>0</Tdviews>
        <Tdrcm>0</Tdrcm>
      </Tr>
      <Tr>
        <Tdno>2</Tdno>
        <Tdtitle>게시글5</Tdtitle>
        <Tdname>운영자</Tdname>
        <Tddate>2022-12-19</Tddate>
        <Tdviews>0</Tdviews>
        <Tdrcm>0</Tdrcm>
      </Tr>
      <Tr>
        <Tdno>2</Tdno>
        <Tdtitle>게시글6</Tdtitle>
        <Tdname>운영자</Tdname>
        <Tddate>2022-12-19</Tddate>
        <Tdviews>0</Tdviews>
        <Tdrcm>0</Tdrcm>
      </Tr>
      <Tr>
        <Tdno>2</Tdno>
        <Tdtitle>게시글7</Tdtitle>
        <Tdname>운영자</Tdname>
        <Tddate>2022-12-19</Tddate>
        <Tdviews>0</Tdviews>
        <Tdrcm>0</Tdrcm>
      </Tr>
      <Tr>
        <Tdno>2</Tdno>
        <Tdtitle>게시글8</Tdtitle>
        <Tdname>운영자</Tdname>
        <Tddate>2022-12-19</Tddate>
        <Tdviews>0</Tdviews>
        <Tdrcm>0</Tdrcm>
      </Tr>
      <Tr>
        <Tdno>2</Tdno>
        <Tdtitle>게시글9</Tdtitle>
        <Tdname>운영자</Tdname>
        <Tddate>2022-12-19</Tddate>
        <Tdviews>0</Tdviews>
        <Tdrcm>0</Tdrcm>
      </Tr>
      <Tr>
        <Tdno>2</Tdno>
        <Tdtitle>게시글10</Tdtitle>
        <Tdname>운영자</Tdname>
        <Tddate>2022-12-19</Tddate>
        <Tdviews>0</Tdviews>
        <Tdrcm>0</Tdrcm>
      </Tr>
      <Paging page={1} count={15} setPage={setPage}></Paging>
    </Table>
  );
}

export default Board;
