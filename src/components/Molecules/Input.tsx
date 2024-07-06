import { ReactNode } from "react";
import { Flex } from "../Atoms/Flex";
interface InputProps<T> {
    icon?: ReactNode;
    type: 'text' | 'number' | 'email'; 
    placeholder: string;
    values: T; 
    onChange: (value: T) => void; 
  }
  
  function Input<T>({ icon, type, placeholder, values, onChange }: InputProps<T>) {
    return (
      <div className="focus-within:border focus-within:border-blue-500 p-4">
        <Flex>
          {icon && icon}
          <input
            className="focus:outline-none"
            type={type}
            placeholder={placeholder}
            // value={values}
            onChange={(e) => onChange(e.target.value as T)} 
          />
        </Flex>
      </div>
    );
  }
  
  export default Input;