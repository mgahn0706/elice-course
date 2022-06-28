import { useEffect, useState } from "react";
import "../../../Styles/Components/_courseCard.scss";
import { CourseType } from "../../../Interface/Interface";

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
    <div className="card">
      <label className="label">{label}</label>
      <p className="title">{course.title}</p>
      <p className="description">{course.short_description}</p>
      <div className="detailContainer">
        <div className="infoContainer">
          <p className="info">난이도 : 미설정</p>
          <p className="info">수업: 온라인</p>
          <p className="info">기간: 무제한</p>
        </div>
        <img
          className="logo"
          src={course.logo_file_url}
          alt={`${course.title} 로고`}
        />
      </div>
    </div>
  );
};

export default CourseCard;
