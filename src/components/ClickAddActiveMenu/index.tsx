import React, { useState } from "react";
import styled from "styled-components";

const items = [
  {
    name: "Header 1",
    content: <div>Phan Chi Hieu 1</div>,
  },
  {
    name: "Header 2",
    content: <div>Phan Chi Hieu 2</div>,
  },
  {
    name: "Header 3",
    content: <div>Phan Chi Hieu 3</div>,
  },
];

const ClickAddActiveMenu = () => {
  const [active, activeSet] = useState<any>();

  const handleClick = (name: any): void => {
    activeSet(name === active ? null : name);
  };

  return (
    <div>
      {items.map((item: any) => {
        let isActive = active === item?.name;
        return (
          <div className={`default ${isActive ? "_active" : ""}`}>
            <div onClick={() => handleClick(item.name)}>{item.name}</div>
            <Content isActive={isActive} itemName={item.name}>
              <div id={item.name}>{item.content}</div>
            </Content>
          </div>
        );
      })}
    </div>
  );
};

export default ClickAddActiveMenu;

export const Content = styled.div<{ isActive: boolean; itemName: any }>`
  background-color: red;
  position: relative;
  overflow: hidden;
  height: ${(props) => {
    const inner = document.getElementById(props.itemName);
    // console.log("inner-id", inner?.clientWidth);
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }};
  transition: height 0.2s ease;
`;
