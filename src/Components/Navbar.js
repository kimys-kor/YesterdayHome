import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import NavEvent from "./Navcomponents/NavEvent";
import { Link } from "react-router-dom";

const Nav_content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 12px 36px;

  height: 80px;
  border-radius: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .Nav_event {
    display: flex;
    flex-direction: column;
    justify-content: space-start;

    color: #63a4ff;
    font-size: 12px;
  }

  .Nav_event_item {
    white-space: nowrap;
    margin-bottom: 7px;
  }

  .Nav_event_item:hover {
    cursor: pointer;
    color: black;
    border-bottom: 1px solid black;
  }

  .Nav_menu {
    display: flex;
  }

  .Nav_menu_item {
    margin-left: 30px;
    font-size: 1.2rem;
    white-space: nowrap;
  }

  .Nav_menu_item:hover {
    cursor: pointer;
    color: #81d4fa;
  }

  .Drop_menu {
    position: absolute;
    z-index: 3;
    display: none;
    background: #eee;
    box-shadow: 0px 10px 8px 0px rgba(0, 0, 0, 0.3);
    padding: 10px;
  }

  .Nav_menu_item:hover .Drop_menu {
    display: block;
  }

  .Drop_item {
    margin-top: 15px;
    fon-size: 0.6rem !important;
    color: #000000;
  }

  .Drop_item:hover {
    color: #b4ffff;
  }
`;

const NavbarLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

function Navbar() {
  return (
    <Nav_content>
      <div className="Nav_event">
        <ul>
          <li className="Nav_event_item">공지사항1</li>
          <li className="Nav_event_item">공지사항2</li>
        </ul>
      </div>

      <ul className="Nav_menu">
        <NavbarLink to={"/"}>
          <li className="Nav_menu_item">
            홈
            <ul className="Drop_menu">
              <li className="Drop_item">드롭메뉴1</li>
              <li className="Drop_item">드롭메뉴2</li>
              <li className="Drop_item">드롭메뉴3</li>
            </ul>
          </li>
        </NavbarLink>

        <NavbarLink to={"/freeboard"}>
          <li className="Nav_menu_item">게시판</li>
        </NavbarLink>

        <li className="Nav_menu_item">사진</li>
        <li className="Nav_menu_item">집들이</li>
        <li className="Nav_menu_item">노하우</li>
        <li className="Nav_menu_item">전문가집들이</li>
        <li className="Nav_menu_item">셀프가이드</li>
        <li className="Nav_menu_item">셀프가이드</li>
        <li className="Nav_menu_item">질문과답변</li>
        <li className="Nav_menu_item">3D인테리어</li>
        <li className="Nav_menu_item">이벤트</li>
      </ul>
    </Nav_content>
  );
}

export default Navbar;
