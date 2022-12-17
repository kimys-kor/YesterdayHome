import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Main from "./Main";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-item: center;

  .Headerbox {
    width: 100%;
    border-bottom: 1px solid #eeeeee;
  }

  .Navbox {
    width: 100%;
    border-bottom: 4px solid #81d4fa;
  }

  .Mainbox {
    width: 100%;
    height: 100%;
  }
`;

function Page() {
  return (
    <Box>
      <div className="Headerbox">
        <Header></Header>
      </div>
      <div className="Navbox">
        <Navbar></Navbar>
      </div>

      <div className="Mainbox">
        <Main></Main>
      </div>
      <Footer></Footer>
    </Box>
  );
}

export default Page;
