import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Header.module.css";
import home_icon from "../Icons/home-icon.png";

import Modal from "./Maincomponents/mainbar/Modal";

function Header() {
  return (
    <div className={styles.header_content}>
      <div className={styles.mainlogo}>
        <img className={styles.icon} src={home_icon} />
        <FontAwesomeIcon icon={faBars} className={styles.barlogo} />
        <Modal width={320}></Modal>
      </div>
      <p className={styles.title}>어제의 집</p>
      <div>
        <input
          className={styles.searchinput}
          type="text"
          placeholder="검색어를 입력하세요"
        ></input>
        <FontAwesomeIcon icon={faSearch} className={styles.searchlogo} />
      </div>
    </div>
  );
}

export default Header;
