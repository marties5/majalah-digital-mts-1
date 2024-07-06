"use client";
import { AnimateRendering } from "@/utils/AnimateRendering";
import { debounce } from "@/utils/Debounce";
import { useOutsideClick } from "@/utils/OutsiteClicked";
import { cn } from "@/lib/utils";
import * as React from "react";
import "./Select.css";

interface SelectProps {
  options?: any;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const Select = ({
  options,
  placeholder = "Select",
  onChange,
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [empty, setEmpty] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any[]>([]);

  const handleSearch = debounce((query: any) => {
    const lowercaseQuery = query.target.value.toLowerCase();
    const filteredData = options.filter((option: any) =>
      option.label.toLowerCase().includes(lowercaseQuery)
    );
    if (filteredData.length !== 0) {
      setEmpty(false);
      setData(filteredData);
    } else {
      setEmpty(true);
    }
  }, 200);

  const Option = AnimateRendering({
    isOpen,
    data: data.length !== 0 ? data : options,
  });

  const refOutsideClick = React.useRef<HTMLDivElement>(null);

  const handleChange = (event: any) => {
    const selectedValue = event;
    onChange && onChange(selectedValue);
  };

  useOutsideClick(refOutsideClick, () => {
    setIsOpen(false);
    setData([]);
  });
  return (
    <div
      className="grid grid-cols-1 relative max-w-80 w-full"
      ref={refOutsideClick}
    >
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          setData([]);
        }}
        className=" flex justify-between delay-75 items-center h-10 border-b border-slate-300 p-2 text-left cursor-pointer duration-300 "
      >
        <span className="ml-1">
          {selectedOption ? selectedOption : placeholder}
        </span>
        <span
          className={
            isOpen
              ? "delay-200 ease-out rotate-180 duration-500"
              : "delay-200 ease-in duration-500 rotate-0"
          }
        >
          &#9662;
        </span>
      </div>
      <div
        className={`
        absolute max-h-[500px] overflow-auto shadow-md rounded-b-xl translate-y-11 z-10 divide-slate-200 w-full py-2 px-3 border border-slate-200 bg-slate-50
        ${!isOpen ? "animate-dropdown-out" : " animate-dropdown-in "}
        `}
      >
        <input
          className="focus:outline-2 outline-purple-800 border bg-transparent py-1.5 w-full px-2 rounded"
          placeholder="Cari.."
          type="text"
          onChange={handleSearch}
          autoFocus
        />
        {empty ? (
          <div>
            Data Not Found{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M20 21h-8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2m-8-4v2h8v-2Z"
              />
              <path
                fill="currentColor"
                d="M28 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-2 24H6V12h20Zm2-18H4V6h24z"
              />
            </svg>
          </div>
        ) : (
          <ul>
            {(data.length === 0 ? Option : data).map((option: any) => (
              <li
                key={option.value}
                onClick={() => {
                  handleChange(option.value);
                  setSelectedOption(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "text-gray-800 option-animate p-1 my-2  align-bottom border-t flex items-center px-2  cursor-pointer",
                  selectedOption === option.value && "bg-slate-200 rounded-b-md"
                )}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
