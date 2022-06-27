import { useEffect, useState } from "react";
import { getCourseList } from "../../API/API";
import CourseCard from "./CourseCard/CourseCard";
import Pagination from "./Pagination/Pagination";
import qs from "qs";
import { useLocation, useParams } from "react-router";

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

const CourseBody = () => {
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

  useEffect(() => {
    getQueryData();
  }, []);

  useEffect(() => {
    getCourseList({
      filter_conditions: JSON.stringify({
        $and: [
          { title: `%${queryData.keyword}%` },
          {
            $or: [
              queryData.price.includes("free")
                ? { enroll_type: 0, is_free: true }
                : {},
              queryData.price.includes("paid")
                ? { enroll_type: 0, is_free: false }
                : {},
            ],
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

      {courseData.map((item) => (
        <CourseCard key={item.id} course={item} />
      ))}

      <Pagination
        currPage={currPage}
        setCurrPage={setCurrPage}
        courseLength={courseLength}
      />
    </div>
  );
};

export default CourseBody;
