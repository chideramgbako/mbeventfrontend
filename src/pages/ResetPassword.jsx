import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ActionBtn from "../components/ActionBtn";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { resetPasswordScchema } from "../utils/formValidator";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";
const ResetPassword = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const toggleShow = () => setShow(!show);
  const toggleShow2 = () => setShow2(!show2);
  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPasswordScchema),
  });
  const location = useLocation();

  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get("token");

  const url = "https://mbeventbackendserver.onrender.com/api/v1/reset-password";
  const onSubmit = async (data) => {
    // Handle form submission logic here

    if (token) {
      const newPassword = data.password;
      console.log(newPassword, token);
      const body = { newPassword, token };

      try {
        const result = await axios.post(url, body);
        if (result.status === 200) {
          toast.success("password reset successful");
          redirect("/login");
        }
      } catch (error) {
        console.log(error?.response?.data?.message);
        toast.error(error?.response?.data?.message || error?.message, {
          position: "top-center",
          autoClose: 7000,
        });
      }
    }
  };

  return (
    <div>
      <div className="vh-100 d-flex justify-content-center align-items-center reset-container">
        <form onSubmit={handleSubmit(onSubmit)} className="p-2">
          <Link to="/">
            <img src={logo} alt="logo" className="d-block mx-auto my-2" />
          </Link>
          <h1 className="fs-3">Reset Password</h1>
          <p className="fs-5 my-3 fw-medium">Enter Your New Password</p>
          <div className="position-relative w-100">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="form-control shadow-none w-100 border border-1 border-secondary mb-1 py-2"
              {...register("password")}
            />
            <button
              type="button"
              onClick={toggleShow}
              className="bg-transparent border-0 text-secondary position-absolute eye"
            >
              {show ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>

          <div className="position-relative w-100">
            <input
              type={show2 ? "text" : "password"}
              placeholder="Confirm Password"
              className="form-control shadow-none w-100 border border-1 border-secondary mb-1 mt-3 py-2"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={toggleShow2}
              className="bg-transparent border-0 text-secondary position-absolute eye"
            >
              {show2 ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {errors.confirmPassword && (
              <small className="text-danger">
                {errors.confirmPassword.message}
              </small>
            )}
          </div>
          <ActionBtn
            width={"100%"}
            content={isSubmitting ? "Resetting Password" : "Reset Password"}
            type="submit"
            className="mt-3 specialbtn"
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
