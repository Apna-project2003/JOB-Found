import React, { useContext, useEffect, useState } from "react";
import PersonIcon from "../assets/avatar.png";
import EmailIcon from "../assets/email-file.png";
import Password from "../assets/password.png";

import Cross from "../assets/icons8-cross-50.png";
import { AppContext } from "../context/AppContext";
import Uploadareaicon from "../assets/icons8-upload-to-the-cloud-48.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecruiterLogin = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(false);
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

  const { setshowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData } =
    useContext(AppContext);
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (state == "Sign Up" && !isTextDataSubmited) {
    return   setIsTextDataSubmited(true);
    }

    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/company/login", {
          email,
          password,
        });

        if (data.success) {
        
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem("companyToken", data.token);
          setshowRecruiterLogin(false);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
        
      }
      
      else{


        const formData = new FormData()
        formData.append('name',name)
         formData.append('password',password)
          formData.append('email',email)
           formData.append('image',image)
            const {data} = await axios.post(backendUrl+ '/api/company/register',formData)

            if(data.success){
             
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem("companyToken", data.token);
          setshowRecruiterLogin(false);
          navigate("/dashboard");
            }
            else{
              toast.error(data.message)
            }
        }
    } catch (error) {
       toast.error(error.message)
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop:blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter{state}
        </h1>
        <p className="text-sm">welcome back! Please sign in to continue</p>
        {state === "Sign Up" && isTextDataSubmited ? (
          <>
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className="rounded"
                  src={image ? URL.createObjectURL(image) : Uploadareaicon}
                  alt=""
                />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                />
              </label>
              <p>
                Upload Company <br />
                logo
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={PersonIcon} alt="" className="h-5 w-5" />
                <input
                  className="outline-none text-sm"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
            )}

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={EmailIcon} alt="" className="h-5 w-5" />

              <input
                className="outline-none text-sm"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email Id"
                required
              />
            </div>

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={Password} alt="" className="h-5 w-5" />
              <input
                className="outline-none text-sm"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </>
        )}
        {state === "Login" && (
          <p className="text-sm text-blue-600 mt-4 cursor-pointer">
            Forgot password ?
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full mt-4"
        >
          {state === "Login"
            ? "login"
            : isTextDataSubmited
            ? "create account"
            : "next"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account ?{" "}
            <span className="text-blue-600" onClick={() => setState("Sign Up")}>
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account ?{" "}
            <span className="text-blue-600" onClick={() => setState("Login")}>
              Login
            </span>
          </p>
        )}
        <img
          onClick={(e) => setshowRecruiterLogin(false)}
          className="absolute top-5 right-5 cursor-pointer"
          src={Cross}
          alt=""
        />
      </form>
    </div>
  );
};

export default RecruiterLogin;

// 3.51
