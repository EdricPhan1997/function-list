import React, { useEffect, useState } from "react";

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

const PushValueInArray = () => {
  const [activeArr, activeArrSet] = useState<any>([]);

  const newArr = [...items].map((item) => {
    return { name: item.name, active: false };
  });

  useEffect(() => {
    activeArrSet(newArr);
  }, []);

  //   console.table(activeArr);

  // Trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện được cung cấp.
  //   const ind = activeArr.findIndex((i: any) => i.name === "Header 1");

  //   console.log(ind);

  //  chỉ cần một phân tử thỏa mãn điều kiện là trả về true
  //   const numbers = [1, 2, 3, 4, 5];
  //   const result = numbers.some((num) => num > 3);

  //   console.log(result); // true

  return <div>PushValueInArray</div>;
};

export default PushValueInArray;
