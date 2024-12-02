import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ActionBtn from "../components/ActionBtn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../utils/formValidator";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const url =
    "https://mbeventbackendserver.onrender.com/api/v1/forgot-password";
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const result = await axios.post(url, data);
      if (result.status === 200) {
        toast.success("password reset Link sent to your mail", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);

      // console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message || error?.message, {
        position: "top-center",
        autoClose: 7000,
      });
    }
  };
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center reset-container">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <Link to="/">
          <img src={logo} alt="logo" className="d-block mx-auto my-2" />
        </Link>
        <h1 className="fs-3">Forgot Password ?</h1>
        <p className="fs-5 my-3">
          No worries, we’ll send you instruction to help
        </p>
        <input
          type="email"
          placeholder="Email Address"
          className="form-control shadow-none w-100 border border-1 border-secondary mb-1 py-2"
          {...register("email")}
        />
        {errors.email && (
          <small className="text-danger">{errors.email.message}</small>
        )}
        <ActionBtn
          width={"100%"}
          content={isSubmitting ? "Resetting password..." : "Reset pssword"}
          type="submit"
          className={isSubmitting ? "mt-2 bg-secondary" : "specialbtn mt-2"}
          disable={isSubmitting}
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
