import * as Yup from "yup";

export const signupSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("please enter your name"),
    age:Yup.number().min(1).max(25).required("please enter your age"),
    gmail:Yup.string().email().required("please enter your email"),
    password:Yup.string().min(6).max(25).required("please enter your password"),
    mobileNo:Yup.string()
    .required("Required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number"),
    city:Yup.string().required("please enter your city"),
    underAge: Yup.boolean().required("Required"),
    gender: Yup.string().required("Required"),
    language: Yup.array()
      .required("Required")
      .min(1, "Select at least one language"),       

})
export const editSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("please enter your name"),
    age:Yup.number().min(1).max(25).required("please enter your age"),
    gmail:Yup.string().email().required("please enter your email"),
    mobileNo:Yup.string()
    .required("Required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number"),
    city:Yup.string().required("please enter your city"),
    underAge: Yup.boolean().required("Required"),
    gender: Yup.string().required("Required"),
    language: Yup.array()
      .required("Required")
      .min(1, "Select at least one language"),       

})
