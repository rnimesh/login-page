import React, { FC, useState } from "react";
import NZlogo from "../../assets/logo.png";
import backgroundImage from "../../assets/bg.png";
import Form from "../molecule/LoginForm";
import Alert from "../atom/Alert";

export const LoginPage: FC = () => {
  const [closeAlert, setCloseAlert] = useState<any>(false);

  return (
    <div className="h-screen flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row ">
      <div className="left-side-container w-[794px] h-auto ">
        <div className="w-auto 2xl:flex xl:flex lg:flex md:flex hidden fixed z-0">
          <img
            alt="backgroundImage"
            src={backgroundImage}
            className="h-screen "
          />
        </div>
        <div className=" w-[794px] fixed z-10  pl-8 mt-[20px] 2xl:mt-[88px] xl:mt-[88px] lg:mt-[88px] md:mt-[88px]">
          <img alt="NZlogo" src={NZlogo} className="h-6 w-[258px]" />
          <p className="flex items-center text-[20px] md:text-[34px] lg:text-[20px] xl:text-[25px] 2xl:text-[34px] font-medium tracking-[-0.74px] text-[#2E3849] leading-[24px] md:leading-[20px] lg:leading-[25px] xl:leading-[35px] 2xl:leading-[48px] md:text-white lg:text-white xl:text-white 2xl:text-white mt-[10px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
            Every day, we help more people
            <br />
            build a better New Zealand.
          </p>
        </div>
      </div>
      <div className="right-side-container h-full md:w-[1126px] lg:w-[1126px] xl:w-[1126px] 2xl:w-[1126px] w-full flex flex-col justify-center items-center ">
        <Form setCloseAlert={setCloseAlert} />
        {closeAlert && (
          <div className="w-[400px] mt-14 flex justify-center items-center absolute top-2/3">
            <Alert
              title="Wrong username or password"
              message="Please check your login details and try again."
              setCloseAlert={setCloseAlert}
            />
          </div>
        )}
        <div className="absolute w-[305px] h-4 bottom-1 text-[11px] leading-4 text-center font-normal tracking-[0.05px] text-[#2E3849]">
          ©2019-2020 All Rights Reserved. NZ Safety Blackwoods®
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
