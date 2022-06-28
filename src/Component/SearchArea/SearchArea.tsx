import { useLocation, useNavigate } from "react-router";
import qs from "qs";
import { useEffect, useState } from "react";
import "../../Styles/Components/_searchArea.scss";
import { debounce } from "lodash";

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
    const newQuery: SearchQueryType = {
      ...query,
      keyword: input,
    };
    if (!input) {
      delete newQuery.keyword;
    }

    const formattedQuery = qs.stringify(newQuery, {
      arrayFormat: "repeat",
    });

    input.length !== 0 || query.price
      ? navigate(`/all?${formattedQuery}`)
      : navigate(`/`);
  };

  return (
    <div className="searchArea">
      <div className="icon">
        <img
          className="searchIcon"
          src="https://cdn.icon-icons.com/icons2/1462/PNG/512/036search_100009.png"
          alt="검색아이콘"
        />
      </div>

      <input
        className="input"
        placeholder="배우고 싶은 언어, 기술을 검색해보세요"
        onChange={(e) => {
          setSearchKeyword(e.target.value);
          handleSearch(e.target.value);
        }}
        value={searchKeyword}
      />
    </div>
  );
};

export default SearchArea;
