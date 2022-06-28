import SearchArea from "./SearchArea/SearchArea";
import Filter from "./Filter/Filter";
import CourseBody from "./CourseBody/CourseBody";
import  '../Styles/Components/_layout.scss'

interface QueryType {
    price: string[];
    keyword: string | null;
}
const Main = () => {

  return (
    <div className="container">
      <SearchArea />
      <Filter />
      <CourseBody />
    </div>
  );
};

export default Main;
