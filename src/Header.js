import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: -webkit-fill-available;
  padding: 20px;
  background-color: #303030;
  z-index: 999999;

  .title {
    color: #fff;
    font-size: 24px;
    font-weight: 800;
    cursor: default;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <Link to="/" className="title">
          MicroDust
        </Link>
      </HeaderWrap>
    );
  }
}
