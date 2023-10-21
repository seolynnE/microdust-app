import React, { Component } from "react";
import styled from "styled-components";

const CardWrap = styled.section`
  width: 100%;
  padding: 16px 16px 36px;
  border-radius: 8px;
  background-color: #39b0e5;
  color: #fff;
  box-sizing: border-box;

  .area {
    display: flex;
    align-items: flex-end;
    li {
      color: #fff;
      font-size: 14px;
      &:first-child {
        padding-right: 4px;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  b {
    margin-top: 20px;
    padding: 10px 28px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 32px;
  }
  .info {
    padding-top: 4px;
    font-size: 16px;
  }
  .time {
    font-size: 10px;
  }
`;

export default class Card extends Component {
  render() {
    return (
      <CardWrap>
        <div className="flex">
          <ul className="area">
            <li>서울</li>
            <li>관악구</li>
          </ul>
          <button></button>
        </div>
        <div className="center-flex">
          <b>최고</b>
          <p className="info">미세먼지 정보: 394805</p>
          <p className="time">2020-11-13 11시 발표</p>
        </div>
      </CardWrap>
    );
  }
}
