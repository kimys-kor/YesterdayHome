import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Maincomponents/Sidebar";
import Mainbar from "./Maincomponents/Mainbar";

import Freeboard from "./Board/Freeboard";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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

    max-width: 1280px;
    min-height: 1000px;
    margin: 0 auto;
    padding: 12px 36px;

    display: flex;
  }
`;

function Page() {
  return (
    <BrowserRouter>
      <Box>
        <div className="Headerbox">
          <Header></Header>
        </div>
        <div className="Navbox">
          <Navbar></Navbar>
        </div>

        <div className="Mainbox">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/" element={<Mainbar />} />
            <Route path="/freeboard" element={<Freeboard />} />
          </Routes>
        </div>
        <Footer></Footer>
      </Box>
    </BrowserRouter>
  );
}

export default Page;
