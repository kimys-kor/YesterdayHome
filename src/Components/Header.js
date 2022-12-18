import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Header.module.css";
import home_icon from "../Icons/home-icon.png";

function Header() {
  return (
    <div className={styles.header_content}>
      <div className={styles.mainlogo}>
        <img className={styles.icon} src={home_icon} />
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
