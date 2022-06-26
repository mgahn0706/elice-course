const CourseBody = () => {
  const courseDummy = ["C++", "React", "JavaScript"];

  return (
    <div>
      <p>전체 {courseDummy.length}개</p>

      {courseDummy.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default CourseBody;
