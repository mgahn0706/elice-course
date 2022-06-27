import { useLocation, useNavigate } from "react-router";
import qs from "qs";
import { useEffect, useState } from "react";

interface SearchQueryType {
  keyword: string | undefined;
}

const SearchArea = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchKeyword, setSearchKeyword] = useState<string | undefined>("");

  const handleSearch = (input: string) => {
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    const newQuery: SearchQueryType = {
      ...query,
      keyword: input,
    };
    if (!input) {
      delete newQuery.keyword;
    }
    setSearchKeyword(input);
    const formattedQuery = qs.stringify(newQuery, { arrayFormat: "repeat" });
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
      value={searchKeyword}
    />
  );
};

export default SearchArea;
