import "../../../Styles/Components/_chip.scss"

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
      className={`chip${selectedOption.includes(option.id)? "Enabled" : "Disabled"}`}
    >
      {option.name}

    </button>
  );
};

export default Chip;
