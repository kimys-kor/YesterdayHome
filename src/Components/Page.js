import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Box = styled.div`
  display: flex;
`;

function Page() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Box>
        <Sidebar></Sidebar>
        <Content></Content>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default Page;
