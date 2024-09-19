import { useState } from "react";

interface DropdownProps {
  options: string[]; // Expecting an array of strings as options
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for dropdown open/close
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // State for selected option

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="inline-flex text-black">
      <div className="relative inline-flex min-w-[200px] rounded-md bg-white">
        <div onClick={toggleDropdown} className="w-full rounded-l-md px-4 py-2 cursor-pointer">
          {selectedOption || "All series"}
        </div>
        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="hover:text-gray-700 inline-flex h-full items-center justify-center rounded-r-md border-1 border-gray-10 px-2 text-gray-600 hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-6 right-0 z-10 mt-4 min-w-[200px] origin-top-right rounded-md border border-gray-100 bg-white shadow-lg">
            {options.map((option, index) => (
              <button
                type="button"
                onClick={onOptionClicked(option)}
                key={index}
                className="block w-full text-left"
              >
                <div className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50">
                  {option}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
