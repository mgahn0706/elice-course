import Chip from "./Chip/Chip";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import qs from "qs";

interface ChipQueryType {
  price: string[] | undefined;
}

const Filter = () => {
  const isFree = [
    {
      name: "무료",
      id: "free",
    },
    {
      name: " 유료",
      id: "paid",
    },
  ];
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const handleFilter = (optionList: string[]) => {
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    const newQuery: ChipQueryType = {
      ...query,
      price: optionList,
    };

    if (!optionList) {
      delete newQuery.price;
    }

    const formattedQuery = qs.stringify(newQuery, { arrayFormat: "repeat" });

    optionList.length !== 0 || query.keyword
      ? navigate(`/all?${formattedQuery}`)
      : navigate(`/`);
  };

  useEffect(() => {
    handleFilter(selectedOption);
  }, [selectedOption]);

  const handleChip = (id: string) => {
    !selectedOption.includes(id)
      ? setSelectedOption([...selectedOption, id])
      : setSelectedOption(selectedOption.filter((idItem) => id !== idItem));
  };

  return (
    <div>
      {isFree.map((optionItem) => (
        <Chip key={optionItem.id} option={optionItem} handleChip={handleChip} />
      ))}
    </div>
  );
};

export default Filter;
