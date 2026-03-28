import React,{useState} from "react";
import {useForm} from "react-hook-form";
import { loginAPI } from "../Services/authService"; 
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {loginStyles} from "../Styles/LoginStyle";
import { useSelector,useDispatch } from "react-redux";
import { setUserConfig } from "shell/shellstore";
import { Link } from "react-router-dom";
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const LoginComponent = () => {
    const [useApierror, setApiError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit, formState:{errors, isSubmitting} } = useForm({
        resolver: yupResolver(schema)
    });
    const onFormSubmit = async (data)=>{
        setApiError("");
        try{
            const loginresp = await loginAPI(data);
            console.log("Login successful:", loginresp.data);
            localStorage.setItem("token", loginresp.data.token);            
            dispatch(setUserConfig(loginresp.data.user));
            alert("Login Successful!");
        }catch(error){
            localStorage.setItem("token", "");
            setApiError("Invalid email or password");
        }
    }

    return(
        <>
           <div>
                <h1>React Microfrontend App</h1>
                <h3>React Internal Routes</h3>
           </div>
        
              <nav style={{ marginBottom: "20px" }}>
                <Link to="/">Home</Link> |
                <Link to="/accounts-entry"> Accounts Entry</Link> |
                <Link to="/react/accounts-list"> Accounts List</Link>
              </nav>
        
        <div style={loginStyles.container}>
            <form onSubmit ={handleSubmit(onFormSubmit)} style={loginStyles.form}>
                <h2>Login</h2>
                {useApierror && (<div style={loginStyles.apiError}>{useApierror}</div>)}
                 {/* Email */}
                 <div style={loginStyles.field}>
                    <label>Email:</label>
                    <input type="text" {...register("email")} placeholder="Enter Email"/>
                    {errors.email && (<span style={loginStyles.error}>{errors.email.message}</span>)}
                 </div>
                 <div style={loginStyles.field}>
                    <label>Password:</label>
                    <input type="password" {...register("password")} placeholder="Enter Password"/>
                    {errors.password && (<span style={loginStyles.error}>{errors.password.message}</span>)}
                 </div>
                 <button type="submit" disabled={isSubmitting}> {isSubmitting ? "Logging in..." : "Login"}</button>

            </form>
         </div>
         </>
    )
}
export default LoginComponent;