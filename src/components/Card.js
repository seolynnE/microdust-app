import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dataList from "../data.json";
import {
  handleBookmarkChange,
  getBookmarkData,
  saveBookmarkData,
} from "./BookMark";

const CardWrap = styled.section`
  width: 100%;
  padding: 20px 20px 40px;
  margin-bottom: 30px;
  border-radius: 8px;
  color: #fff;
  background-color: #808080;
  box-sizing: border-box;
  cursor: default;

  &.best {
    background-color: #39b0e5;
  }
  &.normal {
    background-color: #eec218;
  }
  &.bad {
    background-color: #e54b3b;
  }

  .top {
    justify-content: space-between;
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
    .book-mark {
      width: 20px;
      height: 26px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cstyle%3Esvg%7Bfill:%23ffffff%7D%3C/style%3E%3Cpath d='M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: contain;
      &.active {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cstyle%3Esvg%7Bfill:%23ffffff%7D%3C/style%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
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
// 시, 도 정보
const StateList = ({ items }) => {
  return (
    <ul className="area">
      <li>{items.sidoName}</li>
      <li>{items.stationName}</li>
    </ul>
  );
};

// 미세먼지 정보
const InfoList = ({ items }) => {
  const { o3Value, pm10Value } = items;

  let pmStatus = "알수없음";

  if (pm10Value !== undefined) {
    if (pm10Value <= 30) {
      pmStatus = "최고";
    } else if (pm10Value <= 80) {
      pmStatus = "보통";
    } else if (pm10Value <= 150) {
      pmStatus = "나쁨";
    }
  }
  return (
    <div className="center-flex">
      <b>{pmStatus}</b>
      <p className="info">오존 농도: {items.o3Value}</p>
      <p className="time">측정 일시: {items.dataTime}</p>
    </div>
  );
};

const CardList = ({ dataItem, onBookmarkChange, isBookmarked }) => {
  const [markActive, setMarkActive] = useState(!!isBookmarked);
  const { pm10Value, id } = dataItem;

  const handleBookmarkClick = () => {
    const newBookmarkData = { ...getBookmarkData() };
    newBookmarkData[dataItem.id] = !markActive;
    saveBookmarkData(newBookmarkData);

    setMarkActive(!markActive);
    onBookmarkChange(dataItem.id, !markActive);
  };

  return (
    <CardWrap
      className={
        pm10Value !== undefined
          ? pm10Value <= 30
            ? "best"
            : pm10Value <= 80
            ? "normal"
            : pm10Value <= 150
            ? "bad"
            : ""
          : ""
      }
    >
      <div className="top flex">
        <StateList items={dataItem} />
        <button
          className={`book-mark ${markActive ? "active" : ""}`}
          onClick={handleBookmarkClick}
        ></button>
      </div>
      <InfoList items={dataItem} />
    </CardWrap>
  );
};

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(dataList.response.body.items);
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading..</div>
      ) : (
        data.map((dataItem, index) => (
          <CardList
            key={index}
            dataItem={dataItem}
            onBookmarkChange={handleBookmarkChange}
          />
        ))
      )}
    </div>
  );
};

export default Card;
