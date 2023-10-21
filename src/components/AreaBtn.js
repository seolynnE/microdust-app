import React, { Component } from "react";
import styled from "styled-comments";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-center: center;
  background-color: inherit;
  font-size: 16px;
`;

export default class AreaBtn extends Component {
  render() {
    return (
      <Button className="area-drop">
        <ul className="area">
          <li>서울</li>
          <li>부산</li>
          <li>대구</li>
        </ul>
      </Button>
    );
  }
}
