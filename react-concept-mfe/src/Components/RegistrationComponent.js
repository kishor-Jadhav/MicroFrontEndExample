import React,{useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../StoreConfig/ThunkServices/RegistrationSlice";
import { RegistrationComponentSchema } from "../Schemas/RegistrationComponentSchema";
 
 

const RegistrationComponent = () => {
  const dispatch = useDispatch();
   const logindata = useSelector((state) => state.userConfig.value);
 
    

   
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(RegistrationComponentSchema)
  });

  const onSubmit = async (data) => {
   // const result = await dispatch(registerUser(data));

    // if (registerUser.fulfilled.match(result)) {
    //   alert("Registration Successful");
    // }
  };

  return (
    <div>
      <h2>Register User</h2>
      <div>
        Logged in User from State Shell Store: <pre>{JSON.stringify(logindata, null, 2)}</pre>
      </div>
       
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* Name */}
        <input {...register("name")} placeholder="Name" />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        {/* Email */}
        <input {...register("email")} placeholder="Email" />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        {/* Mobile */}
        <input {...register("mobile")} placeholder="Mobile" />
        {errors.mobile && <p style={{ color: "red" }}>{errors.mobile.message}</p>}

        {/* Password */}
        <input {...register("password")} type="password" placeholder="Password" />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

        {/* Confirm Password */}
        <input {...register("confirmPassword")} type="password" placeholder="Confirm Password" />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}

         

        <button  >
          {  "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationComponent;