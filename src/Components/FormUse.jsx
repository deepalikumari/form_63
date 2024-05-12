import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormUse = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitted },
  } = useForm();

  const formSubmitHandler = (data) => {
    console.log(data);
    toast.success("Form Submitted!")
  };

  return (
    <div className="container">
    <ToastContainer />

        <h2>FILL FORM</h2>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {isSubmitSuccessful && <div className="success">
            <p>Registration Done</p>
          </div>}

          <label>FIRST NAME :</label>
          <input
            type="text"
            name="firstName"
            {...register("firstName", {
              required: "Fill first name",
              minLength: {
                value: 5,
                message: "Minimum 5 characters required!",
              },
              maxLength: {
                value: 7,
                message: "Max 7 characters required!",
              },
            })}
          />
          {errors.firstName && <p className="err">{errors.firstName.message}</p>}

          <label>LAST NAME :</label>
          <input
            type="text"
            name="lastName"
            {...register("lastName", {
              required: "Fill last name",
              minLength: {
                value: 5,
                message: "Minimum 5 characters required!",
              },
              maxLength: {
                value: 8,
                message: "Max 8 characters required!",
              },
            })}
          />
          {errors.lastName && <p className="err">{errors.lastName.message}</p>}

          <label>EMAIL :</label>
          <input
            type="email"
            name="email"
            {...register("email", { 
              required: "Email Required!",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid Email",
              }
            })}
          />
          {errors.email && <p className="err">{errors.email.message}</p>}

          <label>PASSWORD :</label>
          <input
            type="password"
            name="password"
            {...register("password", { 
              required: "Fill Password!",
              minLength: {
                value: 8,
                message: "Min 8 characters required!",
              },
              pattern:{
                value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:"Password Not Valid"
              }
            })}
          />
          {errors.password && <p className="err">{errors.password.message}</p>}

          <input type="submit" value={"REGISTER"} />
          <button type="button" onClick={() => reset()}>RESET</button>
        </form>
    </div>
  );
};

export default FormUse;
