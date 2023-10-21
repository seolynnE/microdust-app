import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card";

const ViewWrap = styled.section`
  margin: 20px;
`;

export default class ViewAll extends Component {
  renderCard(i) {
    return <Card />;
  }
  render() {
    return (
      <ViewWrap>
        {this.renderCard}
        <Card />
      </ViewWrap>
    );
  }
}
