import SearchArea from "./SearchArea/SearchArea";
import Filter from "./Filter/Filter";
import CourseBody from "./CourseBody/CourseBody";
import Pagination from "./CourseBody/Pagination/Pagination";

const Main = () => {
  return (
    <div>
      <SearchArea />
      <Filter />
      <CourseBody />
      <Pagination currPage={5} />
    </div>
  );
};

export default Main;
