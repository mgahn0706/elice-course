import { useEffect, useState } from "react";

interface ChipItemProps {
  option: {
    id: string;
    name: string;
  };
  handleChip: (id: string) => void;
  key: string;
  selectedOption: string[];
}

const Chip = ({ option, handleChip, selectedOption }: ChipItemProps) => {
  return (
    <button
      onClick={() => {
        handleChip(option.id);
      }}
    >
      {option.name}
      {selectedOption.includes(option.id)? "선" : "낫"}
    </button>
  );
};

export default Chip;
