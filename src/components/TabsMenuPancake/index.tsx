import { Flex } from "@raca2022/uikit";
import React, { useState } from "react";
import TabsMenu from "./TabsMenu";

const TabsMenuPancake = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (newIndex: any) => {
    console.log("newIndex", newIndex);
    setIndex(newIndex);
  };

  return (
    <Flex justifyContent={"center"} flexDirection="column">
      <h1>TabsMenuPancake</h1>
      <TabsMenu activeIndex={index} onItemClick={handleClick} gap={"10px"}>
        <div>Total</div>
        <div>Cakers</div>
        <div>Flippers</div>
        <div>Storm</div>
      </TabsMenu>
    </Flex>
  );
};

export default TabsMenuPancake;
