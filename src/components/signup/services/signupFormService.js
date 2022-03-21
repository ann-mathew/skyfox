import { object, string } from "yup";

export const initialValues = {
    username: '',
    password: ''
};

export const formSchema = object({
    name: string("Enter name")
        .required("Name is required"),
    email: string("Enter email")
        .required("Email is required")
        .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/, "Enter valid Email ID"),
    phone: string("Enter Phone Number")
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Phone number should be 10 digits"),
    age: string("Select age")
        .required("Age is required"),
    password: string("Enter password")
        .required("Password is required")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
        "include: atleast one special character, a number, a capital letter with minimum 8 and maximum 64 characters"),
    cpassword: string("Confirm Password")
        .required("Enter password again")
});
