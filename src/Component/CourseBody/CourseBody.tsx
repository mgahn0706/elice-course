import { useEffect, useState } from "react";
import { getCourseList } from "../../API/API";

interface CourseType {
  title: string;
  id: number;
}

const CourseBody = () => {
  const courseDummy = ["C++", "React", "JavaScript"];
  const [courseData, setCourseData] = useState<CourseType[]>([]);

  useEffect(() => {
    getCourseList({
      filter_conditions: JSON.stringify({
        $and: [
          { title: "%c언어%" },
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
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default CourseBody;
