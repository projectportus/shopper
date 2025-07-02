import React from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase.js";
import { useNavigate } from "react-router-dom";
import useSignUp from "./useSignUpValid";

const SignUpPage = ({ toggleAuth }) => {
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};

    if (!values.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(values.firstName)) {
      errors.firstName = "First name must contain only letters";
    }

    if (!values.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(values.lastName)) {
      errors.lastName = "Last name must contain only letters";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    resetForm,
    setTouched,
    setErrors,
  } = useSignUp(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
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
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        console.log("User registered:", user);
        resetForm();

        // Можешь сделать редирект или показать сообщение
        navigate("/auth/login");
      } catch (error) {
        console.error("Firebase sign up error:", error.message);

        // Обработка типичных ошибок:
        if (error.code === "auth/email-already-in-use") {
          setErrors({ email: "This email is already in use" });
        } else {
          setErrors({ email: "Sign up failed, please try again" });
        }
      }
    }
  };

  return (
    <div className="w-[95%] h-[100%] flex flex-col p-3 overflow-hidden">
      <div className="gap-5">
        <div className="text-[30px] font-bold">
          <Link to="/">Furniro</Link>
        </div>
        <div className="text-[24px] text-[#B88E2F] font-[600] mt-2">
          Create Account
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-2 overflow-hidden"
      >
        <div className="relative flex flex-col gap-1 mb-2">
          <label htmlFor="firstName" className="text-[16px] font-medium">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="border border-gray-400 h-[35px] rounded-[5px] p-3 outline-none"
            placeholder="Johny"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          {touched.firstName && errors.firstName && (
            <span className="absolute text-[#B88E2F] text-sm top-full left-0 mt-1">
              {errors.firstName}
            </span>
          )}
        </div>

        <div className="relative flex flex-col gap-1 mb-2">
          <label htmlFor="lastName" className="text-[16px] font-medium">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="border border-gray-400 h-[35px] rounded-[5px] p-3 outline-none"
            placeholder="Smith"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {touched.lastName && errors.lastName && (
            <span className="absolute text-[#B88E2F] text-sm top-full left-0 mt-1">
              {errors.lastName}
            </span>
          )}
        </div>

        <div className="relative flex flex-col gap-1 mb-2">
          <label htmlFor="email" className="text-[16px] font-medium">
            Email
          </label>
          <input
            name="email"
            type="text"
            className="border border-gray-400 h-[35px] rounded-[5px] p-3 outline-none"
            placeholder="abc@gmail.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email && (
            <span className="absolute text-[#B88E2F] text-sm top-full left-0 mt-1">
              {errors.email}
            </span>
          )}
        </div>

        <div className="relative flex flex-col gap-1 mb-2">
          <label htmlFor="password" className="text-[16px] font-medium">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="border border-gray-400 h-[35px] rounded-[5px] p-3 outline-none"
            placeholder="*********"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {touched.password && errors.password && (
            <span className="absolute text-[#B88E2F] text-sm top-full left-0 mt-1">
              {errors.password}
            </span>
          )}
        </div>

        <div className="relative flex flex-col gap-1 mb-2">
          <label htmlFor="confirmPassword" className="text-[16px] font-medium">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            className="border border-gray-400 h-[35px] rounded-[5px] p-3 outline-none"
            placeholder="*********"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <span className="absolute text-[#B88E2F] text-sm top-full left-0 mt-1">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#B88E2F] mt-5 font-[600] text-white h-[40px] rounded-[5px] p-3 flex justify-center items-center cursor-pointer"
        >
          Sign Up
        </button>
      </form>

      <div className="w-full flex justify-start mt-3">
        <Link
          to="/auth/login"
          className="relative text-black group cursor-pointer"
        >
          Already have an account? Login
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
