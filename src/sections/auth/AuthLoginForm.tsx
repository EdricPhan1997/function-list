import React from "react";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { FormProvider as Form, UseFormReturn } from "react-hook-form";

import { useForm } from "react-hook-form";
import { useFormContext, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { PATH_AUTH } from "../../routes/paths";

import { useAuthContext } from "src/auth/useAuthContext";

type FormValuesProps = {
  Username: string;
  Password: string;
  afterSubmit?: string;
};

const AuthLoginForm = () => {
  const { login } = useAuthContext();

  const LoginSchema = Yup.object().shape({
    Username: Yup.string().email("Email must be a valid email").required("Email is required"),
    Password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    Username: "",
    Password: "",
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    console.log("data", data);
    // FormData
    try {
      const formData: any = new FormData();
      formData.append("Username", data.Username);
      formData.append("Password", data.Password);

      await login(formData);
      reset();
    } catch (error: any) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.resultMessage || "",
      });
    }
  };

  return (
    <div>
      <h1>AuthLoginForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input value={"admin@gmail.com"} type="text" placeholder="Enter your email" {...register("Username")} />
        </div>
        <div>
          <input value={"Cambrige@123"} type="text" placeholder="Enter your email" {...register("Password")} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AuthLoginForm;
