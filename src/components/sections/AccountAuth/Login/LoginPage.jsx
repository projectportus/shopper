import React from "react";
import { Link } from "react-router-dom";
import useLogin from "./useLoginValid";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "@/firebase/firebase.js"; // путь к твоему firebase.js

const LoginPage = ({ switchToSignUp }) => {
const navigate = useNavigate();
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  if (!values.email.trim()) {
      errors.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid email format";
  }

  return errors;
};

 const { values, errors, touched, handleChange, handleBlur, resetForm,setTouched,setErrors } = useLogin(
  { email: "", password: "" },
  validate
);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formErrors = validate(values);

  const touchedFields = Object.keys(values).reduce((acc, key) => {
    acc[key] = true;
    return acc;
  }, {});
  setTouched(touchedFields);
  setErrors(formErrors);

  if (Object.keys(formErrors).length === 0) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
      resetForm();
      navigate("/");
    } catch (error) {
      console.error("Firebase login error:", error.message);
      setErrors({ email: "Invalid credentials", password: " " });
    }
  } else {
    console.log("Errors:", formErrors);
  }
};




  return (
    <div className="w-[95%] h-[80%] flex flex-col gap-[20px]">
      <div className="text-[30px] font-bold ">
        <Link to="/">Furniro</Link>
      </div>
      <div className="text-[24px] text-[#B88E2F] font-[600] ">Sign in to your account</div>
      <p className="w-[90%] text-gray-300">
        Find information about your current and previous orders, or edit your
        account details.
      </p>
      <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="bg-white flex flex-col">
            <label htmlFor="email" className="text-[16px] font-medium">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={values.email}
              className="border border-gray-400 h-[35px] rounded-[5px] p-3 outline-none flex flex-col justify-center items-center"
              placeholder="abc@gmail.com"
              onChange={handleChange}
              onBlur={handleBlur} 
            />
           {touched.email && errors.email && <span className="text-[#B88E2F] font-semibold  p-1">{errors.email}</span>}
          </div>
          <div className="bg-white flex flex-col">
            <label htmlFor="email" className="text-[16px] font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              className="border border-gray-400 h-[35px] rounded-[5px] p-3 outline-none flex flex-col justify-center items-center"
              placeholder="*********"
              onChange={handleChange}
              onBlur={handleBlur} 
            />
           {touched.password && errors.password && <span className="text-[#B88E2F] font-semibold p-1 ">{errors.password}</span>}
          </div>
          <button type="submit" className="bg-[#B88E2F] font-[600] text-white h-[40px] rounded-[5px] p-3 flex justify-center items-center cursor-pointer">
            Login
          </button>
        </form>
      </div>
      <div className=" w-full flex flex-col justify-around items-start gap-5">
        <Link
          to="/auth/sign-up"
          className="relative text-black group cursor-pointer"
        >
          Don't have an account? Sign up
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <button className="relative text-black group cursor-pointer">
          Forgot password?
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
