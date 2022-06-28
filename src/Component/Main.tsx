import SearchArea from "./SearchArea/SearchArea";
import Filter from "./Filter/Filter";
import CourseBody from "./CourseBody/CourseBody";
import {useEffect, useState} from "react";

interface QueryType {
    price: string[];
    keyword: string | null;
}
const Main = () => {

  return (
    <div>
      <SearchArea />
      <Filter />
      <CourseBody />
    </div>
  );
};

export default Main;
