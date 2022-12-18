import { useEffect, useState } from "react";
import styled from "styled-components";

const Freeboard_content = styled.div`
  max-width: 1280px;
  min-height: 1000px;
  margin: 0 auto;
  padding: 12px 36px;

  display: flex;
`;

function Freeboard() {
  return <Freeboard_content>자유게시판</Freeboard_content>;
}

export default Freeboard;
