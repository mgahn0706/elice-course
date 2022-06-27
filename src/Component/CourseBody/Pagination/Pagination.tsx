import { useEffect, useState } from "react";

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
    <div>
      {pageList.map((item) => {
        return (
          <button
            key={item}
            onClick={() => {
              setCurrPage(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
