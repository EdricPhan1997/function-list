import React from "react";
import LazyImg from "./components/LazyImg";
import AddClass from "./components/AddClassScroll";
import AddClassClick from "./components/AddClassClick";
import PushValueInArray from "./components/PushValueInArray";
import ClickAddActiveMenu from "./components/ClickAddActiveMenu";
import Start from "./swr/Start";
import Authentication from "./swr/Authentication";

const App = () => {
  return (
    <div>
      {/* <h1>Add LazyImg</h1>
      <LazyImg />
      <h1>Add ClassName Scroll</h1>
      <AddClass /> */}

      {/* <h1>Add ClassName</h1>
      <AddClassClick /> */}

      {/* <h1>PushValueInArray</h1>
      <PushValueInArray />

      <h1>ClickAddActiveMenu</h1>
      <ClickAddActiveMenu /> */}

      {/* <Start /> */}
      <Authentication />
    </div>
  );
};

export default App;
