import { useState } from "react";

interface ChipItemProps {
  option: {
    id: string;
    name: string;
  };
  handleChip: (id: string) => void;
  key: string;
}

const Chip = ({ option, handleChip }: ChipItemProps) => {
  const [isSelected, setSelected] = useState<boolean>(false);

  return (
    <button
      onClick={() => {
        handleChip(option.id);
        setSelected(!isSelected);
      }}
    >
      {option.name}
      {isSelected ? "선" : "낫"}
    </button>
  );
};

export default Chip;
