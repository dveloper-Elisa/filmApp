import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpt = () => {
  const [fname, setFname] = useState([]);
  const [pass, setPass] = useState([]);
  const [retype, setRetype] = useState([]);

  const clean = () => {
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("retype").value = "";
  };

  const signup = () => {
    const lname = document.getElementById("lname").value;
    const mail = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const allUsers = JSON.parse(localStorage.getItem("user")) || [];

    const usersFound = allUsers.some((user) => user.email === mail);
    if (usersFound) {
      alert("User already Exit");

      location.href = "/login";
      clean();

      return;
    }

    const newUser = {
      fname: fname,
      lname: lname,
      email: mail,
      Tel: phone,
      Password: pass,
    };

    allUsers.push(newUser);

    localStorage.setItem("user", JSON.stringify(allUsers));

    alert("Sign Up success full");

    clean();
  };
  return (
    <>
      <div className="flex flex-center justify-center mt-[50px]">
        <div className="flex  m-3 w-[70vw] ">
          <form className=" border border-red-400  p-2 w-[40rem] rounded-xl shadow-2xl">
            <h3 className=" bg-red-600 text-center animate-bounce rounded text-white  font-serif tracking-widest">
              Sign up Here
            </h3>
            <div className="flex md:flex">
              <div className="flex flex-col mx-3 w-[50%]">
                <input
                  type="text"
                  id="fname"
                  value={setFname[fname]}
                  onChange={(e) => {
                    e.preventDefault();
                    setFname(e.target.value);
                  }}
                  placeholder="First Name"
                  className="border rounded p-2 w-[100%] my-4 font-thin "
                />
                <input
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  className="border rounded p-2 w-[100%] my-4 font-thin"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="User Name or Email"
                  className="border rounded p-2 w-[100%] my-4 font-thin"
                />
              </div>
              <div className=" w-[50%]">
                <input
                  type="numbers"
                  id="phone"
                  placeholder="Phone number"
                  className="border rounded p-2 w-[100%] my-4 font-thin"
                />
                <input
                  type="password"
                  id="pass"
                  value={setPass[pass]}
                  onChange={(e) => {
                    e.preventDefault();
                    setPass(e.target.value);
                  }}
                  placeholder="Password"
                  className="border rounded p-2 w-[100%] my-4 font-thin"
                />
                <input
                  type="password"
                  id="retype"
                  value={setRetype[retype]}
                  onChange={(e) => {
                    e.preventDefault();
                    setRetype(e.target.value);
                  }}
                  placeholder="Retype Password"
                  className="border rounded p-2 w-[100%] my-4 font-thin"
                />
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();

                signup();
              }}
              className="w-[100%] text-white tracking-widest bg-red-600 py-1 rounded-md font-serif hover:bg-red-600 hover:animate-pulse"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
  //   };
};

export default SignUpt;
