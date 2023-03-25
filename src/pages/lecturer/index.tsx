import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setSession } from "../../utils/axios";
import { RootState, useAppDispatch } from "../../redux/store";
import { getListLecturer } from "../../redux/_function/lecturer";

const Lecturer = () => {
  const dispatch = useAppDispatch();
  const postList = useSelector((state: RootState) => state.lecturer.leturerList); // xem tren redux blogs => postList
  const loading = useSelector((state: RootState) => state.lecturer.loading);

  const [dataLecturer, setDataLecturer] = useState([]);

  //   const getListLecturerFunction = async (postList: any) => {
  //     const promise = await dispatch(getListLecturer({}));
  //     // console.log("promise", promise);

  //     if (postList && postList.items) {
  //       setDataLecturer(postList.items);
  //     }
  //   };

  console.log("loading", loading);

  useEffect(() => {
    const promise = dispatch(getListLecturer({}));
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const checkListLecturer = () => {
    if (!loading && postList.items !== undefined) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <button
        onClick={() =>
          setSession(
            `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoie1widXNlcklkXCI6XCIwZGViZmYxZC1hYzgwLTRlMmQtYmUyNC0zMTUxYjI2ZjIxNzZcIixcInVzZXJOYW1lXCI6XCJhZG1pbkBnbWFpbC5jb21cIixcImZ1bGxOYW1lXCI6XCJBRE1JTlwiLFwicGhvbmVcIjpcIjA5MTMxMTA0NjVcIixcImVtYWlsXCI6XCJhZG1pbkBnbWFpbC5jb21cIixcImFkZHJlc3NcIjpcImRha2xhbGtcIixcInRodW1ibmFpbFwiOm51bGwsXCJwZXJtaXNzaW9uXCI6bnVsbCxcIm1lbnVMaXN0XCI6XCJcIixcInJvbGVzXCI6bnVsbCxcInJvbGVDb2RlXCI6XCJcIixcImlzQWRtaW5cIjp0cnVlLFwidHJpYWxcIjpmYWxzZSxcIk9wZW5DYXJcIjpmYWxzZSxcIk9wZW5UcnVjdFwiOmZhbHNlLFwiaXNTdHVkZW50VGVzdFwiOmZhbHNlfSIsIm5iZiI6MTY3OTczNzg5MCwiZXhwIjoxNjc5ODI0MjkwLCJpYXQiOjE2Nzk3Mzc4OTB9.e5zLYXrOd4s1u2jYIPsv03J-diOTUjtsWURuCPBcgD0`
          )
        }
      >
        Save Token
      </button>
      {/* <button onClick={() => getListLecturerFunction(postList)}>GetLecturer</button> */}

      <div>
        {checkListLecturer() &&
          postList.items.map((item: any) => {
            return <div>{item.code}</div>;
          })}
      </div>
    </div>
  );
};

export default Lecturer;
