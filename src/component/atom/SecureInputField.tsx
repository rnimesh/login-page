import React, { useState } from "react";

type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string | undefined
  placeholder: string
  value: string
};

export const SecureInputField: React.FC<InputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col w-full h-full">
      <label className="static w-full h-5 font-medium text-base leading-5 flex items-center tracking-[-0.18px] text-[#2E3849] flex-none order-none self-stretch grow-0 my-1">
        {props.label}
      </label>
      <div className="flex flex-row w-full justify-end items-center">
        <input
          type={showPassword ? 'text' : 'password'}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          className="md:w-[400] lg:w-[400px] xl:w-[400] 2xl:w-[400] w-full h-9 left-0 top-6 gap-[10px] bg-white border-[1px] border-solid border-[#CCD6E1] box-border shadow-sm rounded-[3px] shadow-[rgba(0, 45, 71, 0.05)] px-3 py-2 text-base tracking-[-0.18px] leading-5 font-normal text-neutral-500"
        />
        <button className="fixed mr-[13.7px]" onClick={()=>{setShowPassword(!showPassword)}}>
          {showPassword? <i className="ri-eye-off-line text-[10px]"></i> :  <i className="ri-eye-off-line text-[10px]"></i>}  
          </button>
        {/* {inputType === "password" ? (
          <button className="fixed mr-[13.7px]" onClick={()=>{setShowPassword}}>
            <i className="ri-eye-off-line text-[10px]"></i>
          </button>
        ) : (
          <button className="fixed mr-[13.7px]" onClick={handleInputType}>
            <i className="ri-eye-line text-[10px]"></i>
          </button>
        )} */}
      </div>
    </div>
  );
};

export default SecureInputField;
