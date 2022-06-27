import { useEffect, useState } from "react";
import { getCourseList } from "../../API/API";
import CourseCard from "./CourseCard/CourseCard";
import Pagination from "./Pagination/Pagination";

interface CourseType {
  title: string;
  id: number;
  enroll_type: number;
  is_free: boolean;
  short_description: string;
  logo_file_url: string;
}
const CourseBody = () => {
  const [courseData, setCourseData] = useState<CourseType[]>([]);
  const [currPage, setCurrPage] = useState<number>(1);
  useEffect(() => {
    getCourseList({
      filter_conditions: JSON.stringify({
        $and: [
          { title: "%자바%" },
          {
            $or: [
              { enroll_type: 0, is_free: true },
              { enroll_type: 0, is_free: false },
            ],
          },
        ],
      }),
      offset: 0,
      count: 20,
    }).then((res) => {
      setCourseData(res.courses);
    });
  }, []);

  return (
    <div>
      <p>전체 {courseData.length}개</p>

      {courseData.map((item) => (
        <CourseCard key={item.id} course={item} />
      ))}

      <Pagination currPage={currPage} />
    </div>
  );
};

export default CourseBody;
