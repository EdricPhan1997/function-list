import React from "react";
import ImgLazy from "./ImgLazy";

const ArrImg = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const LazyImg = () => {
  return (
    <div>
      {ArrImg.map((_it, _idex) => {
        return (
          <div style={{ width: "1000px", height: "1000px", margin: "0 auto" }}>
            <ImgLazy id={_it.id} key={_it.id} src={_it.src} width={"100%"} height={"100%"} />
          </div>
        );
      })}
    </div>
  );
};

export default LazyImg;
