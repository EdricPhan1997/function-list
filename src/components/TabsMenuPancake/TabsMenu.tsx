import React, { Children, cloneElement, ReactElement } from "react";
import { Flex } from "@raca2022/uikit";

import type { TabMenuProps } from "./type";
import styled from "styled-components";
const TabsMenu: React.FC<React.PropsWithChildren<TabMenuProps>> = ({
  activeIndex = 0,
  children,
  onItemClick,
  fullWidth,
  isColorInverse = false,
  gap,
}) => {
  return (
    <Flex justifyContent={"space-between"}>
      <Inner fullWidth={fullWidth} gap={gap}>
        {Children.map(children, (child: ReactElement, index) => {
          const isActive = activeIndex === index;
          const nameClass = `default ${isActive ? "_active" : ""}`;

          return cloneElement(child, {
            className: nameClass,
            isActive,
            onClick: onItemClick ? () => onItemClick(index) : undefined,
          });
        })}
      </Inner>
    </Flex>
  );
};

export default TabsMenu;

const Inner = styled(Flex)<{ fullWidth?: boolean; gap?: string }>`
  justify-content: space-between;
  gap: ${({ gap }) => gap || "4px"};
  cursor: pointer;

  .default {
    background-color: transparent;
    transition: all 0.3s ease;
  }

  .default._active {
    background-color: red;
    color: #fff;
  }
`;
