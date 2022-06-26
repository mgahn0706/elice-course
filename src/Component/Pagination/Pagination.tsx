interface PaginationProps {
  currPage: number;
}

const Pagination = ({ currPage }: PaginationProps) => {
  return (
    <div>
      <button>{currPage - 2}</button>
      <button>{currPage - 1}</button>
      <button>{currPage}</button>
      <button>{currPage + 1}</button>
      <button>{currPage + 2}</button>
    </div>
  );
};

export default Pagination;
