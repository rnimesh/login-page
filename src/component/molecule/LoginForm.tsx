import React, { FC, useState } from "react";
import {  Button, InputField, SecureInputField } from "../atom";

interface InputProps {
  setCloseAlert: any;
}

export const Form: FC<InputProps> = ({ setCloseAlert }) => {
  const [username, SetUserName] = useState("");
  const [password, SetPassword] = useState("");

  const handleClick = () => {
    if (
      username === "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)
    ) {
      setCloseAlert(true);
    } else if (password === "") {
      setCloseAlert(true);
    } else if (username === "abc@gmail.com" && password === "test") {
      alert("you logged in");
    }
  };

  return (
    <div className="md:w-[400] lg:w-[400px] xl:w-[400] 2xl:w-[400] w-3/4">
      <h2 className="font-medium text-xl tracking-[-0.33px] text-[#2E3849] mb-7">
        To continue, sign into your account
       
      </h2>
      <div className="mb-6 w-full">
        <InputField
          handleChange={(e:any) => {
            SetUserName(e.target.value);
          }}
          value={username}
          label="Username"
          placeholder="name@domain.com"
        />
      </div>
      <div className="mb-8 w-full">
        <SecureInputField
          handleChange={(e:any) => {
            SetPassword(e.target.value);
          }}
          value={password}
          label="Password"
          placeholder="••••••••"
        />
      </div>
      <div className="h-9 flex flex-row justify-center items-center">
        <div className="h-9 w-[146px] flex flex-row justify-start md:mr-[179px] lg:mr-[179px] xl:mr-[179px] 2xl:mr-[179px] mr-[55px] ">
          <input type="checkbox" className="mr-2 h-full w-4" />
          <p className="h-full text-sm font-normal text-neutral-800 flex justify-center items-center">
            Keep me logged in
          </p>
        </div>
        <div className="h-9 w-[75px] flex-row justify-end items-center">
          <Button handleClick={handleClick} title="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default Form;
