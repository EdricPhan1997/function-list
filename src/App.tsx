import React from "react";
import LazyImg from "./components/LazyImg";
import AddClass from "./components/AddClassScroll";
import AddClassClick from "./components/AddClassClick";

const App = () => {
  return (
    <div>
      {/* <h1>Add LazyImg</h1>
      <LazyImg /> */}
      {/* <h1>Add ClassName Scroll</h1>
      <AddClass /> */}

      <h1>Add ClassName</h1>
      <AddClassClick />
    </div>
  );
};

export default App;
