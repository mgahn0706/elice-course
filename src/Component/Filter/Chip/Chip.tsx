import { useEffect, useState } from "react";

interface ChipItemProps {
  option: {
    id: string;
    name: string;
    isSelected: boolean;
  };
  handleChip: (id: string) => void;
  key: string;
}

const Chip = ({ option, handleChip }: ChipItemProps) => {
  return (
    <button
      onClick={() => {
        handleChip(option.id);
      }}
    >
      {option.name}
      {option.isSelected ? "선" : "낫"}
    </button>
  );
};

export default Chip;
