import { useState } from "react";

interface ChipItemProps {
  option: string;
  handleChip: (option: string) => void;
}

const Chip = ({ option, handleChip }: ChipItemProps) => {
  const [isSelected, setSelected] = useState<boolean>(false);

  return (
    <button
      onClick={() => {
        handleChip(option);
        setSelected(!isSelected);
      }}
    >
      {option}
    </button>
  );
};

export default Chip;
