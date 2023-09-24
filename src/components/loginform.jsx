import { useState } from "react";

const LoginForm = () => {
  const [uName, setuName] = useState([]);
  const [uPassword, setuPassword] = useState([]);
  const info = () => {};

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
            value="Login"
            onClick={(e) => {
              e.preventDefault();
              info();
              document.getElementById("ps").value = "";
              document.getElementById("nm").value = "";

              alert("user Name is:" + uName + "Password is: " + uPassword);
            }}
          />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
