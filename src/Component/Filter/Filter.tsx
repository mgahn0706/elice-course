import Chip from "./Chip/Chip";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Filter = () => {
  const isFree = ["무료", "유료"];
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const handleChip = (option: string) => {
    !selectedOption.includes(option)
      ? setSelectedOption([...selectedOption, option])
      : setSelectedOption(
          selectedOption.filter((optionItem) => option !== optionItem)
        );
    console.log(selectedOption, option);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {
    navigate({
      pathname: "/all",
      search: `?price=${selectedOption}`,
    });
  }, [selectedOption]);

  return (
    <div>
      {isFree.map((optionItem) => (
        <Chip key={optionItem} option={optionItem} handleChip={handleChip} />
      ))}
    </div>
  );
};

export default Filter;
