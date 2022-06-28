import { useEffect, useState } from "react";
import "../../../Styles/Components/_pagination.scss"
interface PaginationProps {
  currPage: number;
  courseLength: number;
  setCurrPage: (page: number) => void;
}

const Pagination = ({
  currPage,
  setCurrPage,
  courseLength,
}: PaginationProps) => {
  const [pageList, setPageList] = useState<number[]>([]);
  const calculatePage = () => {
    const newPageList = [
      currPage - 4,
      currPage - 3,
      currPage - 2,
      currPage - 1,
      currPage,
      currPage + 1,
      currPage + 2,
      currPage + 3,
      currPage + 4,
    ].filter((num) => num > 0 && num <= Math.ceil(courseLength / 20));
    setPageList(newPageList);
  };

  useEffect(() => {
    calculatePage();
  }, [currPage, courseLength]);

  return (
    <div className="pagination">
      <button className={`${currPage===1 ? "disabledArrow" : "Arrow"}`}> ← </button>
      {pageList.map((item) => {
        return (
          <button
              className={currPage===item ? "currPage" : "Page"}
            key={item}
            onClick={() => {
              setCurrPage(item);
            }}
          >
            {item}
          </button>
        );

      })}
      <button  className={`${currPage===Math.ceil(courseLength / 20) ? "disabledArrow" : "Arrow"}`}> → </button>
    </div>
  );
};

export default Pagination;
