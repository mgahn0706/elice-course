import { useEffect, useState } from "react";

interface CourseType {
  title: string;
  id: number;
  enroll_type: number;
  is_free: boolean;
  short_description: string;
  logo_file_url: string;
}

interface CourseCardProps {
  course: CourseType;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const [label, setLabel] = useState<string>("");
  const checkLabel = () => {
    if (course.enroll_type === 4) {
      setLabel("구독");
    } else {
      course.is_free ? setLabel("무료") : setLabel("유료");
    }
  };

  useEffect(() => {
    checkLabel();
  }, []);

  return (
    <div>
      <label>{label}</label>
      <p>{course.title}</p>
      <p>{course.short_description}</p>
      <p>난이도 : 미설정</p>
      <p>수업: 온라인</p>
      <p>기간: 무제한</p>
      <img src={course.logo_file_url} alt={"수업 로고"} />
    </div>
  );
};

export default CourseCard;
