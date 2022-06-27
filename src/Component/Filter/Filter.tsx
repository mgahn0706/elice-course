import Chip from "./Chip/Chip";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import qs from "qs";

interface ChipQueryType {
  price: string[] | undefined;
}

interface OptionType {
  id: string;
  name: string;
  isSelected: boolean;
}

const Filter = () => {
  const [optionList, setOptionList] = useState<OptionType[]>([
    {
      name: "무료",
      id: "free",
      isSelected: false,
    },
    {
      name: " 유료",
      id: "paid",
      isSelected: false,
    },
  ]);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [isFirstRender, setFirstRender] = useState(true);

  const getQueryChipData = () => {
    const params = new URLSearchParams(location.search);
    const queryPriceList = params.getAll("price");
    setSelectedOption(queryPriceList);
    queryPriceList.forEach((id) => {
      handleChip(id);
    });
  };

  useEffect(() => {
    getQueryChipData();
  }, []);

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
    isFirstRender ? setFirstRender(false) : handleFilter(selectedOption);
  }, [selectedOption]);

  const handleChip = (id: string) => {
    const newOptionList = optionList.map((opt) => {
      if (opt.id === id) {
        return Object.assign({}, opt, { isSelected: !opt.isSelected });
      } else {
        return opt;
      }
    });
    setOptionList(newOptionList);

    !selectedOption.includes(id)
      ? setSelectedOption([...selectedOption, id])
      : setSelectedOption(selectedOption.filter((idItem) => id !== idItem));
  };

  return (
    <div>
      {optionList.map((optionItem) => (
        <Chip key={optionItem.id} option={optionItem} handleChip={handleChip} />
      ))}
    </div>
  );
};

export default Filter;
