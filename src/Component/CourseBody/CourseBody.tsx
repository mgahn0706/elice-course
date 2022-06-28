import { useEffect, useState } from "react";
import { getCourseList } from "../../API/API";
import CourseCard from "./CourseCard/CourseCard";
import Pagination from "./Pagination/Pagination";
import {useLocation} from "react-router";
import "../../Styles/Components/_courseBody.scss"
interface CourseType {
  title: string;
  id: number;
  enroll_type: number;
  is_free: boolean;
  short_description: string;
  logo_file_url: string;
}

interface QueryType {
  price: string[];
  keyword: string | null;
}

const CourseBody = ()=> {
  const location = useLocation();
  const [courseData, setCourseData] = useState<CourseType[]>([]);
  const [currPage, setCurrPage] = useState<number>(1);
  const [courseLength, setCourseLength] = useState<number>(0);

  const [queryData, setQueryData] = useState<QueryType>({
    price: [],
    keyword: "",
  });

  const getQueryData = () => {
    const params = new URLSearchParams(location.search);
    const newQueryData = {
      price: params.getAll("price"),
      keyword: params.get("keyword"),
    };
    setQueryData(newQueryData);
  };

  const formatPrice = (price: string) => {
    switch (price){
      case "free":
        return {enroll_type: 0, is_free:true}
      case "paid":
        return {enroll_type: 0, is_free: false}
      default:
        return {};
    }
  }

  useEffect(() => {
    getQueryData();
  }, [location]);

  useEffect(() => {
    getCourseList({
      filter_conditions: JSON.stringify({
        $and: [
          queryData.keyword ?{ title: `%${queryData.keyword}%`} : {},
          {
            $or:
              queryData.price ?
                  queryData.price.map(price => formatPrice(price)) : []
            ,
          },
        ],
      }),
      offset: 20 * (currPage - 1),
      count: 20,
    }).then((res) => {
      setCourseData(res.courses);
      setCourseLength(res.course_count);
    });
  }, [currPage, queryData]);

  return (
    <div>
      <p>전체 {courseLength}개</p>

      {courseLength===0 ? <div className="noResult">검색 결과가 없습니다.</div> :
          <div className="courseContainer">
        {courseData.map((item) => (
            <CourseCard key={item.id} course={item} />
        ))}

      </div>}



      <Pagination
        currPage={currPage}
        setCurrPage={setCurrPage}
        courseLength={courseLength}
      />
    </div>
  );
};

export default CourseBody;
