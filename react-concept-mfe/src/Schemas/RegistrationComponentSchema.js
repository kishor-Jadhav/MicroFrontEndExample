import * as yup from "yup";

 export const  RegistrationComponentSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  mobile: yup
    .string()
    .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
    .required("Mobile number is required"),
});
