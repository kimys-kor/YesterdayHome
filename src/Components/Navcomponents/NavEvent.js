import { useEffect, useState, useContext } from "react";
import styled from "styled-components";

const Contentbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

function NavEvent() {
  return <Contentbox className="content">콘텐츠</Contentbox>;
}

export default NavEvent;
