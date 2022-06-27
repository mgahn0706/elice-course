import { useLocation, useNavigate } from "react-router";
import qs from "qs";
import { useEffect, useState } from "react";

interface SearchQueryType {
  keyword: string | undefined;
}

const SearchArea = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const getQueryData = () => {
    const params = new URLSearchParams(location.search);
    const search = params.get("keyword");
    setSearchKeyword(search ? search : "");
  };

  useEffect(() => {
    getQueryData();
  }, []);

  const handleSearch = (input: string) => {
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    setSearchKeyword(input);
    const newQuery: SearchQueryType = {
      ...query,
      keyword: input,
    };
    if (!input) {
      delete newQuery.keyword;
    }

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
