import React from "react";
import { useState, useEffect } from "react";

const LoginForm = () => {
  const [uName, setuName] = useState([]);
  const [uPassword, setuPassword] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || [];
    if (user == null) {
      location.href = "/login";
    }
  });

  const info = () => {
    const dataUsers = JSON.parse(localStorage.getItem("user"));
    const isUserExist = dataUsers.find((user) => {
      user.mail === uName && user.Password === uPassword;
    });
    if (isUserExist) {
      alert("Welcome to home page");
      location.href = "/";
    } else {
      alert("user not found just signUp");
      location.href = "/signUp";
    }
  };

  return (
    <>
      <div className=" flex justify-center mt-20">
        <form className="border border-s p-3 shadow shadow-gray-300 w-[300px]">
          <div className="grid grid-col">
            <label className="my-2 font-sm">User Name</label>
            <input
              id="nm"
              type="text"
              value={setuName[uName]}
              onChange={(e) => {
                setuName(e.target.value);
              }}
              className="border rounded w-full p-2"
              placeholder="User Name"
            />
          </div>

          <div className="grid grid-col">
            <label className="my-2 font-sm">Password</label>
            <input
              id="ps"
              type="password"
              value={setuPassword[uPassword]}
              onChange={(e) => {
                setuPassword(e.target.value);
              }}
              className="border rounded w-full p-2"
              placeholder="Password"
            />
          </div>
          <input
            type="submit"
            className="w-full rounded my-4 text-white p-3 cursor-pointer bg-red-600"
            value={"Sign Up"}
            onClick={(e) => {
              e.preventDefault();
              info();
            }}
          />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
