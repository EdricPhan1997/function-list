import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  itemName?: any;
  itemContent?: any;
  isActive: boolean;
}

const AccordionContent: React.FC<Props> = ({ onClick, isActive, itemContent, itemName }) => {
  return (
    <React.Fragment>
      <Header onClick={onClick}>
        {itemName}
        <HeaderIcon isActive={isActive}>more</HeaderIcon>
      </Header>
      <Content itemName={itemName} isActive={isActive}>
        <Inner id={itemName}>{itemContent}</Inner>
      </Content>
    </React.Fragment>
  );
};

interface PropsAcc {
  items: any[];
  mutiple?: any;
}

const Accordion: React.FC<PropsAcc> = ({ items, mutiple }) => {
  const [active, activeSet] = useState<any>();
  const [activeArr, activeArrSet] = useState<any>([]);

  const p = [...items].map((item) => {
    return { name: item.name, active: false };
  });
  // console.log(">>>>", p);

  useEffect(() => {
    activeArrSet(p);
  }, []);

  const handleClick = (name: any): void => {
    // console.log("click ", name);
    // console.log("active >>>>> ", active);
    activeSet(name === active ? null : name);
    if (mutiple) {
      let ind = activeArr.findIndex((i: any) => i.name === name);
      let upd = [...activeArr];
      upd[ind].active = !upd[ind].active;
      activeSet(upd);
    }
  };

  return (
    <AccordionContainer>
      {items.map((item: any) => {
        let isActive = active === item?.name;
        console.log("active ????????", active);
        // console.log("item.name", item.name);
        // console.log(isActive);
        // console.log("mutiple", mutiple);
        if (mutiple) isActive = activeArr.some((i: any) => i.name === item.name && i.active);
        return (
          <AccordionContent
            onClick={() => handleClick(item?.name)}
            itemName={item?.name}
            itemContent={item?.content}
            isActive={isActive}
          />
        );
      })}
    </AccordionContainer>
  );
};

export default Accordion;

export const AccordionContainer = styled.div`
  overflow: hidden;
  width: 18.75rem;
  border-radius: 0.5rem;
  background-color: #27262c;
  color: #f9f9f9;
`;

export const Inner = styled.div`
  position: absolute;
  padding: 1rem;
  color: #c3c1cb;
`;

export const Header = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  font-size: 1rem;
  text-align: left;
  background-color: #212025;
  color: inherit;
  cursor: pointer;
`;

export const HeaderIcon = styled.button<{ isActive: boolean }>`
  transform: rotate(${(props) => (props.isActive ? -180 : 0)}deg);
  transition: 0.2s ease;
`;

export const Content = styled.div<{ isActive: boolean; itemName: any }>`
  position: relative;
  overflow: hidden;
  height: ${(props) => {
    const inner = document.getElementById(props.itemName);
    // console.log("inner-id", inner);
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }};
  transition: height 0.2s ease;
`;
