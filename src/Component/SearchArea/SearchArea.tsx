import { useLocation, useNavigate } from "react-router";
import qs from "qs";
const SearchArea = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSearch = (input: string) => {
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    const newQuery = {
      ...query,
      keyword: input,
    };

    const formattedQuery = new URLSearchParams(newQuery).toString();
    console.log(newQuery);
    console.log(formattedQuery);

    input.length !== 0 || query.price
      ? navigate(`/all?${formattedQuery}`)
      : navigate(`/`);
  };

  return (
    <input
      placeholder="배우고 싶은 언어, 기술을 검색해보세요"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
    />
  );
};

export default SearchArea;
