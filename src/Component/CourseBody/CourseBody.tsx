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
  const [courseLength, setCourseLength] = useState<number>(0);
  useEffect(() => {
    getCourseList({
      filter_conditions: JSON.stringify({
        $and: [
          { title: "%파이썬%" },
          {
            $or: [
              { enroll_type: 0, is_free: true },
              { enroll_type: 0, is_free: false },
            ],
          },
        ],
      }),
      offset: 20 * (currPage - 1),
      count: 20,
    }).then((res) => {
      console.log(res);
      setCourseData(res.courses);
      setCourseLength(res.course_count);
    });
  }, [currPage]);

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
