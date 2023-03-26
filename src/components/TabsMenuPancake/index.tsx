import { Flex } from "@raca2022/uikit";
import React, { useMemo, useState } from "react";
import TabsMenu from "./TabsMenu";

const TabsMenuPancake = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (newIndex: any) => {
    console.log("newIndex", newIndex);
    setIndex(newIndex);
  };

  const memoValue = useMemo(() => {
    switch (index) {
      case 0:
        return <div>Zero</div>;
      case 1:
        return <div>One</div>;
      case 2:
        return <div>Two</div>;
      case 3:
        return <div>Three</div>;
      default:
        return <div>Zero</div>;
    }
  }, [index]);

  return (
    <Flex justifyContent={"center"} flexDirection="column">
      <h1>TabsMenuPancake</h1>
      <TabsMenu activeIndex={index} onItemClick={handleClick} gap={"10px"}>
        <div>Total</div>
        <div>Cakers</div>
        <div>Flippers</div>
        <div>Storm</div>
      </TabsMenu>
      <div>{memoValue}</div>
    </Flex>
  );
};

export default TabsMenuPancake;
