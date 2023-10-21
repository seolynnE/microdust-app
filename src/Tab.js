import React, { Component } from "react";
import styled from "styled-components";

const TabWrap = styled.section`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: -webkit-fill-available;
  padding: 16px 40px;
  border-top: 1px solid #808080;
  background-color: #303030;
  z-index: 999999;

  button {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
`;

export default class Tab extends Component {
  render() {
    return (
      <TabWrap>
        <button>내 지역</button>
        <button>전체보기</button>
        <button>즐겨찾기</button>
      </TabWrap>
    );
  }
}
