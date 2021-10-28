import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Router from "next/router";
import { useCookies } from "react-cookie";

//styles
import { LoginContainer } from "./styles";

//services
import { apiStrapi } from "../../services/api";

//hooks
import { useBooking } from "../../hooks";

const LoginSchema = yup.object().shape({
  email: yup.string().required("Email required"),
  password: yup
    .string()
    .required("Password required")
    .min(6, "Minimum 6 characters"),
});

export default function DashBoard() {
  const [loginOpen, setLoginOpen] = useState(false);
  const { handleUserLoginIn, user } = useBooking();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  useEffect(() => {
    if (user) {
      Router.push("/DashBoard/Painel");
    }
  }, [user]);

  const handleLogIn = async (value: any) => {
    try {
      await apiStrapi
        .post(
          "/auth/local",
          {
            identifier: value.email,
            password: value.password,
          }
          // {
          //   headers: {
          //     Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`,
          //   },
          // }
        )
        .then((response: any) => {
          const { data } = response;
          handleUserLoginIn(data);
          toast.success(`Welcome ${data.user.firstName}`);
          Router.push("/DashBoard/Painel");
        })
        .catch((error) => {
          // Handle error.
          if (error.message === "Network Error") {
            toast.error("Sorry something went wrong");
          } else {
            const { data } = error.response;
            if (data.error) {
              if (
                data.message[0].messages[0].message ===
                "Identifier or password invalid."
              ) {
                toast.error("E-mail or password incorrect");
              } else if (
                data.message[0].messages[0].id === "Auth.form.error.confirmed"
              ) {
                toast.error("Confirm your email bedore continuing");
              } else {
                toast.error("E-mail or password incorrect");
              }
            }
          }
        });
    } catch (err) {
      toast.error("Sorry something went wrong este aqui");
    }
  };
  return (
    <LoginContainer>
      <form onSubmit={handleSubmit(handleLogIn)}>
        <input {...register("email")} type='email' placeholder='Email' />
        {errors.email ? <span>{errors.email.message}</span> : ""}
        <input
          {...register("password")}
          type='password'
          placeholder='Password'
        />
        {errors.password ? <span>{errors.password.message}</span> : ""}
        <button type='submit'>Log In</button>
      </form>
    </LoginContainer>
  );
}
