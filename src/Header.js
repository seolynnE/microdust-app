import React, { Component } from "react";
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
  color: #fff;
  z-index: 999999;

  h1 {
    font-size: 24px;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <h1>MicroDust</h1>
      </HeaderWrap>
    );
  }
}
